import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/?error=oauth", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));
  }

  const clientId = process.env.TWITCH_CLIENT_ID;
  const clientSecret = process.env.TWITCH_CLIENT_SECRET;
  const redirectUri = process.env.TWITCH_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return NextResponse.redirect(new URL("/?error=config", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));
  }

  const tokenResponse = await fetch("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      grant_type: "authorization_code",
      redirect_uri: redirectUri
    })
  });

  const tokenData = await tokenResponse.json();

  if (!tokenResponse.ok || !tokenData.access_token) {
    return NextResponse.redirect(new URL("/?error=twitch", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));
  }

  const userResponse = await fetch("https://api.twitch.tv/helix/users", {
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
      "Client-Id": clientId
    }
  });

  const userData = await userResponse.json();
  const user = userData?.data?.[0];

  if (!user) {
    return NextResponse.redirect(new URL("/?error=user", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));
  }

  const response = NextResponse.redirect(
    new URL("/stream", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
  );

  response.cookies.set("twitch_session", JSON.stringify({
    id: user.id,
    login: user.login,
    display_name: user.display_name,
    profile_image_url: user.profile_image_url
  }), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });

  return response;
}

import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.redirect(new URL("/", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));
  response.cookies.set("twitch_session", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0
  });
  return response;
}

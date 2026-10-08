import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const session = cookieStore.get("twitch_session")?.value;

  if (!session) {
    return NextResponse.json({ user: null });
  }

  try {
    const user = JSON.parse(session);
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null });
  }
}

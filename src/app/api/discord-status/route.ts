import { NextResponse } from "next/server";

export async function GET() {
  const DISCORD_ID = process.env.DISCORD_ID; // your Discord user ID
  if (!DISCORD_ID) {
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
    if (!res.ok) throw new Error("Lanyard API error");

    const data = await res.json();

    // Return only what you want to expose publicly
    const publicData = {
      discordName: data.data.discord_user.username,
      discordAvatar: `https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}.png`,
      status: data.data.discord_status,
      listening_to_spotify: data.data.listening_to_spotify,
      activities: data.data.listening_to_spotify ? data.data.spotify : null,
    };

    return NextResponse.json(publicData);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch Discord status" },
      { status: 502 }
    );
  }
}

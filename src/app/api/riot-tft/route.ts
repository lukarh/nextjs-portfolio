import { NextResponse } from "next/server";
import { RiotTFTQueueData, TFTRankInfo } from "@/models/riot";

export async function GET() {
  const RIOT_PUUID = process.env.RIOT_PUUID;
  const RIOT_API_TOKEN = process.env.RIOT_API_TOKEN;

  if (!RIOT_PUUID || !RIOT_API_TOKEN) {
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 }
    );
  }

  const noDataResponse = {
    tier: "N/A",
    rank: "N/A",
    wins: 0,
    losses: 0,
  };

  try {
    const res = await fetch(
      `https://na1.api.riotgames.com/tft/league/v1/by-puuid/${RIOT_PUUID}`,
      {
        method: "GET",
        headers: {
          "X-Riot-Token": RIOT_API_TOKEN,
        },
      }
    );
    if (!res.ok) throw new Error("Riot Games API error");

    const data = await res.json();

    let publicData: TFTRankInfo;

    if (data.length > 0) {
      const rankedTFTData = data.find((queue: RiotTFTQueueData) => {
        return queue.queueType === "RANKED_TFT";
      });

      if (rankedTFTData) {
        publicData = {
          tier: rankedTFTData.tier,
          rank: rankedTFTData.rank,
          wins: rankedTFTData.wins,
          losses: rankedTFTData.losses,
        };
      } else {
        publicData = noDataResponse;
      }
    } else {
      publicData = noDataResponse;
    }

    return NextResponse.json(publicData);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch Riot API TFT data" },
      { status: 502 }
    );
  }
}

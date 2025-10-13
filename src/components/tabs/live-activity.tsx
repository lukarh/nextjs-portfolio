"use client";
import React from "react";
// import { useState, useEffect } from "react";
import { SiSpotify, SiChessdotcom } from "react-icons/si";
import { PiGameControllerFill } from "react-icons/pi";
import SongProgressBar from "@/components/song-progress-bar";
import { DiscordStatus } from "@/models/discord-status";
// import { TFTRankInfo } from "@/models/riot";

export default function LiveActivity({
  status,
  fetchStatus,
}: {
  status: DiscordStatus | null;
  fetchStatus: () => Promise<void>;
}) {
  // const [loading, setLoading] = useState(true);
  // const [tftData, setTFTData] = useState<TFTRankInfo>({} as TFTRankInfo);

  // const fetchTFTData = async () => {
  //   try {
  //     const res = await fetch("/api/riot-tft");
  //     const data = await res.json();
  //     setTFTData(data);
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchTFTData();
  // }, []);

  const rankTextColor = (tier: string) => {
    switch (tier) {
      case "IRON":
        return "#6E6E6E";
      case "BRONZE":
        return "#B87333";
      case "SILVER":
        return "#C0C0C0";
      case "GOLD":
        return "#FFD700";
      case "PLATINUM":
        return "#66E1D2";
      case "EMERALD":
        return "#00A86B";
      case "DIAMOND":
        return "#00B4FF";
      case "MASTER":
        return "#800080";
      case "GRANDMASTER":
        return "#FF4500";
      case "CHALLENGER":
        return "#FF1493";
      default:
        return "#6E6E6E";
    }
  };

  // const rankText = () => {
  //   if (tftData.tier === "N/A") {
  //     return "N/A";
  //   } else {
  //     return `${tftData.tier} ${tftData.rank}`;
  //   }
  // };

  return (
    <div>
      <div className="w-full flex flex-col gap-3 bg-[#2C2D32] p-5 mt-5 rounded-xl">
        <div className="flex flex-row items-center gap-2">
          <h2 className="font-bold text-xs text-gray-300">
            {status?.listening_to_spotify
              ? "Listening to Spotify"
              : "Somehow Not Listening to Spotify atm - so here's one of my favorite song now"}
          </h2>
          <SiSpotify className="text-gray-500" size={14} />
        </div>
        <div className="flex flex-row gap-5">
          <img
            src={
              status?.activities?.album_art_url ||
              "assets/spotify/harrys_house.jpg"
            }
            alt={`${status?.activities?.album} cover`}
            className="w-32 h-32 rounded"
          />
          <div className="w-full flex flex-col justify-center">
            <span className="font-bold">
              {status?.activities?.song || "Daylight"}
            </span>
            <span className="text-sm mb-3">
              {status?.activities?.artist || "Harry Styles"}
            </span>
            <SongProgressBar
              start={status?.activities?.timestamps.start || 0}
              end={status?.activities?.timestamps.end || 0}
              onSongEnd={fetchStatus}
              listeningToSpotify={status?.listening_to_spotify || false}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 bg-[#2C2D32] p-5 mt-5 rounded-xl">
        <div className="flex flex-row items-center gap-2">
          <h2 className="font-bold text-xs text-gray-300">Teamfight Tactics</h2>
          <SiChessdotcom className="text-gray-500" size={14} />
        </div>
        <div className="flex flex-row gap-5">
          <img
            src={"assets/icons/TFT.png"}
            alt={`Teamfight Tactics cover`}
            className="w-32 h-32 rounded"
          />
          <div className="w-full flex flex-col justify-center">
            <span className="font-bold">Ranked</span>
            <div>
              <span
                className="text-sm mb-3"
                style={{ color: rankTextColor("DIAMOND") }}
                // style={{ color: rankTextColor(tftData.tier || "N/A") }}
              >
                {"DIAMOND III"}
                {/* {rankText()} */}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 bg-[#2C2D32] p-5 mt-5 rounded-xl">
        <div className="flex flex-row items-center gap-2">
          <h2 className="font-bold text-xs text-gray-300">
            Here are some other game titles that I enjoy playing!
          </h2>
          <PiGameControllerFill className="text-gray-500" size={14} />
        </div>
        <div className="flex flex-row gap-5">
          <img
            src={"assets/icons/valorant.jpg"}
            alt={`Valorant cover`}
            className="w-32 h-32 rounded"
          />
          <img
            src={"assets/icons/pokemon.png"}
            alt={`Teamfight Tactics cover`}
            className="w-32 h-32 rounded"
          />
        </div>
      </div>
    </div>
  );
}

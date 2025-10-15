"use client";
import React from "react";
import { useEffect, useState } from "react";
import DiscordCard from "@/components/discord-card";
import { DiscordStatus } from "@/models/discord-status";
import Profile from "@/components/profile";
import Tabs from "@/components/tabs/tabs";

export default function Home() {
  const [status, setStatus] = useState<DiscordStatus | null>(null);

  const fetchStatus = async () => {
    // setLoading(true);
    try {
      const res = await fetch("/api/discord-status");
      const data = await res.json();
      setStatus(data);
    } catch (err) {
      console.error(err);
    }
    // finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <main className="h-screen xl:h-auto xl:min-h-screen w-full bg-zinc-900 flex flex-col">
      {/* DESKTOP SIZE AND ABOVE */}
      <div className="hidden xl:block p-20">
        <DiscordCard />
      </div>

      {/* TABLET SCREEN SIZES AND BELOW */}
      <div className="block xl:hidden items-center justify-center overflow-y-auto relative hide-scrollbar mb-[65px]">
        {/* BANNER & AVATAR & TABS*/}
        <Profile status={status} avatarLeft={2} statusLeft={4} />
        <div className="m-5">
          <Tabs status={status} fetchStatus={fetchStatus} />
        </div>
      </div>
    </main>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import StatusIcon from "@/components/status-icon";
import { DiscordStatus } from "@/models/discord-status";

export default function Profile({
  status,
  avatarLeft,
  statusLeft,
}: {
  status: DiscordStatus | null;
  avatarLeft: number;
  statusLeft: number;
}) {
  return (
    <>
      <div className="h-[9.5%] overflow-hidden rounded-t-lg">
        <Image
          src="/assets/profile/spaceV2.gif"
          alt="Discord Banner"
          width={700}
          height={150}
          className="w-full h-auto object-cover object-bottom"
          unoptimized
        />
        <div
          className="absolute top-18 z-2"
          style={{ left: `${avatarLeft}rem` }}
        >
          <Image
            src="/assets/profile/decoration.png"
            alt="Discord Avatar Decoration"
            width={144}
            height={144}
            unoptimized
          />
        </div>
        <div
          className="absolute top-18 z-1"
          style={{ left: `${avatarLeft}rem` }}
        >
          <Image
            src={status?.discordAvatar || "/assets/profile/eevee.png"}
            alt="Discord Avatar"
            className="rounded-full bg-white outline-10 outline-[#1A1A1E]"
            width={144}
            height={144}
          />
        </div>
        <StatusIcon status={status?.status} leftRemShift={statusLeft} />
      </div>
      <div className="m-5 mt-20 text-white">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col ml-5">
            <h1 className="text-2xl font-bold">Lukar</h1>
            <div className="flex flex-row flex-wrap items-center gap-2">
              <span className="text-xl">lukar.h</span>
              <span className="font-sans">•</span>
              <span className="font-sans">(he/him)</span>
              <div className="flex flex-row gap-2">
                <Image
                  src="/assets/badges/known.png"
                  alt="Discord Known Icon"
                  title="lukar.h"
                  width={16}
                  height={16}
                />
                <Image
                  src="/assets/badges/developer.gif"
                  alt="Discord Known Icon"
                  title="Developer Badge"
                  width={16}
                  height={16}
                  unoptimized
                />
                <Image
                  src="/assets/badges/quest.png"
                  alt="Discord Known Icon"
                  title="Completed a Quest"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

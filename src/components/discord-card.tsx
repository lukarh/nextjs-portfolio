"use client";
import React from "react";
import { useEffect, useState } from "react";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Tabs from "./tabs/tabs";
import { DiscordStatus } from "@/models/discord-status";
import StatusIcon from "./status-icon";

export default function DiscordCard() {
  const [status, setStatus] = useState<DiscordStatus | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStatus = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/discord-status");
      const data = await res.json();
      setStatus(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const x: MotionValue<number> = useMotionValue(0);
  const y: MotionValue<number> = useMotionValue(0);

  const mouseXSpring: MotionValue<number> = useSpring(x);
  const mouseYSpring: MotionValue<number> = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["8.0deg", "-8.0deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-8.0deg", "8.0deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect: DOMRect | undefined = (
      e.currentTarget as HTMLElement
    )?.getBoundingClientRect();

    if (rect) {
      const height: number = rect.height;
      const width: number = rect.width;

      // calculate coords of mouse relative to the container
      const mouseX: number = e.clientX - rect.left;
      const mouseY: number = e.clientY - rect.top;

      const xPct: number = mouseX / width - 0.5; // puts it on a scale from -0.5 to 0.5 instead of 0.0 to 1.0
      const yPct: number = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative flex flex-col mx-5"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className={`relative rounded-lg min-h-[1000px] w-[700px] max-w-[700px] shadow-2xl 
          bg-[#1A1A1E] outline-[#323236] outline-2 text-white`}
        style={{ transform: "translateZ(75px)" }}
      >
        <div className="h-[150px] overflow-hidden rounded-t-lg">
          <img
            src="assets/profile/spaceV2.gif"
            alt="Discord Banner"
            className="w-full h-auto object-cover object-bottom"
          />
          <div className="absolute top-18 left-5 w-36 h-36 z-2">
            <img
              src="assets/profile/decoration.png"
              alt="Discord Avatar Decoration"
            />
          </div>
          <div className="absolute top-18 left-5 w-36 h-36 z-1">
            <img
              src={status?.discordAvatar || "assets/profile/eevee.png"}
              alt="Discord Avatar"
              className="rounded-full bg-white outline-10 outline-[#1A1A1E] w-36 h-36"
            />
          </div>
          <StatusIcon status={status?.status} />
        </div>
        <div className="flex flex-col m-5 mt-20">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col sm:ml-5">
              <h1 className="text-2xl font-bold">Lukar</h1>
              <div className="flex flex-row flex-wrap items-center gap-2">
                <span className="text-xl">lukar.h</span>
                <span className="font-sans">•</span>
                <span className="font-sans">(he/him)</span>
                <div className="flex flex-row gap-2">
                  <img
                    src="assets/badges/known.png"
                    alt="Discord Known Icon"
                    className="h-4 w-4"
                    title="lukar.h"
                  />
                  <img
                    src="assets/badges/developer.gif"
                    alt="Discord Known Icon"
                    className="h-4 w-4"
                    title="Developer Badge"
                  />
                  <img
                    src="assets/badges/quest.png"
                    alt="Discord Known Icon"
                    className="h-4 w-4"
                    title="Completed a Quest"
                  />
                </div>
              </div>
            </div>
          </div>
          <Tabs status={status} fetchStatus={fetchStatus} />
        </div>
      </div>
    </motion.div>
  );
}

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
import Profile from "./profile";

export default function DiscordCard() {
  const [status, setStatus] = useState<DiscordStatus | null>(null);
  // const [loading, setLoading] = useState(true);

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
        <Profile status={status} avatarLeft={2} statusLeft={4} />
        <div className="m-5">
          <Tabs status={status} fetchStatus={fetchStatus} />
        </div>
      </div>
    </motion.div>
  );
}

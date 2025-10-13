"use client";
import React from "react";
import { motion } from "framer-motion";
import { resume } from "../../../data/resume";
import { Resume } from "@/models/data";
import ResumeCard from "@/components/resume-card";

export default function Page() {
  return (
    <main className="h-screen w-full bg-zinc-900">
      <div className="h-[95%] flex flex-col items-center w-full max-w-3xl px-10 py-20 mx-10 overflow-y-auto relative hide-scrollbar scroll-fade">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative border-l border-[#40444b] m-2"
        >
          {resume.map((item: Resume, index: number) => {
            return <ResumeCard item={item} index={index} key={index} />;
          })}
        </motion.div>
      </div>
    </main>
  );
}

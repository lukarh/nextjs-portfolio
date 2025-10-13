"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaChevronDown,
  FaChevronUp,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import { resume } from "../../data/resume";
import SkillBadge from "./skill-badge";
import { Resume } from "@/models/data";

export default function Timeline() {
  return (
    <div className="h-[95%] flex flex-col items-center w-full max-w-3xl px-10 py-20 mx-10 overflow-y-auto relative hide-scrollbar scroll-fade">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative border-l border-[#40444b] m-2"
      >
        {resume.map((item: Resume, index: number) => {
          const [expanded, setExpanded] = useState(false);
          const [isClamped, setIsClamped] = useState(false);
          const textRef = useRef<HTMLParagraphElement>(null);
          const cardRef = useRef<HTMLDivElement>(null);
          const isInView = useInView(cardRef, { margin: "-50px" });

          useEffect(() => {
            const el = textRef.current;
            if (!el) return;
            requestAnimationFrame(() => {
              setIsClamped(el.scrollHeight > el.clientHeight);
            });
          }, [item.description]);

          return (
            <motion.div
              key={item.id}
              ref={cardRef}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -40 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-10 ml-6 relative"
            >
              {/* Timeline Dot */}
              <span
                className={`absolute -left-[32px] flex items-center justify-center w-4 h-4 rounded-full ${
                  item.type === "work"
                    ? "bg-indigo-500 shadow-indigo-500/50"
                    : "bg-emerald-500 shadow-emerald-500/50"
                } shadow-md`}
              ></span>

              <div className="bg-[#1A1A1E] border border-[#323236] rounded-xl p-5 shadow-lg hover:shadow-xl hover:border-slate-400/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-1">
                  {item.type === "work" ? (
                    <FaBriefcase className="text-indigo-400 text-lg" />
                  ) : (
                    <FaGraduationCap className="text-emerald-400 text-lg" />
                  )}
                  <h3 className="text-lg font-semibold text-slate-100">
                    {item.title}
                  </h3>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <p className="text-md text-slate-400 font-medium">
                    {item.organization}
                  </p>
                  {item.src && (
                    <img
                      className="w-5 h-5 object-contain"
                      src={item.src}
                      alt={`${item.alt} Icon`}
                    />
                  )}
                </div>
                <p className="text-sm text-slate-500 mb-2">{item.period}</p>

                {item.skills && (
                  <div className="flex flex-row flex-wrap gap-3 mb-2 text-sm">
                    {item.skills.map((name: string, index: number) => {
                      return (
                        <SkillBadge name={name} textSize={"xs"} key={index} />
                      );
                    })}
                  </div>
                )}

                <div className="relative">
                  <p
                    ref={textRef}
                    className={`text-sm text-slate-300 leading-relaxed whitespace-pre-line transition-all duration-300 ${
                      expanded ? "line-clamp-none" : "line-clamp-3"
                    }`}
                  >
                    {item.description}
                  </p>

                  {isClamped && (
                    <button
                      onClick={() => setExpanded((prev) => !prev)}
                      className="flex items-center gap-1 text-slate-400 hover:text-slate-200 mt-2 text-sm"
                    >
                      {expanded ? (
                        <>
                          Show less <FaChevronUp className="text-xs" />
                        </>
                      ) : (
                        <>
                          Show more <FaChevronDown className="text-xs" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

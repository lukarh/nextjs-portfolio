import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { RiGitRepositoryFill } from "react-icons/ri";
import SkillBadge from "./skill-badge";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  techStack,
  githubURL,
  appURL,
  src,
  index,
}: {
  title: string;
  description: string;
  techStack: Array<string>;
  githubURL: string;
  appURL: string;
  src: string;
  index: number;
}) {
  return (
    <motion.li
      className="flex justify-center"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      key={index}
    >
      <div
        className={`group flex flex-col gap-3 p-7 min-h-[325px] max-w-[900px] rounded-2xl shadow-2xl
     bg-[#1A1A1E] backdrop-blur-md outline-[#323236] outline-2 hover:outline-slate-200/30
     transform transition-transform duration-300 ease-out hover:scale-105
     hover:!opacity-100 group-hover/list:opacity-50`}
      >
        {/* TOP LOGOS */}
        <div className="flex flex-row items-center justify-between">
          <RiGitRepositoryFill className="text-gray-400" size={40} />
          <div className="flex flex-row gap-3">
            <a href={githubURL} target="_blank">
              <FaGithub className="hover:text-white text-gray-400" size={32} />
            </a>
            {appURL && (
              <a href={appURL} target="_blank">
                <FiExternalLink
                  className="hover:text-white text-gray-400"
                  size={32}
                />
              </a>
            )}
          </div>
        </div>
        {/* CONTENT */}
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-row items-center">
            <div className="flex flex-col pr-5">
              <p className="text-lg sm:text-xl text-slate-200 font-bold pb-5">
                {title}
              </p>
              <p className="text-sm sm:text-lg text-slate-300 font-medium">
                {description}
              </p>
            </div>
            <div className="flex-shrink-0 hidden sm:block w-[200px] aspect-video rounded-xl border-2 border-slate-200/10 group-hover:border-slate-200/20 overflow-hidden">
              <Image
                src={src}
                alt={title}
                width={400}
                height={225}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-3 mt-3">
            {techStack?.map((name: string, index: number) => {
              return <SkillBadge name={name} textSize={"xs"} key={index} />;
            })}
          </div>
        </div>
      </div>
    </motion.li>
  );
}

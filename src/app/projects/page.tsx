"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { projectItems } from "../../../data/projects";
import { Project } from "@/models/data";

export default function Page() {
  return (
    <main className="h-screen w-full bg-zinc-900">
      <ul
        className={`h-full max-w-[900px] group/list overflow-y-auto hide-scrollbar
          flex flex-col gap-10 pt-20 pb-20 py-10 px-15 scroll-fade`}
      >
        {projectItems.map((project: Project, index: number) => {
          return (
            <motion.li
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                githubURL={project.githubURL}
                appURL={project.appURL}
                src={project.src}
              />
            </motion.li>
          );
        })}
      </ul>
    </main>
  );
}

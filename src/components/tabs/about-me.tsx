import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { SiSpotify, SiLinkedin, SiGithub } from "react-icons/si";
import SkillBadge from "@/components/skill-badge";
import Image from "next/image";

const techStack = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "CSS",
  "HTML",
  "Plotly / Dash",
];

const experiences = [
  {
    place: "Spatial Front Inc.",
    title: "Front-End Developer",
    timeframe: "Oct 2023 — Present",
    png: "/assets/icons/sfi.png",
    alt: "SFI Icon",
  },
  {
    place: "Carnegie Mellon",
    title: "Alumni - B.S. in Physics",
    timeframe: "Aug 2018 — May 2022",
    png: "/assets/icons/cmu.png",
    alt: "CMU Icon",
  },
];

const connections = [
  {
    social: "GitHub",
    href: "https://github.com/lukarh",
    icon: (
      <SiGithub
        className="text-gray-500 bg-white rounded p-[0.15rem]"
        size={16}
      />
    ),
  },
  {
    social: "LinkedIn",
    href: "https://www.linkedin.com/in/lukar-huang-50682a146/",
    icon: (
      <SiLinkedin
        className="text-blue-500 bg-white rounded p-[0.15rem]"
        size={16}
      />
    ),
  },
  {
    social: "Spotify",
    href: "https://open.spotify.com/user/ymcovc6imezhwtmta3m3ahi95?si=f5d2a3e52f294ca7",
    icon: (
      <SiSpotify
        className="text-[#1DB954] bg-white rounded p-[0.1rem]"
        size={16}
      />
    ),
  },
];

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-3 py-5 sm:px-5 text-[#D0D0D2]">
      {/* BIOGRAPHY SECTION */}
      <p>
        hey! I'm Lukar and currently a<strong> Front-End Developer </strong>
        for the GRAS Team at
        <span className="text-blue-500 font-bold"> Spatial Front Inc</span>.
        Graduated from
        <span className="text-red-800 font-bold"> Carnegie Mellon </span> in
        2022 with a B.S. in Physics, which inspired my journey into software &
        tech!
      </p>
      <p>
        Outside of work, I enjoy playing video games — particularly games that
        involve 🤝 teamwork, 🎯 tactical decision-making, and♟️strategy, which
        are skills that I try to apply both in and out of work. And yes, I touch
        grass occassionally by playing basketball 🏀 and working out🏋️‍♂️.
      </p>
      {/* EXPERIENCE & EDUCATION SECTION */}
      <div>
        <h2 className="font-bold text-lg">Experience & Education</h2>
        <div className="flex flex-col gap-1 mt-1">
          {experiences.map((experience, index) => {
            return (
              <div
                className="flex flex-row flex-wrap gap-2 items-center"
                key={index}
              >
                <Image
                  src={experience.png}
                  alt={experience.alt}
                  height={20}
                  width={20}
                />
                <p className="mt-[2px]">{experience.place}</p>
                <span className="font-sans">•</span>
                <p className="mt-[2px]">{experience.title}</p>
                <span className="font-sans">•</span>
                <p className="mt-[2px]">{experience.timeframe}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* CONNECTIONS SECTION */}
      <div>
        <h2 className="font-bold text-lg mb-3">Connections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
          {connections.map((connection, index) => {
            return (
              <div
                className="flex flex-row flex-wrap justify-between gap-2 items-center rounded-md bg-[#242429] outline-[#323236] outline-1 px-3 py-1"
                key={index}
              >
                <div className="flex flex-row items-center gap-2">
                  {connection.icon}
                  <span className="font text-sm pb-[0.035rem]">
                    {connection.social}
                  </span>
                </div>
                {connection.href && (
                  <a href={connection.href} target="_blank">
                    <FiArrowUpRight className="text-gray-500 hover:text-white" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* TECH STACK SECTION */}
      <div>
        <h2 className="font-bold text-lg mb-3">Tech Stack</h2>
        <div className="flex flex-row flex-wrap gap-3 mt-1">
          {techStack.map((name, index) => {
            return <SkillBadge name={name} textSize={"sm"} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

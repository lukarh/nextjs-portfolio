"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { LuUserRound, LuFile } from "react-icons/lu";
import { MdOutlineTimeline } from "react-icons/md";

export default function Sidebar() {
  const SidebarData = [
    {
      icon: <LuUserRound size={18} />,
      text: "About Me",
      hrefs: ["/about", "/"],
    },
    {
      icon: <MdOutlineTimeline size={18} />,
      text: "My Journey",
      hrefs: ["/journey"],
    },
    {
      icon: <LuFile size={18} />,
      text: "Projects",
      hrefs: ["/projects"],
    },
    // {
    //   icon: <LuMessageCircle size={18} />,
    //   text: "Message",
    //   hrefs: ["/message"],
    // },
  ];

  const pathname = usePathname();

  return (
    <aside className="h-auto min-w-[15rem] w-2/3 max-w-[2/3] shrink hidden xl:flex xl:flex-col bg-[#121214]">
      <nav className="pt-10">
        <div className="w-full flex-1 flex flex-col items-end px-5 pb-2">
          <div className="w-[175px]">
            <p className="text-[#A5A5AC] text-sm font-medium">User Settings</p>
          </div>
        </div>
        <ul className="w-full flex-1 flex flex-col items-end px-3">
          {SidebarData.map((data, index) => {
            const isActive = data.hrefs.includes(pathname);
            return (
              <SideBarItem
                key={index}
                icon={data.icon}
                text={data.text}
                active={isActive}
                hrefs={data.hrefs}
              />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export function SideBarItem({
  icon,
  text,
  active,
  hrefs,
}: {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  hrefs: string[];
}) {
  return (
    <a href={hrefs[0]} className="px-5">
      <li
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer
      transition-colors hover:bg-zinc-800 w-[175px] gap-3 hover:text-white
      ${active && "bg-zinc-800"} ${active ? "text-white" : "text-[#A5A5AC]"}
      `}
      >
        <span className="min-w-[18px] h-[18px]">{icon}</span>
        <span className="hidden sm:block">{text}</span>
      </li>
    </a>
  );
}

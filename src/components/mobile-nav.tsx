"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { LuUserRound, LuFile } from "react-icons/lu";
import { MdOutlineTimeline } from "react-icons/md";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    {
      icon: <LuUserRound size={20} />,
      text: "About",
      hrefs: ["/about", "/"],
    },
    {
      icon: <MdOutlineTimeline size={20} />,
      text: "Journey",
      hrefs: ["/journey"],
    },
    {
      icon: <LuFile size={20} />,
      text: "Projects",
      hrefs: ["/projects"],
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-[#2B2E35] rounded-t-2xl border-t border-zinc-800 py-3 xl:hidden">
      {navItems.map((item, index) => {
        const isActive = item.hrefs.includes(pathname);
        return (
          <MobileNavItem
            key={index}
            icon={item.icon}
            text={item.text}
            href={item.hrefs[0]}
            active={isActive}
          />
        );
      })}
    </nav>
  );
}

function MobileNavItem({
  icon,
  text,
  href,
  active,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
  active: boolean;
}) {
  return (
    <a
      href={href}
      className={`flex flex-col items-center justify-center gap-1 text-sm transition-colors ${
        active ? "text-white" : "text-zinc-400 hover:text-white"
      }`}
    >
      <span>{icon}</span>
      <span className="text-xs">{text}</span>
    </a>
  );
}

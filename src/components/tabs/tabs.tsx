"use client";
import { useState } from "react";
import AboutMe from "./about-me";
import LiveActivity from "./live-activity";
import { DiscordStatus } from "@/models/discord-status";

export default function Tabs({
  status,
  fetchStatus,
}: {
  status: DiscordStatus | null;
  fetchStatus: () => Promise<void>;
}) {
  const tabs = [
    { id: "AboutMe", label: "About Me", content: <AboutMe /> },
    {
      id: "LiveActivity",
      label: "Live Activity",
      content: <LiveActivity status={status} fetchStatus={fetchStatus} />,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex flex-col mt-1">
      <div className="border-b border-gray-500">
        <div className="w-[100%] flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 py-1 text-sm font-bold text-center transition-all duration-200 cursor-pointer hover:border-b-1 hover:border-white ${
                activeTab === tab.id
                  ? "border-b-1 border-white"
                  : "text-gray-500 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap overflow-y-auto">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`w-full ${tab.id === activeTab ? "block" : "hidden"}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

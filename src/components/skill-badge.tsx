import { skillsMap } from "../../data/skillsMap";

export default function SkillBadge({
  name,
  textSize,
}: {
  name: string;
  textSize: "xs" | "sm" | "md" | "lg" | "xl";
}) {
  return (
    <div className="flex flex-row items-center justify-center bg-[#242429] outline-[#323236] outline-1 px-2.5 py-0.5 rounded">
      <div
        className="w-2.5 h-2.5 rounded-full mr-2"
        style={{ backgroundColor: skillsMap[name] }}
      />
      <span className={`text-${textSize} text-[#D0D0D2] mt-[1px]`}>{name}</span>
    </div>
  );
}

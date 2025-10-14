import DiscordCard from "@/components/discord-card";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-zinc-900 flex flex-col">
      <div className="p-20">
        <DiscordCard />
      </div>
    </main>
  );
}

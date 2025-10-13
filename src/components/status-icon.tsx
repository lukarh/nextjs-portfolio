export default function StatusIcon({ status }: { status: string | undefined }) {
  const getStatusStyles = () => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "idle":
        return "bg-yellow-500";
      case "dnd":
        return "bg-red-500";
      case "offline":
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      className={`absolute top-45 left-32 z-10 outline-[#1A1A1E] outline-6 w-6 h-6 rounded-full ${getStatusStyles()}`}
    >
      {status === "idle" && (
        <div className="absolute top-[-3] left-[-3] w-[1.3rem] h-[1.3rem] z-10 rounded-full bg-[#1A1A1E]"></div>
      )}
      {status === "dnd" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="w-4 h-[4px] bg-gray-900"></div>
        </div>
      )}
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  start: number;
  end: number;
  onSongEnd?: () => void;
  listeningToSpotify: boolean;
}

export default function SpotifyProgressBar({
  start,
  end,
  onSongEnd,
  listeningToSpotify,
}: ProgressBarProps) {
  const duration = end - start;

  const initialNow = Math.min(Math.max(Date.now(), start), end);
  const [current, setCurrent] = useState(initialNow);
  const [progress, setProgress] = useState(
    ((initialNow - start) / duration) * 100
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Math.min(Date.now(), end);
      setCurrent(now);
      setProgress(((now - start) / duration) * 100);

      // trigger lanyard API discord call when songs finishes...
      if (now >= end && listeningToSpotify) {
        if (onSongEnd) onSongEnd();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [start, end, duration, onSongEnd]);

  const formatTime = (ms: number) => {
    if (isNaN(ms) || ms < 0) return "0:00";
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center w-full space-x-2">
      <span className="text-xs">{formatTime(current - start)}</span>
      <div className="relative flex-1 h-1 bg-gray-500 rounded">
        <div
          className="absolute h-1 bg-white rounded"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-xs">{formatTime(duration)}</span>
    </div>
  );
}

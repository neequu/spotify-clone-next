"use client";
import Image from "next/image";
import { prominent } from "color.js";
import { Song } from "@/types/supabase";
import { useEffect, useState } from "react";

const SongInfo = ({
  songImageUrl,
  children,
}: {
  songImageUrl: string;
  children: React.ReactNode;
}) => {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    prominent(songImageUrl, { format: "hex", amount: 2 }).then((colors) =>
      setColors(colors as string[]),
    );
  }, [songImageUrl]);

  const styling = {
    background: `linear-gradient(${[...colors.map((x) => x + "77")]})`,
  };

  return (
    <div
      className={`flex flex-col gap-4 border-b border-neutral-800 px-2 pb-4 pt-[48px] md:flex-row md:items-end md:px-4 md:pb-10 md:pt-[64px] ${
        !colors.length ? "animate-pulse bg-page" : ""
      }`}
      style={styling}
    >
      {children}
    </div>
  );
};

export default SongInfo;

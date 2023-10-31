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
    async function getColors() {
      try {
        const colors = await prominent(songImageUrl, {
          format: "hex",
          amount: 2,
        });
        setColors(colors as string[]);
      } catch (e) {
        setColors(["#404040", "#9198e5"]);
      }
    }

    getColors();
  }, [songImageUrl]);

  const styling = {
    background: `linear-gradient(${[...colors.map((x) => x + "77")]})`,
  };

  return (
    <section
      className={`flex flex-col gap-4 border-b border-neutral-800 px-2 pb-4 pt-[48px] md:flex-row md:items-end md:px-4 md:pb-10 md:pt-[64px] ${
        !colors.length ? "animate-pulse bg-page" : ""
      }`}
      style={styling}
    >
      {children}
    </section>
  );
};

export default SongInfo;

import { Song } from "@/types/supabase";
import React from "react";

const SongLyrics = async ({ song }: { song: Song }) => {
  const handleSongLyrics = async () => {
    // @ts-ignore
    const { getLyrics } = await import("genius-lyrics-api");
    const options = {
      apiKey:
        "XCrZKyn7AtnMCX4dnQERovnKKLjrOHkfC9KLCQcLS9F8BN2_gceCDIvVfLMRGosz",
      title: song.title,
      artist: song.artist,
      optimizeQuery: true,
    };

    const lyrics: string = await getLyrics(options);
    return lyrics.split("\n");
  };
  const lyrics = await handleSongLyrics();
  return (
    <div className="sm:ml-0 md:ml-14 lg:ml-20 ">
      <h2 className="mb-4 text-xs">
        lyrics for {song.title} by {song.artist}
      </h2>
      {lyrics.map((l, idx) => (
        <p key={idx}>{l}</p>
      ))}
    </div>
  );
};

export default SongLyrics;

"use client";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, CircleDashed } from "lucide-react";

const SearchElement = ({
  query,
  resultsLength,
}: {
  query: string;
  resultsLength: number | undefined;
}) => {
  const router = useRouter();
  const [value, setValue] = useState(query);
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    const url = debouncedValue
      ? `${location.pathname}?s=${debouncedValue}`
      : location.pathname;

    router.push(url);
  }, [value, debouncedValue, router]);

  const typing = value !== debouncedValue;

  return (
    <>
      <form className="group mt-4 flex items-center rounded-md border border-transparent bg-neutral-800 pr-4 shadow transition [&:has(input:focus-visible)]:border-neutral-500">
        <label
          htmlFor="song-query"
          className="px-2 text-neutral-500 transition-colors group-[&:has(input:focus-visible)]:text-white md:px-4"
        >
          <Search className="aspect-square w-5 md:w-6" strokeWidth="1.5" />
        </label>
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          name="song-query"
          id="song-query"
          placeholder="What do you want to search for?"
          autoFocus
          className="w-full bg-transparent py-[9px] text-sm outline-none placeholder:text-neutral-500 md:py-3 md:text-base"
        />
        <div className="flex  w-10 justify-end text-2xl text-neutral-400">
          {typing ? <CircleDashed className="w-5  animate-spin md:w-6" /> : ""}
        </div>
      </form>
      <p className="mt-4 text-center text-sm text-red-500 md:text-start md:text-base">
        {resultsLength === 0 ? "Nothing found" : ""}
      </p>
    </>
  );
};

export default SearchElement;

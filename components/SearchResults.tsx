import { Song } from "@/types/supabase";
import SongMediaItem from "./SongMediaItem";
import LikeButton from "./buttons/liked/LikeButton";
import PlayButton from "./buttons/PlayButton";
export const revalidate = 0;

const SearchResults = ({
  searchResults,
  resultsLength,
}: {
  searchResults: Song[] | undefined | null;
  resultsLength: number | undefined;
}) => {
  const searchResultsPresent = searchResults && !!resultsLength;
  if (!searchResultsPresent) return null;
  return (
    <ul className="my-4 grid items-start gap-0 md:my-[26px] md:gap-3">
      {searchResults.map((song, idx) => (
        <SongMediaItem key={song.id} song={song} songs={searchResults}>
          <PlayButton
            song={song}
            songs={searchResults}
            className="order-first hidden w-4 md:block"
          >
            <div>{idx + 1}</div>
          </PlayButton>
          <div className="ml-auto grid w-3 place-content-center md:w-5">
            <LikeButton songId={song.id} />
          </div>
        </SongMediaItem>
      ))}
    </ul>
  );
};

export default SearchResults;

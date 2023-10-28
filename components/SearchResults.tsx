import { Song } from '@/types/supabase';
import SongMediaItem from './SongMediaItem';
import LikeButton from './buttons/liked/LikeButton';
import PlayButton from './buttons/play/PlayButton';
export const revalidate = 0;

const SearchResults = ({
  searchResults,
  resultsLength,
}: {
  searchResults: Song[] | undefined | null;
  resultsLength: number | undefined;
}) => {
  const searchResultsPresent = searchResults && !!resultsLength;

  return (
    <ul className='my-4 grid items-start gap-0 md:my-[26px] md:gap-3'>
      {searchResultsPresent &&
        searchResults.map((song, idx) => (
          <SongMediaItem key={song.id} song={song}>
            <PlayButton
              song={song}
              songs={searchResults}
              className='order-first hidden w-10 md:block'>
              <div className='w-10'>{idx + 1}</div>
            </PlayButton>
            <LikeButton songId={song.id} />
          </SongMediaItem>
        ))}
    </ul>
  );
};

export default SearchResults;

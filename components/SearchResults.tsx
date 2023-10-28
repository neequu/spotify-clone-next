import { Song } from '@/types/supabase';
import SongMediaItem from './SongMediaItem';
import LikeButton from './buttons/liked/LikeButton';
import PlayButton from './buttons/play/PlayButton';
export const revalidate = 0;

const SearchResults = async ({
  searchResults,
  resultsLength,
}: {
  searchResults: Song[] | undefined | null;
  resultsLength: number | undefined;
}) => {
  const searchResultsPresent = searchResults && !!resultsLength;

  return (
    <ul className='md:my-[26px] my-4 grid md:gap-3 gap-0 items-start'>
      {searchResultsPresent &&
        searchResults.map(async (song, idx) => (
          <SongMediaItem key={song.id} song={song}>
            <PlayButton
              song={song}
              songs={searchResults}
              className='order-first w-10 md:block hidden'>
              <div className='w-10'>{idx + 1}</div>
            </PlayButton>
            <LikeButton key={song.id} songId={song.id} />
          </SongMediaItem>
        ))}
    </ul>
  );
};

export default SearchResults;

import { Song } from '@/types/supabase';
import SongMediaItem from './SongMediaItem';
import LikeButton from './buttons/liked/LikeButton';
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
            <LikeButton key={song.id} songId={song.id} />
          </SongMediaItem>
        ))}
    </ul>
  );
};

export default SearchResults;

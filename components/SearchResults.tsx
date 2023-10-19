import { Song } from '@/types/supabase';
import LibrarySongItem from './library/LibrarySongItem';
import LikeButton from './LikeButton';
export const revalidate = 0;

const SearchResults = async ({
  searchResults,
}: {
  searchResults: Song[] | undefined;
}) => {
  const searchResultsPresent = searchResults && !!searchResults?.length;

  return (
    <ul
      className='
    md:my-[26px] my-4
    grid gap-3'>
      {searchResultsPresent &&
        searchResults.map((song) => (
          <LibrarySongItem key={song.id} song={song}>
            <LikeButton songId={song.id} />
          </LibrarySongItem>
        ))}
    </ul>
  );
};

export default SearchResults;
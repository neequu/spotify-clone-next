import { Song } from '@/types/types';
import LibrarySongItem from './library/LibrarySongItem';
import LikeButton from './LikeButton';

const SearchResults = async ({
  searchResults,
}: {
  searchResults: Song[] | undefined;
}) => {
  const searchResultsPresent = searchResults && !!searchResults?.length;

  return (
    <section
      className='
    md:my-[26px] my-4
    grid gap-3'>
      {searchResultsPresent &&
        searchResults.map((song) => (
          <LibrarySongItem key={song.id} song={song}>
            <LikeButton songId={song.id} />
          </LibrarySongItem>
        ))}
    </section>
  );
};

export default SearchResults;

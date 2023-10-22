import { Song } from '@/types/supabase';
import SongMediaItem from './SongMediaItem';
import LikeButton from './buttons/liked/LikeButton';
import { getLikedSongById } from '@/app/actions';
export const revalidate = 0;

const SearchResults = async ({
  searchResults,
}: {
  searchResults: Song[] | undefined;
}) => {
  const searchResultsPresent = searchResults && !!searchResults?.length;

  return (
    <ul className='md:my-[26px] my-4 grid gap-3 items-start'>
      {searchResultsPresent &&
        searchResults.map(async (song, idx) => (
          <SongMediaItem key={song.id} song={song}>
            <LikeButton
              key={song.id}
              songId={song.id}
              likedSong={await getLikedSongById(song.id)}
            />
          </SongMediaItem>
        ))}
    </ul>
  );
};

export default SearchResults;

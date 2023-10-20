import { Song } from '@/types/supabase';
import LibrarySongItem from './SongMediaItem';
import LikeButton from './buttons/liked/LikeButton';
import { getLikedSongById } from '@/app/actions';

const LikedSongs = ({ likedSongs }: { likedSongs: Song[] | undefined }) => {
  const hasSongs = likedSongs && !!likedSongs.length;

  return (
    <section className='mt-8 grid gap-3'>
      <ul>
        {hasSongs ? (
          likedSongs.map(async (song) => (
            <LibrarySongItem song={song} key={song.id}>
              <LikeButton
                key={song.id}
                songId={song.id}
                likedSong={await getLikedSongById(song.id)}
              />
            </LibrarySongItem>
          ))
        ) : (
          <div>You havent added anything yet</div>
        )}
      </ul>
    </section>
  );
};

export default LikedSongs;

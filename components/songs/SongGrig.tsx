import { getSongs } from '@/app/actions';
import Playlist from './Playlist';

const SongGrig = async () => {
  const songs = await getSongs();
  return (
    <div className='grid grid-flow-col-dense gap-6'>
      {songs?.map((song) => (
        <Playlist songData={song} key={song.id} />
      ))}
      <Playlist
        songData={{
          id: 17,
          created_at: '2023-10-17T17:18:07.912578+00:00',
          title: '1am',
          artist: '9tails',
          song_path: 'song-1am-9tails-85clnul8bqf',
          image_path: 'image-1am-9tails-85clnul8bqf',
          user_id: 'c3fcb383-0c2c-447f-a5f0-7ccdbf49ecba',
        }}
      />
      <Playlist
        songData={{
          id: 17,
          created_at: '2023-10-17T17:18:07.912578+00:00',
          title: '1am',
          artist: '9tails',
          song_path: 'song-1am-9tails-85clnul8bqf',
          image_path: 'image-1am-9tails-85clnul8bqf',
          user_id: 'c3fcb383-0c2c-447f-a5f0-7ccdbf49ecba',
        }}
      />
      <Playlist
        songData={{
          id: 17,
          created_at: '2023-10-17T17:18:07.912578+00:00',
          title: '1am',
          artist: '9tails',
          song_path: 'song-1am-9tails-85clnul8bqf',
          image_path: 'image-1am-9tails-85clnul8bqf',
          user_id: 'c3fcb383-0c2c-447f-a5f0-7ccdbf49ecba',
        }}
      />
      <Playlist
        songData={{
          id: 17,
          created_at: '2023-10-17T17:18:07.912578+00:00',
          title: '1am',
          artist: '9tails',
          song_path: 'song-1am-9tails-85clnul8bqf',
          image_path: 'image-1am-9tails-85clnul8bqf',
          user_id: 'c3fcb383-0c2c-447f-a5f0-7ccdbf49ecba',
        }}
      />
      <Playlist
        songData={{
          id: 17,
          created_at: '2023-10-17T17:18:07.912578+00:00',
          title: '1am',
          artist: '9tails',
          song_path: 'song-1am-9tails-85clnul8bqf',
          image_path: 'image-1am-9tails-85clnul8bqf',
          user_id: 'c3fcb383-0c2c-447f-a5f0-7ccdbf49ecba',
        }}
      />
      <Playlist
        songData={{
          id: 17,
          created_at: '2023-10-17T17:18:07.912578+00:00',
          title: '1am',
          artist: '9tails',
          song_path: 'song-1am-9tails-85clnul8bqf',
          image_path: 'image-1am-9tails-85clnul8bqf',
          user_id: 'c3fcb383-0c2c-447f-a5f0-7ccdbf49ecba',
        }}
      />
      <Playlist
        songData={{
          id: 17,
          created_at: '2023-10-17T17:18:07.912578+00:00',
          title: '1am',
          artist: '9tails',
          song_path: 'song-1am-9tails-85clnul8bqf',
          image_path: 'image-1am-9tails-85clnul8bqf',
          user_id: 'c3fcb383-0c2c-447f-a5f0-7ccdbf49ecba',
        }}
      />
      <Playlist
        songData={{
          id: 17,
          created_at: '2023-10-17T17:18:07.912578+00:00',
          title: '1am',
          artist: '9tails',
          song_path: 'song-1am-9tails-85clnul8bqf',
          image_path: 'image-1am-9tails-85clnul8bqf',
          user_id: 'c3fcb383-0c2c-447f-a5f0-7ccdbf49ecba',
        }}
      />
      <Playlist
        songData={{
          id: 17,
          created_at: '2023-10-17T17:18:07.912578+00:00',
          title: '1am',
          artist: '9tails',
          song_path: 'song-1am-9tails-85clnul8bqf',
          image_path: 'image-1am-9tails-85clnul8bqf',
          user_id: 'c3fcb383-0c2c-447f-a5f0-7ccdbf49ecba',
        }}
      />
      <Playlist
        songData={{
          id: 17,
          created_at: '2023-10-17T17:18:07.912578+00:00',
          title: '1am',
          artist: '9tails',
          song_path: 'song-1am-9tails-85clnul8bqf',
          image_path: 'image-1am-9tails-85clnul8bqf',
          user_id: 'c3fcb383-0c2c-447f-a5f0-7ccdbf49ecba',
        }}
      />
    </div>
  );
};

export default SongGrig;

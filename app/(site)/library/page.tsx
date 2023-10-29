import TheLibrary from "@/components/library/TheLibrary";
import PlaylistHorizontal from "@/components/songs/PlaylistHorizontal";

const page = () => {
  return (
    <main className="gradient-dark  h-screen flex-1 overflow-auto px-2 pb-[64px] pt-[60px] md:px-4 md:pb-0">
      <h1 className="mb-4 font-semibold xs:text-xl">Your library</h1>
      <div className="flex">
        <PlaylistHorizontal
          name="Liked Songs"
          image="/images/liked-songs.png"
          to="/liked-songs"
        />
      </div>
      <TheLibrary>
        <h1 className="font-semibold xs:text-xl">Uploaded songs</h1>
      </TheLibrary>
    </main>
  );
};

export default page;

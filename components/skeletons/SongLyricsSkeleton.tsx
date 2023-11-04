const SongLyricsSkeleton = () => {
  const placeholders = new Array(10).fill("");
  return (
    <div className="grid w-full gap-2">
      {placeholders.map((_, i) => (
        <>
          <p className="h-[15px] w-2/5 animate-pulse  bg-neutral-700" />
          <p className="h-[15px] w-[55%] animate-pulse  bg-neutral-700" />
          <p className="h-[15px] w-[60%] animate-pulse  bg-neutral-700" />
          <p className="h-[15px] w-[38%] animate-pulse  bg-neutral-700" />
          <p className="h-[15px] w-[42%] animate-pulse  bg-neutral-700" />
        </>
      ))}
    </div>
  );
};

export default SongLyricsSkeleton;

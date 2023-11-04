const SongGridSkeleton = ({ amount }: { amount: number }) => {
  const placeholders = new Array(amount).fill("");
  return (
    <>
      {placeholders.map((_, i) => (
        <div key={i} className="flex flex-col gap-1 rounded bg-neutral-800">
          <div className="mt-2 aspect-square w-[90%] animate-pulse self-center bg-neutral-700"></div>
          <div className=" ml-2 mt-2 h-[20px] w-2/3 animate-pulse bg-neutral-700" />
          <div className=" mb-10 ml-2 h-[16px] w-1/2 animate-pulse bg-neutral-700" />
        </div>
      ))}
    </>
  );
};
export default SongGridSkeleton;

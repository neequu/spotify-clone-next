const SongGridSkeleton = ({ amount }: { amount: number }) => {
  const placeholders = new Array(amount).fill("");
  return (
    <div>
      {placeholders.map((_, i) => (
        <div key={i} className="flex h-[44px] flex-col gap-1">
          <div className=" w-1/2 animate-pulse bg-neutral-700"></div>
          <div className=" w-1/3 animate-pulse bg-neutral-700"></div>
        </div>
      ))}
    </div>
  );
};
export default SongGridSkeleton;

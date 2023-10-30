"use client";
import useAuthModal from "@/hooks/useAuthModal";
import Image from "next/image";
import Link from "next/link";

interface PlaylistHorizontalProps {
  image: string;
  name: string;
  to: string;
  hasSession: boolean;
}

const PlaylistHorizontal = ({
  image,
  name,
  to,
  hasSession,
}: PlaylistHorizontalProps) => {
  const authModal = useAuthModal();
  return (
    <Link
      onClick={() => !hasSession && authModal.onOpen()}
      href={to}
      className="max-w-max flex-1 outline-none focus-visible:shadow-focus"
    >
      <div className="group relative flex w-full items-center gap-2 overflow-hidden rounded bg-neutral-600 bg-opacity-30 pr-[clamp(2rem,10vw,5rem)] backdrop-blur-md transition-colors hover:bg-neutral-700 md:w-52 md:gap-4 md:p-1">
        <Image src={image} alt={`a ${name} playlist`} width={40} height={40} />
        <p className="text-xs md:text-sm">{name}</p>
      </div>
    </Link>
  );
};

export default PlaylistHorizontal;

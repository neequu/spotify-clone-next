"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

interface HeaderNavButtonProps {
  forward?: boolean;
}

const HeaderNavButton = ({ forward }: HeaderNavButtonProps) => {
  const router = useRouter();

  const navigate = () => (forward ? router.forward() : router.back());

  return (
    <button
      aria-label="navigate"
      type="button"
      onClick={() => navigate()}
      className={`rounded-full bg-black bg-opacity-30 p-1 outline-none transition-all hover:bg-opacity-50 focus-visible:shadow-focus ${
        forward && "rotate-180"
      }`}
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
  );
};

export default HeaderNavButton;

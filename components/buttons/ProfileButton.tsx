"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { UserCircle } from "lucide-react";
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import usePlayer from "@/hooks/usePlayer";

const ProfileButton = ({ user }: { user: User }) => {
  const router = useRouter();

  const player = usePlayer();
  const handleSignOut = async () => {
    const supabaseClient = createClientComponentClient<Database>();
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();
    player.reset();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Signed Out!");
    }
  };
  const avatar = user?.user_metadata?.avatar_url;
  return (
    <>
      {avatar ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              aria-label="show drpodown menu"
              type="button"
              className="relative aspect-square w-8 overflow-hidden rounded-full border-2 border-neutral-800 outline-none focus-visible:shadow-focus"
            >
              <Image src={`${avatar}`} alt="user image" fill sizes="32px" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
            <DropdownMenuItem onClick={handleSignOut}>
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <button aria-label="show drpodown menu" type="button">
          <UserCircle strokeWidth={1.5} />
        </button>
      )}
    </>
    // </button>
  );
};

export default ProfileButton;

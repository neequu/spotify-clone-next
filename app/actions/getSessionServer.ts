import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { cookies } from "next/headers";
const getSessionServer = async () => {
  "use server";

  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) return null;

  return session;
};

export default getSessionServer;

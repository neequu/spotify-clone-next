import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

const getSessionClient = async () => {
  const supabaseClient = createClientComponentClient<Database>();
  const {
    data: { session },
    error,
  } = await supabaseClient.auth.getSession();

  if (error) return null;

  return session;
};

export default getSessionClient;

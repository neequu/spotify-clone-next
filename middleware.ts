import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/types/supabase";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  const { pathname } = req.nextUrl;

  const protectedRoute =
    pathname.startsWith("/liked-songs") || pathname.startsWith("/library");

  if ((!session || error) && protectedRoute) {
    return NextResponse.redirect("/");
  }

  return res;
}

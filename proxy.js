import { auth } from "@/auth";
import { getIsUserAuthorized } from "@/helpers/auth-helpers";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export default auth((request) => {
  const { pathname, origin } = request.nextUrl;
  const session = request.auth;
  const isLoggedIn = Boolean(session?.user);
  const userRole = session?.user?.role;
  const isLoginPage = pathname.startsWith("/login");
  const isDashboardPage = pathname.startsWith("/dashboard");

  if (isLoggedIn) {
    if (isLoginPage)
      return NextResponse.redirect(new URL("/dashboard", origin));

    if (isDashboardPage && !getIsUserAuthorized(userRole, pathname)) {
      return NextResponse.redirect(new URL("/unauthorized", origin));
    }

    return NextResponse.next();
  }

  if (isDashboardPage) return NextResponse.redirect(new URL("/login", origin));
  return NextResponse.next();
});

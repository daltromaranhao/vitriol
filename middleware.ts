export { auth as middleware } from "@/auth";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/messages/:path*",
    "/members/:path*",
    "/connections/:path*",
    "/settings/:path*",
  ],
};

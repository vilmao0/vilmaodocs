import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const safeRoutes = createRouteMatcher([
  '/docs(.*)',
  '/secure-services/ss1-ss1/admin-panel',
])
export default clerkMiddleware((auth, req) =>  {
  if(safeRoutes(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
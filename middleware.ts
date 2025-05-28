import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher("/api/webhooks/stripe");

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) return;

  await auth.protect();
});

export const config = {
  matcher: [
    "/courses",
    "/leaderboard",
    "/shop",
    "/learn",
    "/quests",
    "/admin(.*)",
    "/lesson(.*)",
    "/(api|trpc)(.*)",
  ],
};

export default async function sitemap() {
  const staticRoutes = [
    "",
    "/courses",
    "/leaderboard",
    "/learn",
    "/quests",
    "/shop",
    "/admin",
    "/lesson",
    "/sign-in",
    "/sign-up",
  ].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes];
}

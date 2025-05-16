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
  ].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes];
}

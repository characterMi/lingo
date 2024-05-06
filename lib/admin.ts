import { auth } from "@clerk/nextjs/server";

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return process.env.ADMIN_ID === userId ? true : false;
};

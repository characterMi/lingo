import { cache } from "react";
import db from "./drizzle";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs";
import { courses, userProgress } from "./schema";

export const getCourses = cache(async () => {
  return await db.query.courses.findMany();
});

export const getUserProgress = cache(async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });

  return data;
});

export const getCourseById = cache(async (courseId: number) => {
  return await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
    // TODO: Populate units and lessons
  });
});

"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { courses, userProgress } from "@/db/schema";
import { CourseCard } from "./CourseCard";
import { upsertUserProgress } from "@/actions/userProgress";
import { toast } from "sonner";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const CoursesList = ({ activeCourseId, courses }: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) {
      return router.push("learn");
    }

    startTransition(() => {
      upsertUserProgress(id).catch(() =>
        toast.error("Could not choose the language. something went wrong.")
      );
    });
  };

  return (
    <section className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          {...course}
          handleClick={onClick}
          disabled={pending}
          active={course.id === activeCourseId}
        />
      ))}
    </section>
  );
};

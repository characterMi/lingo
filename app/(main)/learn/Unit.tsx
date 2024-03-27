import { FC } from "react";

import { lessons, units } from "@/db/schema";
import { UnitBanner } from "./UnitBanner";
import { LessonButton } from "./LessonButton";

interface UnitsProps {
  id: number;
  title: string;
  description: string;
  order: number;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined;
  activeLessonPercentage: number;
}

export const Unit: FC<UnitsProps> = ({
  activeLesson,
  activeLessonPercentage,
  description,
  id,
  lessons,
  order,
  title,
}) => {
  return (
    <>
      <UnitBanner title={title} description={description} />

      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, i) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={i}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};

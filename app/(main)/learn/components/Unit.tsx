import { FC } from "react";

import { lessons, units } from "@/db/schema";
import { LessonButton } from "./LessonButton";
import { UnitBanner } from "./UnitBanner";

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
  lessons,
  id,
  order,
  title,
}) => {
  // Background and borders.
  const cycleLength = 6;
  const cycleIndex = order % cycleLength;

  let background;
  let border;

  if (cycleIndex <= 1) {
    background = "#22c55e";
    border = "border-green-600";
  } else if (cycleIndex <= 2) {
    background = "#c084fc";
    border = "border-purple-500";
  } else if (cycleIndex <= 3) {
    background = "#34d399";
    border = "border-emerald-500";
  } else if (cycleIndex <= 4) {
    background = "#38bdf8";
    border = "border-sky-500";
  } else if (cycleIndex <= 5) {
    background = "#fb923c";
    border = "border-orange-500";
  } else {
    background = "#22c55e";
    border = "border-green-600";
  }

  return (
    <div className={`mb-10 unit-section__${cycleIndex}`}>
      <UnitBanner
        title={title}
        description={description}
        isActiveUnit={activeLesson?.unitId === id}
        background={background}
      />

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
              background={background}
              border={border}
            />
          );
        })}
      </div>
    </div>
  );
};

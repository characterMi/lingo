import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/FeedWrapper";
import { StickyWrapper } from "@/components/StickyWrapper";
import { Navbar } from "./components/Navbar";
import { UserProgress } from "@/components/UserProgress";
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
} from "@/db/queries";
import { Unit } from "./components/Unit";

const LearnPage = async () => {
  const userProgressPromise = getUserProgress();
  const courseProgressPromise = getCourseProgress();
  const lessonPercentagePromise = getLessonPercentage();
  const unitsDataPromise = getUnits();

  const [userProgress, courseProgress, lessonPercentage, units] =
    await Promise.all([
      userProgressPromise,
      courseProgressPromise,
      lessonPercentagePromise,
      unitsDataPromise,
    ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }


  if (!courseProgress?.activeLesson) {
    redirect("/courses");
  }

  return (
    // add flex-row-reerse
    <div className="flex gap-12 px-6">
      <FeedWrapper>
        <Navbar title={userProgress.activeCourse.title} />

        {units.map((unit) => (
          <div className="mb-10" key={unit.id}>
            <Unit
              {...unit}
              activeLesson={courseProgress.activeLesson}
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))}
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  );
};
export default LearnPage;

import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/FeedWrapper";
import { StickyWrapper } from "@/components/StickyWrapper";
import { Navbar } from "./Navbar";
import { UserProgress } from "@/components/UserProgress";
import { getUserProgress } from "@/db/queries";

const LearnPage = async () => {
  const userProgress = await getUserProgress();

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    // add flex-row-reerse
    <div className="flex gap-12 px-6">
      <FeedWrapper>
        <Navbar title={userProgress.activeCourse.title} />
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

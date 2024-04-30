import { getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/FeedWrapper";
import { Promo } from "@/components/Promo";
import { StickyWrapper } from "@/components/StickyWrapper";
import { UserProgress } from "@/components/UserProgress";
import { Progress } from "@/components/ui/progress";
import { quests } from "@/constants";

export const metadata = {
  title: "Lingo | Quests page",
  description: "Complete quests by earning points.",
};

const QuestsPage = async () => {
  const userProgressPromise = getUserProgress();
  const userSubscriptionPromise = getUserSubscription();

  const [userProgress, userSubscription] = await Promise.all([
    userProgressPromise,
    userSubscriptionPromise,
  ]);

  if (!userProgress || !userProgress.activeCourse) redirect("/courses");

  return (
    <main className="flex gap-12 px-6">
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/quests.svg" alt="Quests" height={90} width={90} />

          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Quests
          </h1>

          <p className="text-muted-foreground text-center text-lg mb-6">
            Complete quests by earning points.
          </p>

          <ul className="w-full">
            {quests.map((quest, i) => {
              const progress = (userProgress.points / quest.value) * 100;

              return (
                <li
                  key={quest.title}
                  className="flex items-center w-full gap-x-4 border-t-2 p-4"
                >
                  <Image
                    src="/points.svg"
                    alt="Points"
                    height={60}
                    width={60}
                  />

                  <div className="flex flex-col gap-y-2 w-full">
                    <p className="text-neutral-700 text-xl font-bold">
                      {quest.title}
                    </p>

                    <Progress value={progress} className="h-3" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={!!userSubscription?.isActive}
        />

        {!userSubscription?.isActive && <Promo />}
      </StickyWrapper>
    </main>
  );
};
export default QuestsPage;

import { getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/FeedWrapper";
import { Promo } from "@/components/Promo";
import { StickyWrapper } from "@/components/StickyWrapper";
import SubscriptionButton from "@/components/SubscriptionButton";
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

  const hasActiveSubscription = !!userSubscription?.isActive;
  const isTheLastQuestCompleted =
    (userProgress.points / quests[quests.length - 1].value) * 100 < 100;

  return (
    <div className="flex gap-12 px-6">
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/quests.svg" alt="Quests" height={90} width={90} />

          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Quests
          </h1>

          <h2 className="text-muted-foreground text-center text-lg mb-6">
            Complete quests by earning points.
          </h2>

          <ul className="w-full">
            {quests.map((quest) => {
              const progress = (userProgress.points / quest.value) * 100;

              return (
                <li
                  key={quest.title}
                  className="flex items-center w-full gap-x-4 border-t-2 p-4"
                >
                  <Image
                    src="/points.svg"
                    alt="total points"
                    height={60}
                    width={60}
                  />

                  <div className="flex flex-col gap-y-2 w-full">
                    <p className="text-neutral-700 text-xl font-bold">
                      {quest.title}
                    </p>

                    <Progress
                      value={progress}
                      className="h-3"
                      aria-label={`Quest Progress is ${progress}%`}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-col gap-y-4 border-t-2 p-4 items-center xl:items-start justify-between">
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2 items-center justify-center">
            <Image
              src="/finish.svg"
              alt="Finished"
              height={60}
              width={60}
              aria-hidden
            />

            <p className="text-muted-foreground text-lg text-center">
              Get a free subscription by completing all quests.
            </p>
          </div>

          <SubscriptionButton
            className="w-full sm:w-max lg:w-full"
            disabled={isTheLastQuestCompleted || hasActiveSubscription}
            isFree
            variant="super"
          >
            {hasActiveSubscription
              ? "You already have it!"
              : "Get the subscription"}
          </SubscriptionButton>
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={hasActiveSubscription}
        />

        {!hasActiveSubscription && <Promo />}
      </StickyWrapper>
    </div>
  );
};
export default QuestsPage;

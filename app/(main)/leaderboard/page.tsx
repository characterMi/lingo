import {
  getAllSubscribedUser,
  getTopTenUsers,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/FeedWrapper";
import { Promo } from "@/components/Promo";
import { Quests } from "@/components/Quests";
import { StickyWrapper } from "@/components/StickyWrapper";
import { UserProgress } from "@/components/UserProgress";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Lingo | Leaderboard",
  description: "See where you stand among other learners in the community.",
};

const LeaderBoardPage = async () => {
  const userProgressPromise = getUserProgress();
  const userSubscriptionPromise = getUserSubscription();
  const leaderboardPromise = getTopTenUsers();
  const allSubscribedUserPromise = getAllSubscribedUser();

  const [userProgress, userSubscription, leaderboard, allSubscribedUser] =
    await Promise.all([
      userProgressPromise,
      userSubscriptionPromise,
      leaderboardPromise,
      allSubscribedUserPromise,
    ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex gap-12 px-6">
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image
            src="/leaderboard.svg"
            alt="Leaderboard page image"
            height={90}
            width={90}
          />

          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Leaderboard
          </h1>

          <h2 className="text-muted-foreground text-center text-lg mb-6">
            See where you stand among other learners in the community.
          </h2>

          <Separator className="mb-4 h-0.5 rounded-full" aria-hidden />

          {leaderboard.map((userProgress, i) => {
            const subscribedUser = allSubscribedUser?.find(
              (userId) => userId === userProgress.userId
            );

            return (
              <div
                key={userProgress.userId}
                className="flex items-center w-full p-2 sm:px-4 rounded-xl hover:bg-gray-200/50"
              >
                <p
                  className="font-bold text-lime-700 mr-4 w-2"
                  aria-label="Player count"
                >
                  {i + 1}
                </p>

                <Avatar className="border bg-green-500 size-10 sm:size-12 ml-3 mr-4 sm:mr-6">
                  <AvatarImage
                    alt={userProgress.userName + " profile picture"}
                    className="object-cover"
                    src={userProgress.userImgSrc}
                  />
                </Avatar>

                <div className="flex-1 flex gap-x-1 items-center">
                  <p className="truncate font-bold text-neutral-800">
                    {userProgress.userName}
                  </p>
                  {subscribedUser && (
                    <Image
                      src="/blue-tick.png"
                      alt="Approval"
                      width={16}
                      height={16}
                      aria-hidden
                    />
                  )}
                </div>

                <p className="text-muted-foreground text-sm min-[320px]:text-base">
                  {userProgress.points} XP
                </p>
              </div>
            );
          })}
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

        <Quests points={userProgress.points} />
      </StickyWrapper>
    </div>
  );
};
export default LeaderBoardPage;

import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";
import { notFound, redirect } from "next/navigation";
import { Quiz } from "../components/Quiz";

const PracticePage = async ({
  params: { lessonId },
}: {
  params: { lessonId: string };
}) => {
  const lessonPromise = getLesson(+lessonId);
  const userProgressPromise = getUserProgress();
  const userSubscriptionPromise = getUserSubscription();

  const [lesson, userProgress, userSubscription] = await Promise.all([
    lessonPromise,
    userProgressPromise,
    userSubscriptionPromise,
  ]);

  if (!lesson) notFound();

  if (!userProgress) redirect("/learn");

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;
  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={userSubscription}
    />
  );
};
export default PracticePage;

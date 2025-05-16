import { quests } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

export const Quests = ({ points }: { points: number }) => {
  return (
    <aside className="border-2 rounded-xl p-4 space-y-4">
      <div className="flex items-center justify-between w-full space-y-2">
        <h3 className="font-bold text-lg">Quests</h3>

        <Button variant="primaryOutline" size="lg" asChild>
          <Link href="/quests" className="block">
            View all
          </Link>
        </Button>
      </div>

      <ul className="w-full space-y-4">
        {quests.map((quest) => {
          const progress = (points / quest.value) * 100;

          return (
            <li
              key={quest.title}
              className="flex items-center w-full gap-x-3 border-t-2 py-4"
            >
              <Image
                src="/points.svg"
                alt="Points"
                aria-hidden
                height={40}
                width={40}
              />

              <div className="flex flex-col gap-y-2 w-full">
                <p className="text-neutral-700 text-sm font-bold">
                  {quest.title}
                </p>

                <Progress
                  value={progress}
                  className="h-2"
                  aria-label={`Your progress is ${progress}%`}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

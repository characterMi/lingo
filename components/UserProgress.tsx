import Image from "next/image";
import Link from "next/link";

import { courses } from "@/db/schema";

import { InfinityIcon } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hasActiveSubscription,
  hearts,
  points,
}: Props) => {
  return (
    <section className="flex justify-between items-center gap-x-2 w-full">
      <Button variant="defaultOutline" aria-label="Go to courses page" asChild>
        <Link href="/courses">
          <Image
            src={activeCourse.imgSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Link>
      </Button>

      <Button
        className="text-orange-500"
        variant="defaultOutline"
        aria-label="Go to shop page"
        asChild
      >
        <Link href="/shop">
          <Image
            src="/points.svg"
            alt="Points"
            className="mr-2"
            width={28}
            height={28}
          />

          {points}
        </Link>
      </Button>

      <Button
        className="text-orange-500"
        variant="defaultOutline"
        aria-label="Go to shop page"
        asChild
      >
        <Link href="/shop">
          <Image
            src="/heart.svg"
            alt="Hearts"
            className="mr-2"
            width={22}
            height={22}
          />

          {hasActiveSubscription ? (
            <InfinityIcon className="stroke-[3] h-4 w-4" />
          ) : (
            hearts
          )}
        </Link>
      </Button>
    </section>
  );
};

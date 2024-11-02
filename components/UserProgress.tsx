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
      <Link href="/courses" aria-label="Go to courses page">
        <Button variant="defaultOutline" tabIndex={-1} aria-hidden>
          <Image
            src={activeCourse.imgSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>

      <Link href="/shop" aria-label="Go to shop page">
        <Button
          className="text-orange-500"
          variant="defaultOutline"
          tabIndex={-1}
          aria-hidden
        >
          <Image
            src="/points.svg"
            alt="Points"
            className="mr-2"
            width={28}
            height={28}
          />

          {points}
        </Button>
      </Link>

      <Link href="/shop" aria-label="Go to shop page">
        <Button
          className="text-orange-500"
          variant="defaultOutline"
          tabIndex={-1}
          aria-hidden
        >
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
        </Button>
      </Link>
    </section>
  );
};

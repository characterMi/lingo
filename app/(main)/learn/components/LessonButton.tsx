"use client";

import Link from "next/link";
import { FC } from "react";

import { Check, Crown, Star } from "lucide-react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "react-circular-progressbar/dist/styles.css";

interface LessonButtonProps {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
  background: string;
  border: string;
}

export const LessonButton: FC<LessonButtonProps> = ({
  id,
  index,
  percentage,
  totalCount,
  current,
  locked,
  background,
  border,
}) => {
  const cycleLength = 8;
  const cycleIndex = index % cycleLength;

  let indentationLevel;

  if (cycleIndex <= 0) {
    indentationLevel = cycleIndex;
  } else if (cycleIndex <= 1) {
    indentationLevel = 1.8 - cycleIndex;
  } else if (cycleIndex <= 2) {
    indentationLevel = 3.2 - cycleIndex;
  } else if (cycleIndex <= 3) {
    indentationLevel = 3.8 - cycleIndex;
  } else if (cycleIndex <= 4) {
    indentationLevel = 4 - cycleIndex;
  } else if (cycleIndex <= 5) {
    indentationLevel = 4.2 - cycleIndex;
  } else if (cycleIndex <= 6) {
    indentationLevel = 4.8 - cycleIndex;
  } else if (cycleIndex <= 7) {
    indentationLevel = 6.2 - cycleIndex;
  } else {
    indentationLevel = cycleIndex - 8;
  }

  const rightPosition = indentationLevel * 50;

  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;

  const Icon = isCompleted ? Check : isLast ? Crown : Star;

  const href = isCompleted ? `/lesson/${id}` : "/lesson";

  return (
    <Link
      href={href}
      aria-disabled={locked}
      className={locked ? "pointer-events-none" : "pointer-events-auto"}
    >
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !isCompleted ? 60 : 20,
        }}
      >
        {current ? (
          <div className="size-[102px] relative">
            <div
              className="absolute -top-6 left-2.5 px-3 py-2.5 border-2 font-bold uppercase bg-white rounded-xl animate-bounce tracking-wide z-10 after:absolute after:left-1/2 after:-bottom-2 after:size-0 after:border-x-8 after:border-x-transparent after:border-t-8 after:-translate-x-1/2"
              style={{
                color: background,
              }}
            >
              Start
            </div>

            <CircularProgressbarWithChildren
              value={Number.isNaN(percentage) ? 0 : percentage}
              styles={{
                path: {
                  stroke: background,
                },
                trail: {
                  stroke: "#e5e7eb",
                },
              }}
            >
              <Button
                size="rounded"
                variant={locked ? "locked" : "default"}
                className={`size-[70px] border-0 border-b-8 active:border-b-0 ${
                  !locked && border
                }`}
                style={{
                  background,
                }}
              >
                <Icon
                  className={cn(
                    "size-10",
                    locked
                      ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                      : "fill-primary-foreground text-primary-foreground",
                    isCompleted && "fill-none stroke-[4]"
                  )}
                />
              </Button>
            </CircularProgressbarWithChildren>
          </div>
        ) : (
          <Button
            size="rounded"
            variant={locked ? "locked" : "default"}
            className={`size-[70px] border-0 border-b-8 active:border-b-0 ${
              !locked && border
            }`}
            style={{
              background: !locked ? background : "",
            }}
          >
            <Icon
              className={cn(
                "size-10",
                locked
                  ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                  : "fill-primary-foreground text-primary-foreground",
                isCompleted && "fill-none stroke-[4]"
              )}
            />
          </Button>
        )}
      </div>
    </Link>
  );
};

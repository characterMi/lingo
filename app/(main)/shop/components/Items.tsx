"use client";

import { refillHearts } from "@/actions/userProgress";
import { createStripeUrl } from "@/actions/userSubscription";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

const Items = ({ hearts, points, hasActiveSubscription }: Props) => {
  const [pending, startTransition] = useTransition();

  const handleRefillHearts = () => {
    if (pending || hearts === 5 || points < 50) {
      return;
    }

    startTransition(() => {
      refillHearts()
        .then(() => toast.success("Hearts successfully refilled !"))
        .catch(() => toast.error("Something went wrong !"));
    });
  };

  const handleUpgrade = () => {
    startTransition(() => {
      createStripeUrl()
        .then((res) => {
          if (res.data) {
            window.location.href = res.data;
          }

          toast.success("Subscription was successful");
        })
        .catch(() => toast.error("Subscription failed !"));
    });
  };

  return (
    <ul className="w-full">
      <li className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image
          src="/heart.svg"
          alt=""
          aria-labelledby="refill-heart"
          width={60}
          height={60}
        />

        <div className="flex-1">
          <p
            className="text-neutral-700 text-base lg:text-xl font-bold"
            id="refill-heart"
          >
            Refill hearts
          </p>
        </div>

        <Button
          onClick={handleRefillHearts}
          disabled={pending || hearts === 5 || points < 50}
        >
          {hearts === 5 ? (
            "full"
          ) : (
            <div className="flex items-center">
              <Image
                src="/points.svg"
                alt="Points"
                height={20}
                width={20}
                aria-hidden
              />

              <p aria-label="50 points cost">50</p>
            </div>
          )}
        </Button>
      </li>

      <li className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
        <Image
          src="/unlimited.svg"
          alt=""
          aria-labelledby="unlimited-hearts"
          height={60}
          width={60}
        />

        <div className="flex-1">
          <p
            className="text-neutral-700 text-base lg:text-xl font-bold"
            id="unlimited-hearts"
          >
            Unlimited Hearts
          </p>
        </div>

        <Button disabled={pending} onClick={handleUpgrade}>
          {hasActiveSubscription ? "settings" : "upgrade"}
        </Button>
      </li>
    </ul>
  );
};
export default Items;

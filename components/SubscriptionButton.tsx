"use client";

import { createStripeUrl } from "@/actions/userSubscription";
import { onError } from "@/lib/onError";
import { useTransition } from "react";
import { Button } from "./ui/button";

type Props = {
  children: React.ReactNode;
  isFree?: boolean;
  variant?: "super";
  className?: string;
  disabled?: boolean;
};

const SubscriptionButton = ({
  isFree,
  children,
  variant,
  className,
  disabled,
}: Props) => {
  const [pending, startTransition] = useTransition();

  const handleUpgrade = () => {
    if (disabled || pending) return;

    startTransition(() => {
      createStripeUrl(isFree)
        .then((res) => {
          if (res.data) {
            window.location.href = res.data;
          }
        })
        .catch((e) => onError("Subscription failed !", e));
    });
  };

  return (
    <Button
      variant={variant}
      disabled={disabled || pending}
      onClick={handleUpgrade}
      className={className}
    >
      {children}
    </Button>
  );
};

export default SubscriptionButton;

"use client";

import { createStripeUrl } from "@/actions/userSubscription";
import { useTransition } from "react";
import { toast } from "sonner";
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
    startTransition(() => {
      createStripeUrl(isFree)
        .then((res) => {
          if (res.data) {
            window.location.href = res.data;
          }
        })
        .catch(() => toast.error("Subscription failed !"));
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

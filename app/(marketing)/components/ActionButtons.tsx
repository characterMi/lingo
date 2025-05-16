"use client";

import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const ActionButtons = () => {
  return (
    <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
      <ClerkLoading>
        <div className="w-full h-12 skeleton rounded-lg" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <Link href="/learn" className="w-full">
            <Button
              className="w-full"
              size="lg"
              variant="secondary"
              tabIndex={-1}
            >
              Continue learning.
            </Button>
          </Link>
        </SignedIn>

        <SignedOut>
          <Link href="/sign-up" className="w-full">
            <Button
              className="w-full"
              size="lg"
              variant="secondary"
              tabIndex={-1}
            >
              Get Started
            </Button>
          </Link>
          <Link href="/sign-in" className="w-full">
            <Button
              className="w-full"
              size="lg"
              variant="primaryOutline"
              tabIndex={-1}
            >
              I already have an account
            </Button>
          </Link>
        </SignedOut>
      </ClerkLoaded>
    </div>
  );
};

export default ActionButtons;

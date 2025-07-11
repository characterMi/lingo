"use client";

import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const ActionButtons = () =>
  navigator.onLine ? (
    <>
      <ClerkLoading>
        <div className="w-full h-12 skeleton rounded-lg" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <Button className="w-full" size="lg" variant="secondary" asChild>
            <Link href="/learn" className="w-full">
              Continue learning.
            </Link>
          </Button>
        </SignedIn>

        <SignedOut>
          <Button className="w-full" size="lg" variant="secondary" asChild>
            <Link href="/sign-up" className="w-full">
              Get Started
            </Link>
          </Button>
          <Button className="w-full" size="lg" variant="primaryOutline" asChild>
            <Link href="/sign-in" className="w-full">
              I already have an account
            </Link>
          </Button>
        </SignedOut>
      </ClerkLoaded>
    </>
  ) : (
    <Button
      className="w-full"
      size="lg"
      variant="secondary"
      onClick={() => window.location.reload()}
    >
      You're offline, try again later
    </Button>
  );

export default ActionButtons;

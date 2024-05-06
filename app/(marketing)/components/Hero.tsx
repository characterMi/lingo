import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="hero.svg" priority fill alt="Hero" />
      </div>

      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, Practice and master new languages with Lingo.
        </h1>

        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>

          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                signInFallbackRedirectUrl="/learn"
                fallbackRedirectUrl="/learn"
              >
                <Button className="w-full" size="lg" variant="secondary">
                  Get Started
                </Button>
              </SignUpButton>

              <SignInButton
                mode="modal"
                signUpFallbackRedirectUrl="/learn"
                fallbackRedirectUrl="/learn"
              >
                <Button className="w-full" size="lg" variant="primaryOutline">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button className="w-full" size="lg" variant="secondary" asChild>
                <Link href="/learn">Continue learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </>
  );
};
export default Hero;

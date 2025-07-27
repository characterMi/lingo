import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader } from "lucide-react";

export const metadata = {
  title: "Lingo | Sign Up",
  description:
    "Create Your account and start learning new languages with Lingo!",
};

export default () => (
  <main className="w-full h-full flex justify-center items-center">
    <ClerkLoading>
      <Loader
        className="h-6 w-6 text-muted-foreground animate-spin"
        aria-label="The page is loading..."
      />
    </ClerkLoading>

    <ClerkLoaded>
      <SignUp />
    </ClerkLoaded>
  </main>
);

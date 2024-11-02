import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader } from "lucide-react";

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

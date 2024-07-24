import { MobileSidebar } from "@/components/MobileHeader";
import { Sidebar } from "@/components/Sidebar";
import {
  ClerkLoaded,
  ClerkLoading,
  ClerkProvider,
  UserButton,
} from "@clerk/nextjs";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#16a34a",
        },
      }}
    >
      <MobileSidebar />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:ml-[256px] h-full pt-12 lg:pt-0">
        <section className="h-full max-w-[1056px] pt-6 mx-auto">
          {children}
        </section>
      </main>

      <section className="fixed bottom-6 right-5 block lg:hidden">
        <ClerkLoading>
          <div className="size-8 rounded-full skeleton" />
        </ClerkLoading>

        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </section>
    </ClerkProvider>
  );
};
export default MainLayout;

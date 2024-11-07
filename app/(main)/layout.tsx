import { MobileSidebar } from "@/components/MobileHeader";
import { Sidebar } from "@/components/Sidebar";
import Root from "@/providers/root";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Root>
      <MobileSidebar>
        <Sidebar />
      </MobileSidebar>

      <Sidebar className="hidden lg:flex" />

      <main className="lg:ml-[256px] h-full pt-12 lg:pt-0">
        <section className="h-full max-w-[1056px] pt-6 mx-auto">
          {children}
        </section>
      </main>

      <section className="fixed bottom-6 right-5 block lg:hidden">
        <ClerkLoading>
          <div className="size-8 rounded-full skeleton">
            <p className="absolute opacity-0">
              Your account setting is loading...
            </p>
          </div>
        </ClerkLoading>

        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </section>
    </Root>
  );
};
export default MainLayout;

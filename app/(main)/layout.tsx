import { MobileSidebar } from "@/components/MobileHeader";
import { Sidebar } from "@/components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MobileSidebar />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:ml-[256px] h-full pt-12 lg:pt-0">
        <section className="h-full max-w-[1056px] pt-6 mx-auto">{children}</section>
      </main>
    </>
  );
};
export default MainLayout;

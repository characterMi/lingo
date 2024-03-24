import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Sidebar } from "./Sidebar";

export const MobileSidebar = () => {
  return (
    <nav className="lg:hidden px-6 h-12 flex items-center bg-green-500 border-b fixed top-0 w-full z-50">
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="text-white" />
        </SheetTrigger>

        <SheetContent className="p-0 z-[100] shadow-2xl" side="left">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

"use client";

import { useMobileSidebar } from "@/store/useMobileSidebar";
import { MenuIcon } from "lucide-react";
import MobileHeaderContainer from "./MobileHeaderContainer";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const MobileSidebar = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, setIsOpen } = useMobileSidebar();

  return (
    <MobileHeaderContainer>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger aria-label="Menu">
          <MenuIcon className="text-white" />
        </SheetTrigger>

        <SheetContent className="p-0 z-[100] shadow-2xl" side="left">
          {children}
        </SheetContent>
      </Sheet>
    </MobileHeaderContainer>
  );
};

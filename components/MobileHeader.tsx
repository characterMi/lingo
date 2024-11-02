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
        <SheetTrigger
          aria-label="Menu toggle"
          aria-controls="sidebar"
          aria-expanded={isOpen}
          id="menu-toggle"
        >
          <MenuIcon className="text-white" aria-hidden />
        </SheetTrigger>

        <SheetContent
          className="p-0 z-[100] shadow-2xl"
          side="left"
          id="sidebar"
          aria-labelledby="menu-toggle"
          role="menu"
          aria-hidden={!isOpen}
        >
          {children}
        </SheetContent>
      </Sheet>
    </MobileHeaderContainer>
  );
};

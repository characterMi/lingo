import Image from "next/image";
import Link from "next/link";

import { sidebarItems } from "@/constants";
import { isAdmin } from "@/lib/admin";
import { cn } from "@/lib/utils";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { SidebarItem } from "./SidebarItem";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <aside
      className={cn(
        "h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" alt="Mascot" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-y-2 flex-1">
        {sidebarItems.map((item) => (
          <SidebarItem
            label={item.label}
            href={item.link}
            iconSrc={item.iconSrc}
            key={item.label}
          />
        ))}

        {isAdmin() && (
          <SidebarItem label="Admin" href="/admin" iconSrc="/mascot.svg" />
        )}
      </div>

      <div className="p-4">
        <ClerkLoading>
          <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
        </ClerkLoading>

        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>

      <div className="flex flex-col items-center max-[380px]:text-xs text-sm lg:text-xs mb-4 pt-4 border-t-2">
        <p className="whitespace-nowrap justify-center flex items-center gap-1">
          Made with
          <Image
            src="/heart.svg"
            alt="Love"
            height={10}
            width={10}
            className="animate-ping inline mx-1"
          />
          by{" "}
          <span className="green-text-gradient font-black">
            Abolfazl taghadosi
          </span>
        </p>

        <p className="whitespace-nowrap">
          &copy; {new Date().getFullYear()}, All rights reserved.
        </p>
      </div>
    </aside>
  );
};

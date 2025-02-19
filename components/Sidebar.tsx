import Image from "next/image";
import Link from "next/link";

import { sidebarItems } from "@/constants";
import { isAdmin } from "@/lib/admin";
import { cn } from "@/lib/utils";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import DownloadAppButton from "./DownloadAppButton";
import { SidebarItem } from "./SidebarItem";

type Props = {
  className?: string;
};

export const Sidebar = async ({ className }: Props) => (
  <aside
    className={cn(
      "h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col",
      className
    )}
  >
    <Link href="/" aria-label="Go back to home page">
      <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3" aria-hidden>
        <Image src="/mascot.svg" priority alt="Mascot" width={40} height={40} />
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

      {(await isAdmin()) && (
        <SidebarItem label="Admin" href="/admin" iconSrc="/mascot.svg" />
      )}
    </div>

    <div className="py-4 px-2 flex justify-between items-center">
      <ClerkLoading>
        <div className="size-8 rounded-full skeleton">
          <p className="absolute opacity-0">
            Your account setting is loading...
          </p>
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <div className="hidden lg:block">
          <UserButton />
        </div>

        <DownloadAppButton
          size="icon"
          variant="secondary"
          aria-label="Download the app"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </DownloadAppButton>
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

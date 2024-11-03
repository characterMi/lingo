"use client";

import { usePathname } from "next/navigation";

import { useMobileSidebar } from "@/store/useMobileSidebar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItem = ({ href, iconSrc, label }: Props) => {
  const pathName = usePathname();
  const active = pathName === href;

  const close = useMobileSidebar((state) => state.close);

  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px]"
      asChild
      onClick={close}
      tabIndex={-1}
    >
      <Link href={href} aria-label={`Go to ${label} page`}>
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          width={52}
          height={52}
          priority
          aria-hidden
        />
        {label}
      </Link>
    </Button>
  );
};

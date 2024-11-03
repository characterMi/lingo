import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
};

export const Navbar = ({ title }: Props) => {
  return (
    <nav className="sticky top-0 bg-white pb-3 lg:pt-7 lg:-mt-7 flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">
      <Link href="/courses" aria-label="Change the language">
        <Button variant="defaultOutline" size="sm" tabIndex={-1}>
          <ArrowLeft
            className="h-5 w-5 stroke-2 text-neutral-400"
            aria-hidden
          />
        </Button>
      </Link>

      <h1 className="text-lg font-bold">{title}</h1>

      <div aria-hidden />
    </nav>
  );
};

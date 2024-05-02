import Link from "next/link";
import { FC } from "react";

import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";

interface UnitBannerProps {
  title: string;
  description: string;
  isActiveUnit: boolean;
  background: string;
}

export const UnitBanner: FC<UnitBannerProps> = ({
  title,
  description,
  isActiveUnit,
  background,
}) => {
  return (
    <div
      className="w-full rounded-xl  p-5 text-white flex justify-between items-center flex-wrap gap-4"
      style={{
        background,
      }}
    >
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>

      {isActiveUnit && (
        <Link href="/lesson">
          <Button
            size="lg"
            className="hidden lg:flex text-white"
            style={{
              background,
            }}
          >
            <NotebookText className="mr-2" /> Continue
          </Button>
        </Link>
      )}
    </div>
  );
};

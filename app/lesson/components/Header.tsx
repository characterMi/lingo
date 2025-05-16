import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/useExitModal";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface HeaderProps {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
}

export const Header: FC<HeaderProps> = ({
  hasActiveSubscription,
  hearts,
  percentage,
}) => {
  const { open } = useExitModal();

  return (
    <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
      <button
        onClick={open}
        className="text-slate-500 hover:opacity-75 focus-visible:opacity-75 outline-none transition-opacity"
        aria-label="Exit lesson"
      >
        <X />
      </button>

      <Progress
        value={percentage}
        aria-label={`Your progress is ${percentage}%`}
      />

      <div className="text-rose-500 flex items-center font-bold">
        <Image
          src="/heart.svg"
          height={28}
          width={28}
          alt="Hearts left"
          className="mr-2"
        />
        {hasActiveSubscription ? (
          <InfinityIcon
            className="h-6 w-6 stroke-[3] shrink-0"
            aria-label="You have subscription"
          />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
};

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  id: number;
  imgSrc: string;
  handleClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

export const CourseCard = ({
  title,
  id,
  imgSrc,
  handleClick,
  disabled,
  active,
}: Props) => (
  <div
    onClick={() => handleClick(id)}
    className={cn(
      "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 w-full min-h-[150px] lg:min-h-[217px] lg:min-w-[200px]",
      disabled && "pointer-events-none opacity-50"
    )}
    role="button"
    aria-label={`Choose the ${title} language to learn.`}
  >
    <div
      className="min-h-[24px] w-full flex items-center justify-end"
      aria-label={`${title} is the current language`}
    >
      {active && (
        <div
          className="rounded-md bg-green-600 flex items-center justify-center p-1.5"
          aria-hidden
        >
          <Check className="text-white stroke-[4] h-4 w-4" />
        </div>
      )}
    </div>

    <Image
      src={imgSrc}
      alt={title + " language"}
      width={93.33}
      height={70}
      className="rounded-lg drop-shadow-md border object-cover"
    />

    <p className="text-neutral-700 text-center font-bold mt-3">{title}</p>
  </div>
);

import { FC, useCallback } from "react";
import Image from "next/image";

import { useAudio, useKey } from "react-use";

import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";

interface CardProps {
  id: number;
  text: string;
  imgSrc: string | null;
  shortcut: string;
  selected?: boolean;
  onClick: () => void;
  status: "none" | "wrong" | "correct";
  audioSrc: string | null;
  disabled: boolean | undefined;
  type: (typeof challenges.$inferSelect)["type"];
}

const Card: FC<CardProps> = ({
  audioSrc,
  disabled,
  id,
  imgSrc,
  onClick,
  shortcut,
  status,
  text,
  type,
  selected,
}) => {
  const [audio, _, controls] = useAudio({ src: audioSrc || "" });

  const handleClick = useCallback(() => {
    if (disabled) return;

    controls.play();

    onClick();
  }, [disabled, onClick, controls]);

  useKey(shortcut, handleClick, {}, [handleClick]);

  return (
    <div
      onClick={handleClick}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2",
        selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
        selected &&
          status === "correct" &&
          "border-green-300 bg-green-100 hover:bg-green-100",
        selected &&
          status === "wrong" &&
          "border-rose-300 bg-rose-100 hover:bg-rose-100",
        disabled && "pointer-events-none hover:bg-white",
        type === "ASSIST" && "lg:p-3 w-full"
      )}
    >
      {audio}

      {imgSrc && (
        <div className="relative aspect-square mb-4 max-h-[80px] lg:max-h-[150px] w-full">
          <Image src={imgSrc} alt={text} fill />
        </div>
      )}

      <div
        className={cn(
          "flex justify-between items-center",
          type === "ASSIST" && "flex-row-reverse"
        )}
      >
        {type === "ASSIST" && <div />}

        <p
          className={cn(
            "text-neutral-600 text-sm lg:text-base",
            selected && "border-sky-300 text-sky-500",
            selected &&
              status === "correct" &&
              "text-green-500 border-green-500",
            selected && status === "wrong" && "text-rose-500 border-rose-500"
          )}
        >
          {text}
        </p>

        <div
          className={cn(
            "lg:size-8 size-5 border-2 flex items-center justify-center rounded-lg to-neutral-400 lg:text-[15px] text-xs font-semibold",
            selected && "border-sky-300 text-sky-500",
            selected &&
              status === "correct" &&
              "border-green-300 text-green-500",
            selected && status === "wrong" && "border-rose-300 text-rose-500"
          )}
        >
          {shortcut}
        </div>
      </div>
    </div>
  );
};

export default Card;

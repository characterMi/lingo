import { FC } from "react";
import Image from "next/image";

interface QuestionBubbleProps {
  question: string;
}

export const QuestionBubble: FC<QuestionBubbleProps> = ({ question }) => {
  return (
    <div className="flex items-center gap-x-4 mb-6">
      <Image
        src="/mascot.svg"
        alt="Mascot"
        width={60}
        height={60}
        className="size-10 lg:size-16"
      />

      <div className="relative py-2 px-4 border-2 rounded-xl text-sm lg:text-base">
        {question}

        <div className="absolute size-0 border-x-8 -left-3 top-1/2 border-x-transparent border-t-8 transform -translate-y-1/2 rotate-90" />
      </div>
    </div>
  );
};

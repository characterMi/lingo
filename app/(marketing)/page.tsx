import Image from "next/image";
import ActionButtons from "./components/ActionButtons";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 flex flex-col lg:flex-row w-full items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero.webp" priority fill alt="" loading="eager" />
      </div>

      <div className="flex flex-col items-center gap-y-8">
        <h2
          className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center"
          id="title"
        >
          Learn, Practice and master new languages with Lingo.
        </h2>

        <ActionButtons />
      </div>
    </div>
  );
}

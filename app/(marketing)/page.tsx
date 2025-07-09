import dynamic from "next/dynamic";
import Image from "next/image";

const ActionButtons = dynamic(() => import("./components/ActionButtons"), {
  ssr: false,
  loading: () => <div className="w-full h-12 skeleton rounded-lg" />,
});

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 flex flex-col lg:flex-row w-full items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image
          src="/hero.webp"
          priority
          fill
          alt=""
          loading="eager"
          sizes="(max-width:640px) 640w, (max-width:750px) 750w, (max-width:1080px) 1080w, (max-width:1200px) 1200w, (max-width:1920px) 1920w, (max-width:3840px) 3840w"
        />
      </div>

      <div className="flex flex-col items-center gap-y-8">
        <h2
          className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center"
          id="title"
        >
          Learn, Practice and master new languages with Lingo.
        </h2>

        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}

import Hero from "@/app/(marketing)/components/Hero";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 flex flex-col lg:flex-row w-full items-center justify-center p-4 gap-2">
      <Hero />
    </div>
  );
}

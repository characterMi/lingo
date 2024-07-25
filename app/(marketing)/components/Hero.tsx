import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="hero.svg" priority fill alt="Hero" loading="eager" />
      </div>

      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, Practice and master new languages with Lingo.
        </h1>

        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <Link href="/learn" className="w-full">
            <Button className="w-full" size="lg" variant="secondary">
              Let's Get started!
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { footerFlags } from "@/constants";

const Footer = () => {
  return (
    <footer className="h-20 w-full border-t-2 border-slate-200 py-2 md:px-2 relative after:absolute after:h-full after:w-12 after:bg-gradient-to-r after:from-white after:to-transparent after:left-0 after:top-0 before:absolute before:h-full before:w-12 before:bg-gradient-to-l before:from-white before:to-transparent before:right-0 before:top-0">
      <div className="max-w-screen-lg flex mx-auto items-center justify-evenly h-full overflow-auto snap-x snap-mandatory snap-always">
        {footerFlags.map((flag) => (
          <Button
            size="lg"
            key={flag.label}
            variant="defaultOutline"
            className="w-full snap-start"
            tabIndex={-1}
          >
            <Image
              src={flag.src}
              alt={`Learn the ${flag.label} language`}
              height={32}
              width={40}
              className="rounded-md mr-4 shadow-[0_0_5px_#999999]"
              priority
            />
            {flag.label}
          </Button>
        ))}
      </div>
    </footer>
  );
};
export default Footer;

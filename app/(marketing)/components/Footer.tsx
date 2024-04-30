import Image from "next/image";

import { Button } from "@/components/ui/button";
import { footerFlags } from "@/constants";

const Footer = () => {
  return (
    <footer className="h-20 w-full border-t-2 border-slate-200 p-2 hidden lg:block">
      <div className="max-w-screen-lg flex mx-auto items-center justify-evenly h-full">
        {footerFlags.map((flag) => (
          <Button
            size="lg"
            key={flag.label}
            variant="defaultOutline"
            className="w-full"
          >
            <Image
              src={flag.src}
              alt={flag.label}
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

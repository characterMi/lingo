import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Promo = () => {
  return (
    <aside className="border-2 rounded-xl p-4 space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <Image
            src="/unlimited.svg"
            alt=""
            aria-labelledby="upgrade"
            height={26}
            width={26}
          />

          <h3 className="font-bold text-lg" id="upgrade">
            Upgrade to pro
          </h3>
        </div>

        <p className="text-muted-foreground">Get unlimited hearts and more</p>
      </div>

      <Button variant="super" className="w-full" size="lg" asChild>
        <Link href="/shop" className="block">
          Upgrade today
        </Link>
      </Button>
    </aside>
  );
};

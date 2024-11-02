import DownloadAppButton from "@/components/DownloadAppButton";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <nav className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src="/mascot.svg"
            priority
            alt="Logo"
            width={40}
            height={40}
            loading="eager"
          />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>

        <DownloadAppButton size="default" variant="defaultOutline">
          Get the App
        </DownloadAppButton>
      </nav>
    </header>
  );
};

export default Navbar;

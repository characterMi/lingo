"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MobileHeaderContainer = ({ children }: { children: React.ReactNode }) => {
  const [backgroundColor, setBackgroundColor] = useState("bg-green-500");
  const pathName = usePathname();

  const handlePageScroll = () => {
    const greenUnitSections =
      document.querySelectorAll<HTMLDivElement>(".unit-section__1")!;
    const purpleUnitSections =
      document.querySelectorAll<HTMLDivElement>(".unit-section__2")!;
    const emeraldUnitSections =
      document.querySelectorAll<HTMLDivElement>(".unit-section__3")!;
    const blueUnitSections =
      document.querySelectorAll<HTMLDivElement>(".unit-section__4")!;
    const orangeUnitSections =
      document.querySelectorAll<HTMLDivElement>(".unit-section__5")!;

    const currentScrollPosition = window.scrollY;

    greenUnitSections.forEach((item) => {
      if (currentScrollPosition >= item.offsetTop) {
        setBackgroundColor("bg-green-500");
      }
    });

    purpleUnitSections.forEach((item) => {
      if (currentScrollPosition >= item.offsetTop) {
        setBackgroundColor("bg-purple-400");
      }
    });

    emeraldUnitSections.forEach((item) => {
      if (currentScrollPosition >= item.offsetTop) {
        setBackgroundColor("bg-emerald-400");
      }
    });

    blueUnitSections.forEach((item) => {
      if (currentScrollPosition >= item.offsetTop) {
        setBackgroundColor("bg-sky-400");
      }
    });

    orangeUnitSections.forEach((item) => {
      if (currentScrollPosition >= item.offsetTop) {
        setBackgroundColor("bg-orange-400");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);

    return () => {
      window.removeEventListener("scroll", handlePageScroll);
    };
  }, []);

  return (
    <nav
      className={`lg:hidden px-6 h-12 transition flex items-center ${
        pathName === "/learn" ? backgroundColor : "bg-green-500"
      } border-b fixed top-0 w-full z-50`}
    >
      {children}
    </nav>
  );
};
export default MobileHeaderContainer;

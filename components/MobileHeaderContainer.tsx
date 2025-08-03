"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const MobileHeaderContainer = ({ children }: { children: React.ReactNode }) => {
  const [backgroundColor, setBackgroundColor] = useState("bg-green-500");
  const pathName = usePathname();

  useEffect(() => {
    if (pathName !== "/learn") {
      setBackgroundColor("bg-green-500");
      return;
    }

    const handlePageScroll = () => {
      const themeMeta = document.querySelector<HTMLMetaElement>(
        "meta[name=theme-color]"
      );

      if (pathName !== "/learn") {
        themeMeta?.setAttribute("content", "#22c55e");
        setBackgroundColor("bg-green-500");
        return;
      }

      const currentScrollPosition = window.scrollY;

      const greenUnitSections =
        document.querySelectorAll<HTMLDivElement>(".unit-section__1");
      const purpleUnitSections =
        document.querySelectorAll<HTMLDivElement>(".unit-section__2");
      const emeraldUnitSections =
        document.querySelectorAll<HTMLDivElement>(".unit-section__3");
      const blueUnitSections =
        document.querySelectorAll<HTMLDivElement>(".unit-section__4");
      const orangeUnitSections =
        document.querySelectorAll<HTMLDivElement>(".unit-section__5");

      greenUnitSections.forEach((item) => {
        if (currentScrollPosition >= item.offsetTop) {
          themeMeta?.setAttribute("content", "#22c55e");
          setBackgroundColor("bg-green-500");
        }
      });

      purpleUnitSections.forEach((item) => {
        if (currentScrollPosition >= item.offsetTop) {
          themeMeta?.setAttribute("content", "#c084fc");
          setBackgroundColor("bg-purple-400");
        }
      });

      emeraldUnitSections.forEach((item) => {
        if (currentScrollPosition >= item.offsetTop) {
          themeMeta?.setAttribute("content", "#34d399");
          setBackgroundColor("bg-emerald-400");
        }
      });

      blueUnitSections.forEach((item) => {
        if (currentScrollPosition >= item.offsetTop) {
          themeMeta?.setAttribute("content", "#38bdf8");
          setBackgroundColor("bg-sky-400");
        }
      });

      orangeUnitSections.forEach((item) => {
        if (currentScrollPosition >= item.offsetTop) {
          themeMeta?.setAttribute("content", "#fb923c");
          setBackgroundColor("bg-orange-400");
        }
      });
    };

    window.addEventListener("scroll", handlePageScroll);

    return () => {
      window.removeEventListener("scroll", handlePageScroll);
    };
  }, [pathName]);

  return (
    <nav
      className={twMerge(
        "lg:hidden px-6 h-12 flex items-center border-b fixed top-0 w-full z-50",
        backgroundColor
      )}
      style={{ transition: "background-color 50ms ease-in-out" }}
    >
      {children}
    </nav>
  );
};
export default MobileHeaderContainer;

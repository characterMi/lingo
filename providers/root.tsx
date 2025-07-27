"use client";

import { addPWAEventListeners } from "@/lib/addPWAEventListeners";
import { registerServiceworker } from "@/lib/registerServiceworker";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const IS_PWA =
  window.matchMedia("(display-mode: standalone)").matches ||
  // @ts-ignore
  window.navigator.standalone === true;

const Root = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const interval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    registerServiceworker();

    const isPWA =
      window.matchMedia("(display-mode: standalone)").matches ||
      // @ts-ignore
      window.navigator.standalone === true;

    if (!isPWA) return;

    const removeListeners = addPWAEventListeners();

    return () => removeListeners();
  }, []);

  useEffect(() => {
    clearInterval(interval.current);

    if (IS_PWA) {
      interval.current = setInterval(() => {
        const viewportMeta = document.querySelector<HTMLMetaElement>(
          'meta[name="viewport"]'
        );

        if (viewportMeta) {
          viewportMeta.setAttribute(
            "content",
            viewportMeta.content.replace(
              "user-scalable=yes",
              "user-scalable=no"
            )
          );
          clearInterval(interval.current);
        }
      }, 10);
    }

    return () => clearInterval(interval.current);
  }, [pathname]);

  return children;
};

export default Root;

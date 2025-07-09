"use client";

import { useEffect, useRef } from "react";

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  const interval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    clearInterval(interval.current);

    const isStandAlone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // @ts-ignore
      window.navigator.standalone === true;

    if (isStandAlone) {
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

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return children;
};

export default MainTemplate;

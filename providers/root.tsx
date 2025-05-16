"use client";

import { useEffect } from "react";

const Root = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        console.error("Service worker registration failed!");
      });
    }
  }, []);

  return children;
};

export default Root;

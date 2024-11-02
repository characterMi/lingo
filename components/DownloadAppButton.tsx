"use client";

import React, { ComponentProps, useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

type Props = {
  children: React.ReactNode;
  size: "icon" | "default";
  variant: "secondary" | "defaultOutline";
} & ComponentProps<"button">;

const DownloadAppButton = ({ children, size, variant, ...props }: Props) => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);

  const handleDownload = () => {
    if (deferredPrompt) {
      // @ts-ignore: There no specific type for "beforeInstallPrompt" event.
      deferredPrompt.prompt();
    } else {
      toast.success(
        `To install the app look for "Add to Homescreen" or install in your browser's menu.`
      );
    }
  };
  useEffect(() => {
    const handleBIP = (e: Event) => {
      e.preventDefault();

      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBIP);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBIP);
    };
  }, []);

  return (
    <Button
      variant={variant}
      className="download-btn"
      onClick={handleDownload}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
};

export default DownloadAppButton;

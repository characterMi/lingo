"use client";

import React, { ComponentProps, useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

interface RelatedApp {
  platform: "webapp";
  url: string;
  id?: string;
}

interface NavigatorWithRelatedApps extends Navigator {
  getInstalledRelatedApps: () => Promise<RelatedApp[]>;
}

type Props = {
  children: React.ReactNode;
  size: "icon" | "default";
  variant: "secondary" | "defaultOutline";
} & ComponentProps<"button">;

const DownloadAppButton = ({ children, size, variant, ...props }: Props) => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);

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
    const checkInstallationStatus = async () => {
      const nav = navigator as NavigatorWithRelatedApps;

      if (nav.getInstalledRelatedApps) {
        const relatedApps = await nav.getInstalledRelatedApps();
        const isInstalled = relatedApps.some(
          (app) => app.platform === "webapp"
        );

        if (isInstalled) setIsAppInstalled(true);
      }
    };

    checkInstallationStatus();

    const handleBIP = (e: Event) => {
      e.preventDefault();

      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsAppInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBIP);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBIP);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  return (
    <Button
      variant={variant}
      className="download-btn disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={handleDownload}
      size={size}
      disabled={isAppInstalled}
      {...props}
    >
      {children}
    </Button>
  );
};

export default DownloadAppButton;

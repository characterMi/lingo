"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

const DownloadAppButton = () => {
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
      variant="secondary"
      className="download-btn"
      onClick={handleDownload}
      size="icon"
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
    </Button>
  );
};

export default DownloadAppButton;

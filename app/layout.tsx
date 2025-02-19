import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";

import { Toaster } from "sonner";

import ExitModal from "@/components/Modals/ExitModal";
import HeartsModal from "@/components/Modals/HeartsModal";
import PracticeModal from "@/components/Modals/PracticeModal";

import Root from "@/providers/root";
import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingo",
  description: "Learn, Practice and master new languages with Lingo.",
  icons: {
    apple: "/mascot-192.png",
    icon: "/mascot-192.png",
  },
  keywords: ["language", "language learning", "lingo", "duolingo"],
};

export const viewport: Viewport = {
  themeColor: "#22c55e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "only light",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Root>
      <html lang="en">
        <body className={font.className}>
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          {children}
        </body>
      </html>
    </Root>
  );
}

import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";

import { Toaster } from "sonner";

import ExitModal from "@/components/Modals/ExitModal";
import HeartsModal from "@/components/Modals/HeartsModal";
import PracticeModal from "@/components/Modals/PracticeModal";

import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const Root = dynamic(() => import("@/providers/root"), { ssr: false });

const font = Nunito({ subsets: ["latin"] });

const APP_NAME = "Lingo";
const DESCRIPTION =
  "Lingo: Learn, Practice and master new languages with Lingo.";

export const metadata: Metadata = {
  title: APP_NAME,
  description: DESCRIPTION,
  icons: {
    apple: "/mascot-192.png",
    icon: "/mascot-192.png",
  },
  keywords: ["language", "language learning", "lingo", "duolingo"],
  appleWebApp: {
    capable: true,
    startupImage: "/mascot-512.png",
    title: APP_NAME,
  },
  applicationName: APP_NAME,
  authors: {
    name: "Abolfazl taghadosi",
    url: "https://abofazl-taghadosi.vercel.app",
  },
  category: "Language Learning",
  classification: "Language Learning",
  creator: "Abolfazl taghadosi",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  publisher: "Abolfazl taghadosi",
  openGraph: {
    title: APP_NAME,
    description: DESCRIPTION,
    url: process.env.NEXT_PUBLIC_APP_URL,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/og-poster.jpg`,
        width: 512,
        height: 512,
        alt: "Website Logo",
      },
    ],
    locale: "en_US",
    siteName: APP_NAME,
  },
  twitter: {
    title: APP_NAME,
    description: DESCRIPTION,
    site: process.env.NEXT_PUBLIC_APP_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/og-poster.jpg`,
        width: 512,
        height: 512,
        alt: "Website Logo",
      },
    ],
    card: "summary",
  },
};

export const viewport: Viewport = {
  themeColor: "#22c55e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "only light",
  viewportFit: "cover",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#16a34a",
        },
      }}
      afterSignOutUrl={"/"}
      signInForceRedirectUrl={"/learn"}
      signUpForceRedirectUrl={"/learn"}
      signInFallbackRedirectUrl={"/learn"}
      signUpFallbackRedirectUrl={"/learn"}
    >
      <html lang="en">
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="pinterest-rich-pin" content="true" />
        </head>
        <body className={font.className}>
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          <Root>{children}</Root>
        </body>
      </html>
    </ClerkProvider>
  );
}

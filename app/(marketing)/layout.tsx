import { Metadata } from "next";

import Navbar from "@/app/(marketing)/components/Navbar";
import Footer from "@/app/(marketing)/components/Footer";

export const metadata: Metadata = {
  title: "Lingo | Home page",
  description:
    'Create Your account and start learning new languages with "Lingo"',
};

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex flex-col flex-1 items-center justify-center">
        <Navbar />
        {children}
        <Footer />
      </section>
    </main>
  );
};
export default MarketingLayout;

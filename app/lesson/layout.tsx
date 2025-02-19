import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lingo | Lesson page",
  description: "Here, you can start your lesson right away !",
};

const LessonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col h-full">
      <section className="flex flex-col h-full w-full">{children}</section>
    </main>
  );
};

export default LessonLayout;

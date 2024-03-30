import { getCourses, getUserProgress } from "@/db/queries";
import { CoursesList } from "./components/CoursesList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lingo | Courses page",
  description: "Select the language You want to Learn!"
}

const CoursesPage = async () => {
  const coursesPromise = getCourses();
  const userProgressPromise = getUserProgress();

  const [courses, userProgress] = await Promise.all([
    coursesPromise,
    userProgressPromise,
  ]);

  return (
    <main className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>

      <CoursesList
        courses={courses}
        activeCourseId={userProgress?.activeCourseId}
      />
    </main>
  );
};
export default CoursesPage;

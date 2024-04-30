export const metadata = {
  title: "Lingo | Not found",
  description: "This page could not be found.",
};

const NotFound = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-white">
      <div className="flex items-center gap-x-4">
        <span className="text-2xl font-bold p-4 border-r-2 border-green-400">
          404
        </span>{" "}
        This page could not be found.
      </div>
    </main>
  );
};

export default NotFound;

import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
    </section>
  );
};

export default Loading;

import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
import { isAdmin } from "@/lib/admin";

const App = dynamic(() => import("./App"), { ssr: false });

export const metadata = {
  title: "Lingo | Admin page",
  description: "Only admins can access this page.",
};

const AdminPage = () => {
  if (!isAdmin()) {
    redirect("/");
  }

  return (
    <main>
      <App />
    </main>
  );
};
export default AdminPage;

import { isAdmin } from "@/lib/admin";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const App = dynamic(() => import("./App"), { ssr: false });

export const metadata = {
  title: "Lingo | Admin page",
  description: "Only admins can access this page.",
};

const AdminPage = async () => {
  if (!(await isAdmin())) {
    redirect("/");
  }

  return (
    <main>
      <App />
    </main>
  );
};
export default AdminPage;

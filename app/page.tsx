import Sidebar from "@/components/Sidebar";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="grid grid-cols-12 h-screen w-screen ">
      <aside className="col-span-3">
        {/* Sidbar */}
        <Sidebar />
      </aside>
      <div className="col-span-6 border-x-[1px] border-borderColor">
        {/* Feed */}
      </div>
      <div className="col-span-3">{/* Widgets */}</div>
    </main>
  );
};

export default Home;

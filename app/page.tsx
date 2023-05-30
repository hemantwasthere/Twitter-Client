import FeedCard from "@/components/FeedCard";
import GoogleAuth from "@/components/GoogleAuth";
import Sidebar from "@/components/Sidebar";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="grid grid-cols-12 h-screen w-screen ">
      <aside className="col-span-3 overscroll-y-none">
        {/* Sidbar */}
        <Sidebar />
      </aside>
      <div className="col-span-6 border-x-[1px] border-borderColor overflow-y-scroll">
        {/* Feed */}
        <FeedCard />
      </div>
      <div className="col-span-3">
        {/* Widgets */}
        <GoogleAuth />
      </div>
    </main>
  );
};

export default Home;

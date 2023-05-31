"use client";

import FeedCard from "@/components/FeedCard";
import GoogleAuth from "@/components/GoogleAuth";
import Sidebar from "@/components/Sidebar";
import { useCurrentUser } from "@/hooks/user";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { user } = useCurrentUser();
  return (
    <main className="grid grid-cols-12 h-screen w-screen ">
      <aside className="col-span-3 overscroll-y-none">
        <Sidebar />
      </aside>
      <div className="col-span-6 border-x-[1px] border-borderColor overflow-y-scroll">
        <FeedCard />
      </div>
      <div className="col-span-3">
        {!user && (
          <div key="googleAuthDiv">
            <GoogleAuth />
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;

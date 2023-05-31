"use client";

import FeedCard from "@/components/FeedCard";
import GoogleAuth from "@/components/GoogleAuth";
import Sidebar from "@/components/Sidebar";
import TweetInput from "@/components/TweetInput";
import { Tweet } from "@/gql/graphql";
import { useGetAllTweets } from "@/hooks/tweet";
import { useCurrentUser } from "@/hooks/user";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { user } = useCurrentUser();
  const { tweets = [] } = useGetAllTweets();
  console.log(tweets);

  return (
    <main className="grid grid-cols-12 h-screen w-screen ">
      <aside className="col-span-3 overscroll-y-none">
        <Sidebar />
      </aside>

      <div className="col-span-5 border-x-[1px] border-borderColor overflow-y-scroll">
        {user && <TweetInput />}
        {tweets?.map((tweet) =>
          tweet ? <FeedCard key={tweet?.id} data={tweet as Tweet} /> : null
        )}
      </div>

      <div className="col-span-4">
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

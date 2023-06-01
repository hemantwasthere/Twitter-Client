"use client";

import FeedCard from "@/components/FeedCard";
import TweetInput from "@/components/TweetInput";
import { Tweet } from "@/gql/graphql";
import { useGetAllTweets } from "@/hooks/tweet";
import { useCurrentUser } from "@/hooks/user";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { user } = useCurrentUser();
  const { tweets = [] } = useGetAllTweets();

  return (
    // <main className="grid grid-cols-12 h-screen w-screen ">
    //   <aside className="col-span-3 overscroll-y-none">
    //     <Sidebar />
    //   </aside>

    //   <div className="col-span-5 border-x-[1px] border-borderColor overflow-y-scroll">
    <>
      {user && (
        <div className="hidden xl:inline">
          <TweetInput />
        </div>
      )}
      {tweets?.map((tweet) =>
        tweet ? (
          <FeedCard
            key={tweet?.id}
            content={tweet?.content}
            firstName={tweet.author?.firstName!}
            lastName={tweet.author?.lastName!}
            profileImageURL={tweet?.author?.profileImageURL!}
          />
        ) : null
      )}
    </>
    //   </div>

    //   <div className="col-span-4">
    //     {!user && (
    //       <div key="googleAuthDiv">
    //         <GoogleAuth />
    //       </div>
    //     )}
    //   </div>
    // </main>
  );
};

export default Home;

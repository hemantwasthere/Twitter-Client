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
            userId={tweet?.author?.id!}
          />
        ) : null
      )}
    </>
  );
};

export default Home;

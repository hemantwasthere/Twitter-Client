"use client";

import { graphqlClient } from "@/clients/api";
import { CreateTweetData } from "@/gql/graphql";
import { createTweetMutation } from "@/graphql/mutations/tweet";
import { getAllTweetsQuery } from "@/graphql/query/tweet";
import { toast } from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useCreateTweet = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload: CreateTweetData) =>
      graphqlClient.request(createTweetMutation, { payload }),
    onMutate: () => toast.loading("Tweeting", { id: "sameid" }),
    onSuccess: async () => {
      await queryClient.invalidateQueries(["all-tweets"]);
      toast.success("Tweeted", { id: "sameid" });
    },
  });

  return mutation;
};

export const useGetAllTweets = () => {
  const query = useQuery({
    queryKey: ["all-tweets"],
    queryFn: () => graphqlClient.request(getAllTweetsQuery),
  });
  return { ...query, tweets: query.data?.getAllTweets };
};

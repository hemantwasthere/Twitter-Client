"use client";

import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import React, { useCallback } from "react";
import { toast } from "react-hot-toast";
import { useQueryClient } from "react-query";

const GoogleAuth: React.FC = () => {
  const queryClient = useQueryClient();

  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential;
      if (!googleToken) return toast.error(`Google token not found`);

      const { verifyGoogleToken } = await graphqlClient.request(
        verifyUserGoogleTokenQuery,
        {
          token: googleToken,
        }
      );
      toast.success("Verified Success");
      console.log(verifyGoogleToken);

      if (verifyGoogleToken)
        localStorage.setItem("__twitter_token", verifyGoogleToken);

      await queryClient.invalidateQueries(["current-user"]);
    },
    [queryClient]
  );
  return (
    <div className="p-5 w-fit mt-5 mx-auto rounded-md bg-slate-200 flex flex-col justify-center items-center">
      <h1 className="mb-2 text-xl text-gray-700 ">New to Twitter?</h1>
      <GoogleLogin onSuccess={handleLoginWithGoogle} />
    </div>
  );
};

export default GoogleAuth;

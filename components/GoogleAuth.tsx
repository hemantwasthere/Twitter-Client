"use client";

import React, { useCallback } from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleAuth: React.FC = () => {
  const handleLoginWithGoogle = useCallback(
    (cred: CredentialRequestOptions) => {
        
    },
    []
  );
  return (
    <div className="p-5 w-fit mt-5 mx-auto rounded-md bg-slate-200 flex flex-col justify-center items-center">
      <h1 className="mb-2 text-xl text-gray-700 ">New to Twitter?</h1>
      <GoogleLogin onSuccess={(cred) => console.log(cred)} />
    </div>
  );
};

export default GoogleAuth;

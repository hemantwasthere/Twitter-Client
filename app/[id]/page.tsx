"use client";

import FeedCard from "@/components/FeedCard";
import { useGetUserById } from "@/hooks/user";
import Image from "next/image";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const UserProfilePage = ({ params }: any) => {
  const { user } = useGetUserById(params.id);
  return (
    <nav>
      <div className="">
        <div className="flex items-center gap-5 px-4 py-1">
          <div className="p-1 cursor-pointer hover:bg-hoverGray transition-all rounded-full">
            <BsArrowLeftShort className="w-8 h-8 text-primaryText" />
          </div>
          <div className="font-bold text-xl">
            <h3>
              {user?.firstName} {user?.lastName}
            </h3>
            <p className="text-gray-500 font-[200] text-sm">
              {user?.tweets?.length} Tweets
            </p>
          </div>
        </div>
        <div className="w-full bg-[#F1F1F1] h-[200px]"></div>
        <div className="flex justify-between px-4 pt-3 mb-4">
          <div className="flex flex-col -mt-[4.3rem]">
            <Image
              className="rounded-full border-4 border-white"
              src={user?.profileImageURL!}
              alt={user?.firstName!}
              width={120}
              height={120}
            />
            <p className="text-xl font-extrabold mt-3">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-[#5D6D79]">@username</p>
          </div>
          <div className="">Edit Profile</div>
        </div>
        <div className="px-5 mt-5 text-sm border-b w-full border-b-borderColor">
          <div className="font-semibold w-fit py-3 px-1 cursor-pointer relative">
            Tweets
            <div className="rounded-md w-full h-1 bg-primaryBlue absolute -bottom-[3px] left-0"></div>
          </div>
        </div>
        <div>
          {user?.tweets?.reverse().map((tweet) => (
            <div key={tweet?.id}>
              <FeedCard
                content={tweet?.content}
                firstName={user?.firstName}
                lastName={user?.lastName!}
                profileImageURL={user?.profileImageURL!}
              />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default UserProfilePage;

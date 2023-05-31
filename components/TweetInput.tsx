"use client";

import { useCreateTweet } from "@/hooks/tweet";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { BiPoll } from "react-icons/bi";
import { FiImage } from "react-icons/fi";
import { GrEmoji } from "react-icons/gr";
import { MdOutlineGifBox } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";

const TweetInput: React.FC = () => {
  const { user } = useCurrentUser();
  const { mutate } = useCreateTweet();

  const [content, setContent] = useState("");

  const handleSelectImage = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
  };

  const handleCreateTweet = useCallback(() => {
    mutate({ content });
    setContent("");
  }, [content, mutate]);

  return (
    <div className="grid grid-cols-12 cursor-pointer transition-all p-4 ">
      <div className="col-span-1">
        <Image
          src={user?.profileImageURL!}
          width={40}
          height={40}
          className="rounded-full"
          alt="profile_img"
        />
      </div>
      <div className="col-span-11 px-3">
        <div className="w-full">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-5 outline-none bg-transparent text-[#536471] text-xl "
            placeholder="What is happening?!"
          />
        </div>
        <div className="flex justify-between items-center py-2 border-borderColor border-t-[1px] ">
          <div className="flex gap-2 items-center">
            <FiImage
              onClick={handleSelectImage}
              className="w-9 h-9 p-2 rounded-full bg-[#] text-primaryBlue hover:bg-[#ECF6FE] transition-all"
            />
            <MdOutlineGifBox className="w-9 h-9 p-2 rounded-full bg-[#] text-primaryBlue hover:bg-[#ECF6FE] transition-all" />
            <BiPoll className="w-9 h-9 p-2 rounded-full bg-[#] text-primaryBlue hover:bg-[#ECF6FE] transition-all" />
            <GrEmoji className="w-9 h-9 p-2 rounded-full bg-[#] text-primaryBlue hover:bg-[#ECF6FE] transition-all" />
            <TbCalendarTime className="w-9 h-9 p-2 rounded-full bg-[#] text-primaryBlue hover:bg-[#ECF6FE] transition-all" />
          </div>
          <button
            onClick={handleCreateTweet}
            disabled={!content}
            className="px-3 py-2 font-bold flex items-center text-sm justify-center bg-primaryBlue rounded-full text-white hover:bg-[#1C94E7] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;

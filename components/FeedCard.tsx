import { Tweet } from "@/gql/graphql";
import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

interface FeedCardProps {
  profileImageURL?: string;
  firstName: string;
  lastName: string;
  content?: string;
  userId?: string;
}

const FeedCard: React.FC<FeedCardProps> = ({
  profileImageURL,
  firstName,
  lastName,
  content,
  userId,
}) => {
  return (
    <div className="grid grid-cols-12 border-b cursor-pointer transition-all border-b-borderColor  hover:bg-tweetCardHover p-4 ">
      <div className="col-span-1">
        <a href={`/${userId}`}>
          {profileImageURL && (
            <Image
              src={profileImageURL!}
              alt="user-image"
              height={48}
              width={48}
              className="rounded-full"
            />
          )}
        </a>
      </div>
      <div className="col-span-11 px-3">
        <a href={`/${userId}`}>
          <p>
            {firstName} {lastName}
          </p>
        </a>
        <p>{content}</p>
        <div className="flex justify-between items-center mt-3 lg:pr-32">
          <BiMessageRounded className="text-[#536471] w-9 h-9 p-2 rounded-full bg-[#] hover:text-primaryBlue hover:bg-[#E8F0F6] transition-all" />
          <FaRetweet className="text-[#536471] w-9 h-9 p-2 rounded-full bg-[#] hover:text-[#01BB7C] hover:bg-[#DEF1EB] transition-all" />
          <AiOutlineHeart className="text-[#536471] w-9 h-9 p-2 rounded-full bg-[#] hover:text-[#F962A8] hover:bg-[#F6E0EA] transition-all" />
          <BiUpload className="text-[#536471] w-9 h-9 p-2 rounded-full bg-[#] hover:text-primaryBlue hover:bg-[#E8F0F6] transition-all" />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

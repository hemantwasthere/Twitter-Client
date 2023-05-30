import Image from "next/image";
import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";

const FeedCard: React.FC = () => {
  return (
    <div className="grid grid-cols-12 border-b cursor-pointer transition-all border-b-borderColor  hover:bg-tweetCardHover p-4 ">
      <div className="col-span-1">
        <Image
          src="https://avatars.githubusercontent.com/u/44976328"
          alt="user-image"
          height={50}
          width={50}
        />
      </div>
      <div className="col-span-11 px-3">
        <h5>Piyush Garg</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          repellat, hic neque voluptatibus perferendis, illo exercitationem
          debitis sed repudiandae facere doloribus modi ipsum totam accusantium
          et. A eveniet ab, reiciendis accusamus voluptates facere quisquam
          iusto error aperiam tempora ex dolor!
        </p>
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

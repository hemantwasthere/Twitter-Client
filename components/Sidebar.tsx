import React from "react";
import { BsTwitter, BsBookmark, BsThreeDots } from "react-icons/bs";
import { AiOutlineHome, AiOutlineBell } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { CgList, CgProfile } from "react-icons/cg";

const navLinks = [
  {
    name: "Home",
    icon: <AiOutlineHome className="h-6 w-6" />,
    path: "/",
  },
  {
    name: "Explore",
    icon: <BiHash className="h-6 w-6" />,
    path: "/",
  },
  {
    name: "Notifications",
    icon: <AiOutlineBell className="h-6 w-6" />,
    path: "/",
  },
  {
    name: "Messages",

    icon: <FiMail className="h-6 w-6" />,

    path: "/",
  },
  {
    name: "Lists",
    icon: <CgList className="h-6 w-6" />,
    path: "/",
  },
  {
    name: "Bookmarks",
    icon: <BsBookmark className="h-6 w-6" />,
    path: "/",
  },
  {
    name: "Twitter Blue",

    icon: <BsTwitter className="h-6 w-6" />,

    path: "/",
  },
  {
    name: "Profile",
    icon: <CgProfile className="h-6 w-6" />,
    path: "/",
  },
  {
    name: "More",
    icon: <BsThreeDots className="h-6 w-6" />,
    path: "/",
  },
];

const Sidebar: React.FC = () => {
  return (
    <div className="flex justify-end">
      <div className="w-full max-w-[240px] pl-4 pr-2 ">
        <div className="p-3 rounded-full w-fit transition-all duration-200 ease-in hover:bg-hoverGray cursor-pointer">
          <BsTwitter className="h-6 w-6 text-primaryBlue " />
        </div>
        <ul className="">
          {navLinks.map((link, i) => (
            <li key={i} className="group w-full cursor-pointer my-2">
              <p className="font-normal w-fit text-lg text-primaryText flex items-center py-2 px-3 transition-all duration-200 group-hover:bg-hoverGray rounded-full">
                {link.icon}
                <span className="mx-4">{link.name}</span>
              </p>
            </li>
          ))}
          <button className="px-4 mt-6 py-3 flex items-center justify-center bg-primaryBlue rounded-full w-full text-white hover:bg-[#1C94E7]">
            Tweet
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

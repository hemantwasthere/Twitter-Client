"use client";

import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import React from "react";
import { AiOutlineBell, AiOutlineHome } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { BsBookmark, BsThreeDots, BsTwitter } from "react-icons/bs";
import { CgList, CgProfile } from "react-icons/cg";
import { FiMail } from "react-icons/fi";

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
  const { user } = useCurrentUser();

  const handleLogout = () => {
    localStorage.removeItem("__twitter_token");
    window.location.reload();
  };

  return (
    <div className="flex h-full justify-end">
      <div className="w-full max-w-[240px] xl:pl-4 xl:pr-2">
        <div className="flex justify-center md:justify-end xl:justify-start md:pr-5">
          <div className="p-3 rounded-full w-fit transition-all duration-200 ease-in hover:bg-hoverGray cursor-pointer">
            <BsTwitter className="h-6 w-6 text-primaryBlue " />
          </div>
        </div>

        <div className="flex flex-col justify-between h-[90%]">
          <ul className="flex flex-col justify-between items-center md:items-end md:pr-5">
            {navLinks.map((link, i) => (
              <li
                key={i}
                className="group xl:w-full xl:mx-0 cursor-pointer mt-2"
              >
                <p className="font-normal w-fit text-lg text-primaryText flex items-center py-2 px-3 transition-all duration-200 group-hover:bg-hoverGray rounded-full">
                  {link.icon}
                  <span className="mx-4 hidden xl:inline ">{link.name}</span>
                </p>
              </li>
            ))}
            <button className="xl:px-4 xl:w-full mt-4 xl:mt-6 p-3 xl:py-3 flex items-center justify-center bg-primaryBlue rounded-full text-white hover:bg-[#1C94E7]">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="xl:hidden"
                fill="#fff"
                width={25}
                height={25}
              >
                <g>
                  <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                </g>
              </svg>
              <span className="hidden xl:inline">Tweet</span>
            </button>
          </ul>

          {user && (
            <div
              onClick={handleLogout}
              className="flex justify-center md:justify-end md:pr-5 xl:justify-between w-full rounded-full transition-all hover:bg-hoverGray cursor-pointer p-3 items-center  "
            >
              <div key="image_profile_div" className="flex items-center gap-3 ">
                <Image
                  src={user?.profileImageURL!}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="profile_img"
                />
                <p className="font-bold hidden xl:inline">{user?.firstName}</p>
              </div>
              <BsThreeDots className="w-5 h-5 hidden xl:inline" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

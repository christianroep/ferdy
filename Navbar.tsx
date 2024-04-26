"use client";

import Image from "next/image";
import { FaXTwitter, FaTelegram,  } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
    const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <nav className="bg-[#ACDBF5] bg-opacity-50 w-full">
    {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="fixed lg:hidden block top-0 left-0 w-full h-full bg-black opacity-60 z-[88] cursor-pointer"
        ></div>
      )}
        <div className="opacity-100 justify-between flex items-center mr-4 text-2xl">
            <div className="flex items-center">
                <Image src="/images/logo.png" alt="logo" width={120} height={90} />
                <p className="font-bold text-4xl">$FERDY</p>
            </div>
            <div className="flex lg:hidden place-items-center ml-4 mr-6 lg:mr-0">
                <RxHamburgerMenu
                onClick={() => setHeaderToggle(true)}
                className=""
                />
            </div>
            <div
                className={`${
                headerToggle ? "right-0" : "-right-[900px] lg:-right-0"
                } place-content-center lg:place-content-end w-full flex text-center sm:items-center gap-6 lg:flex-row flex-col  h-full  lg:max-w-none lg:h-auto fixed lg:relative top-0 pt-[6rem] px-[2rem] pb-[2rem] lg:p-0 transition-all duration-1000 z-[89] bg-[#1B1B1B] lg:bg-transparent`}
            >
            <div
            className="w-6 h-6 lg:hidden block absolute top-5 left-5 cursor-pointer text-3xl text-white"
            onClick={() => setHeaderToggle(false)}><MdClose /></div>
            <div className="flex flex-col lg:flex-row lg:flex text-white lg:text-black">
                <a href="#" className="p-4 navlink scale-from-center font-semibold">Contract</a>
                <div className="p-4 cursor-pointer navlink scale-from-center font-semibold">Connect Wallet</div>
                <div className="flex space-x-2 justify-center">
                <a
                href="https://twitter.com/FerdyOnSolana"
                target="_blank"
                className="bg-[#96E1F0] h-14 w-14  flex justify-center items-center text-2xl  rounded-full duration-500 hover:text-black hover:bg-white"
                >
                    <FaXTwitter />
                </a>
                <a
                href="https://t.me/ferdyonsol"
                target="_blank"
                className="bg-[#96E1F0] h-14 w-14  flex justify-center items-center text-2xl  rounded-full duration-500 hover:text-[#0088cc] hover:bg-white"
                >
                    <FaTelegram />
                </a>
                </div>
            </div>
        </div>
        </div>
    </nav>
  );
}

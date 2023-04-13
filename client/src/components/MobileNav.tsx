"use client";

import { useRouter } from "next/navigation";
import AnimatedIcon from "./About/AnimatedIcon";
import React, { Dispatch, SetStateAction } from "react";

export type ButtonProps = {
  href: string;
  title: string;
  className: string;
  toggle: ()=> void;
};

const CustomMobileLink = ({ href, title, className, toggle }: ButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    toggle()
    router.push(href);
  };

  return (
    <button className={`${className} relative group`} onClick={handleClick}>
      <a href={href}>
        {title}
        <span className="h-[2px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300">
          &nbsp;
        </span>
      </a>
    </button>
  );
};

export default function MobileNav() {
  return (
    // <div className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light/90 rounded-lg backdrop-blur-md py-32">
    //     <nav className="flex items-center flex-col justify-center">
    //       <CustomMobileLink
    //         href="/"
    //         title="Home"
    //         className="mr-4"
    //         toggle={handleClick}
    //       />
    //       <CustomMobileLink
    //         href="/about"
    //         title="About"
    //         className="mr-4"
    //         toggle={handleClick}
    //       />
    //       <CustomMobileLink
    //         href="/project"
    //         title="Project"
    //         className="mr-4"
    //         toggle={handleClick}
    //       />
    //       <CustomMobileLink
    //         href="/contact"
    //         title="Contact"
    //         className="mr-4"
    //         toggle={handleClick}
    //       />
    //     </nav>
    //     <AnimatedIcon />
    //   </div>
  );
}

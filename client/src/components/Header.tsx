import React from "react";
import Link from "next/link";
import HamburgerBar from "./HamburgerBar";

export type CustomProps = {
  href: string;
  title: string;
  className: string;
};
const CustomLink: React.FC<CustomProps> = ({ href, title, className }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className="h-[2px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300">
        &nbsp;
      </span>
    </Link>
  );
};

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-32 py-8 font-medium relative">
      <Link href="/">
        <h1 className=" text-3xl font-bold md:text-2xl">
          {"Hyonie's Portfolio"}
        </h1>
      </Link>

      <div className="flex justify-between items-end lg:hidden">
        <nav className="flex gap-4 ">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mr-4" />
          <CustomLink href="/project" title="Project" className="mr-4" />
          <CustomLink href="/contact" title="Contact" className="mr-4" />
        </nav>
      </div>

      <HamburgerBar />
    </header>
  );
}

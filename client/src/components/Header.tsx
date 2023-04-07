import React from "react";
import Link from "next/link";

type CustomProps = {
  href: string;
  title: string;
  className: string;
};
const CustomLink: React.FC<CustomProps> = ({ href, title, className }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className="h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300">
        &nbsp;
      </span>
    </Link>
  );
};

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-3xl font-bold">{"Hyonie's Portforio"}</h1>
      </Link>

      <nav className="flex gap-4">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mr-4" />
        <CustomLink href="/project" title="Project" className="mr-4" />
        <CustomLink href="/contact" title="Contact" className="mr-4" />
        {/* <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/project">Project</Link>
        <Link href="/contact">Contact</Link> */}
      </nav>
    </header>
  );
}

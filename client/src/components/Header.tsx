import React from "react";
import Link from "next/link";

type CustomProps = {
  href: string;
  title: string;
  className: string;
};
const CustomLink: React.FC<CustomProps> = ({ href, title, className }) => {
  return (
    <Link href={href} className={`${className}`}>
      {title}
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

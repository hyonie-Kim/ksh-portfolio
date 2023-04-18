"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiTistory, SiGithub, SiGmail, SiNaver } from "react-icons/si";
const LINKS = [
  { icon: <SiGithub />, url: "https://github.com/hyonie-Kim" },
  { icon: <SiGmail />, url: "mailto:dev.hyonie@gmail.com" },
  {
    icon: <SiTistory />,
    url: "https://sehyeon90.tistory.com/",
  },
  {
    icon: <SiNaver />,
    url: "https://blog.naver.com/star_loo4/",
  },
];
export default function AnimatedIcon() {
  return (
    <section className="flex items-center justify-center flex-wrap">
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <motion.a
            className="w-5 mx-3 hover:text-yellow-400 sm:mx-1"
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </ul>
    </section>
  );
}

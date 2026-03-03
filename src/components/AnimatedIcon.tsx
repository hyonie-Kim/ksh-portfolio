'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  SiTistory,
  SiGithub,
  SiGmail,
  SiNaver,
  SiInstagram,
} from 'react-icons/si';
import { link } from 'fs';
const LINKS = [
  { icon: <SiGithub />, url: 'https://github.com/hyonie-Kim', label: '깃허브' },
  { icon: <SiGmail />, url: 'mailto:dev.hyonie@gmail.com', label: '이메일' },
  {
    icon: <SiTistory />,
    url: 'https://dev-hyonie.tistory.com/',
    label: '블로그'
  },

  { icon: <SiInstagram />, url: 'https://www.instagram.com/hyonie.develop/', label: '인스타그램' },
  // {
  //   icon: <SiNaver />,
  //   url: "https://blog.naver.com/star_loo4/",
  // },
];

// framer-motion 사용
export default function AnimatedIcon() {

  return (
    <section className="flex items-center justify-center flex-wrap">
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => {

          const isMailto = link.url.startsWith('mailto:');
          

          return (
            <motion.a
            className="w-5 mx-3 hover:text-yellow-400 sm:mx-1"
            key={index}
            href={link.url}
            target={isMailto ? undefined : '_blank'}
            rel={isMailto ? undefined : 'noreferrer'}
            whileHover={{ y: 2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={link.label}
            title={link.label}
          >
            {link.icon}
          </motion.a>
          )

        })}
      </ul>
    </section>
  );
}

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
import { Link as ScrollLink } from 'react-scroll';
const LINKS = [
  { icon: <SiGithub />, type:'external', url: 'https://github.com/hyonie-Kim', label: '깃허브' },
  { icon: <SiGmail />, type:'scroll', to: 'contact', label: '이메일' },
  {
    icon: <SiTistory />,
    type:'external',
    url: 'https://dev-hyonie.tistory.com/',
    label: '블로그'
  },

  { icon: <SiInstagram />, type:'external', url: 'https://www.instagram.com/hyonie.develop/', label: '인스타그램' },
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

          if(link.type  === 'scroll'){

            return (
              <motion.div key={index} 
              className="w-5 mx-3 hover:text-yellow-400 sm:mx-1"
              whileHover={{ y: 2 }}
              whileTap={{ scale: 0.9 }}
              >
                <ScrollLink
                to={link.to || ''}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                aria-label={link.label}
                title={link.label}
                >
                  {link.icon}
                </ScrollLink>
              </motion.div>
            )
          }

          return (
            <motion.a
            className="w-5 mx-3 hover:text-yellow-400 sm:mx-1"
            key={index}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
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

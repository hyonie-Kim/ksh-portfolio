'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import NextLink from 'next/link';
import profileImage from '../../public/images/IMG_KSH.jpg';
import AnimatedText from './AnimatedText';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { AiOutlineUser, AiFillCalendar } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import AnimatedIcon from './AnimatedIcon';

export default function HeroSection() {
  return (
    <section id="home" className='px-4 sm:px-6 md:mx-auto max-w-3xl md:max-w-7xl'>
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-14 md:py-16 md:flex-row md:space-x-8 md:text-left">
        <div className="md:w-1/2 md:mt-1 flex flex-col items-center">
          <Image
            className="rounded-full md:shadow-2xl"
            src={profileImage}
            alt="profileImage"
            width={300}
            height={300}
            priority
          />
          <div className="flex text-center justify-center my-8 md:px-10 md:inline-block">
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  김세현
                </h2>
                <p className="text-sm text-gray-600 mb-4">Kim Se Hyeon</p>
              </div>
              
              <div className="flex justify-center mb-4">
                <AnimatedIcon />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <AiOutlineUser size={18} />
                  <span className="text-base font-semibold text-gray-700">Full-Stack Developer</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2">
                  <MdLocationOn size={18} />
                  <span className="text-base font-semibold text-gray-700">서울 영등포구</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-0 md:w-3/5 text-center md:text-left">
          <AnimatedText
            text="안녕하세요, 웹 개발 경력 2년차👩🏻‍💻 김세현입니다."
            className="text-4xl/loose mt-6 text-center md:!text-left text-gray-800"
          />
          <p className="text-lg mt-4 mb-6 md:text-lg md:leading-8">
            <span className="font-semibold text-teal-600">프론트엔드와 백엔드</span>를 두루 경험하며 다양한 기술 스택에 유연하게 대응합니다.
            <br></br>
            <br></br>
            <span className="text-base">
              <span className="font-semibold text-gray-800">📈 경력:</span> 헬스케어 스타트업 → 통신·렌탈 중견기업 (2년차)
            </span>
            <br></br>
            <span className="text-base">
              <span className="font-semibold text-gray-800">🛠 주요 기술:</span> <span className="font-semibold text-teal-600">ASP.NET</span> · <span className="font-semibold text-teal-600">Next.js</span> · <span className="font-semibold text-teal-600">NestJS</span> · <span className="font-semibold text-teal-600">MSSQL</span>
            </span>
            <br></br>
            <br></br>
            <span className="font-semibold">&ldquo;로직의 흐름을 이해하고 구조적으로 개선하는 개발&rdquo;</span>을 지향하며, 단순한 기능 구현을 넘어 업무의 구조와 흐름을 개선하는 개발자로 성장하고 있습니다.
          </p>

          <div className="flex flex-row mt-8 justify-center">
            {/* <NextLink
              href="/matching_portfolio.pdf"
              target={"_blank"}
              className="flex items-center bg-black text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-black border-2 border-solid border-transparent hover:border-black"
            >
              이력서&ensp;
              <FaExternalLinkAlt />
            </NextLink> */}
            {/* <Link
              to="contact"
              activeClass="action"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="ml-4 text-lg font-medium text-black underline my-auto cursor-pointer"
            >
              Contact
            </Link> */}
          </div>
        </div>
      </div>

      {/* React와 Tailwind CSS를 사용하여 버튼 또는 링크를 만들어 특정 섹션으로 부드럽게 스크롤하는 기능을 구현한 것 */}
      <div className="flex flex-row justify-center cursor-pointer mt-8">
        <Link
          to="about"
          activeClass="action"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce text-teal-600 hover:text-teal-700 transition-colors" />
        </Link>
      </div>
    </section>
  );
}


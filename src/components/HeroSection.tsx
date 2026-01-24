'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import NextLink from 'next/link';
import profileImage from '../../public/images/IMG_KSH.jpeg';
import AnimatedText from './AnimatedText';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { AiOutlineUser, AiFillCalendar } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { SiNextdotjs, SiReact, SiNestjs, SiDotnet, SiMicrosoftsqlserver } from 'react-icons/si';
import AnimatedIcon from './AnimatedIcon';

export default function HeroSection() {
  return (
    <section id="home" className='px-4 sm:px-6 md:mx-auto max-w-3xl md:max-w-7xl'>
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-14 md:py-20 md:flex-row md:items-start md:space-x-12 md:text-left">
        <div className="md:w-1/2 flex flex-col items-center">
          <Image
            className="rounded-lg md:shadow-2xl w-56 h-72 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] object-contain"
            src={profileImage}
            alt="profileImage"
            width={500}
            height={667}
            priority
          />
          <div className="flex text-center justify-center my-8 md:px-10 md:inline-block">
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  김세현 <span className="text-base font-normal text-gray-600">(Kim Se Hyeon)</span>
                </h2>
              </div>
              
              <div className="flex justify-center mb-4">
                <AnimatedIcon />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <AiOutlineUser size={18} />
                  <span className="text-base font-semibold text-gray-700">Web Developer</span>
                </div>
                
                {/* <div className="flex items-center justify-center space-x-2">
                  <MdLocationOn size={18} />
                  <span className="text-base font-semibold text-gray-700">서울 영등포구</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-3/5 text-center md:text-left md:pt-0">
          <AnimatedText
            text="레거시부터 최신 웹까지, 시스템 가치를 개선하는 3년차 개발자 김세현입니다"
            className="text-4xl/loose mt-6 md:mt-0 text-center md:!text-left text-gray-800"
          />
          
          {/* 핵심 정보 카드 */}
          <div className="mt-6 mb-6 space-y-4">
            <div className="bg-gradient-to-r from-teal-50 to-white p-4 rounded-lg border border-teal-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">📈</span>
                <span className="font-semibold text-gray-800">경력</span>
              </div>
              <p className="text-base text-gray-700">헬스케어 스타트업 → 통신·렌탈 중견기업 (1년 5개월)</p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-white p-4 rounded-lg border border-teal-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🛠</span>
                <span className="font-semibold text-gray-800">주요 기술 스택</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-teal-200 hover:border-teal-400 transition-colors">
                  <SiDotnet className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium text-gray-700">ASP.NET</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-teal-200 hover:border-teal-400 transition-colors">
                  <SiNextdotjs className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium text-gray-700">Next.js</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-teal-200 hover:border-teal-400 transition-colors">
                  <SiNestjs className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium text-gray-700">NestJS</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-teal-200 hover:border-teal-400 transition-colors">
                  <SiMicrosoftsqlserver className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium text-gray-700">MSSQL</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-base mt-6 mb-6 md:leading-7 text-gray-700">
            <span className="font-semibold text-teal-600">Cursor AI, ChatGPT, Gemini</span> 등 AI 툴을 활용하여 개발 효율을 높이고, 레거시부터 최신 기술까지 다양한 스택으로 프로젝트를 진행하며 지속적으로 성장하고 있습니다.
          </p>

          <div className="flex flex-row gap-4 mt-8 justify-center md:justify-start">
            <Link
              to="contact"
              activeClass="action"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-teal-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            >
              연락하기
            </Link>
            <NextLink
              href="/matching_portfolio.pdf"
              target="_blank"
              className="flex items-center bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg border-2 border-gray-300 hover:border-teal-500 hover:text-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              이력서&ensp;
              <FaExternalLinkAlt />
            </NextLink>
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


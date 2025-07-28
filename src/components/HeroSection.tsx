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
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-14 md:py-16 md:flex-row md:space-x-4 md:text-left">
        <div className="md:w-1/2 md:mt-1">
          <Image
            className="rounded-full md:shadow-2xl"
            src={profileImage}
            alt="profileImage"
            width={300}
            height={300}
            priority
          />
          <div className="flex text-center justify-center my-6 md:px-10 md:inline-block">
            <ul className="list-inside mx-auto border-3 leading-relaxed space-y-2 md:space-y-1">
              <li>
                <h2 className="text-xl font-bold mt-2 md:text-xl">
                  {'김세현/Kim Se Hyeon'}
                </h2>
              </li>
              <li>
                <AnimatedIcon />
              </li>
              <li>
                <h3 className="text-base font-semibold flex space-x-3 md:text-base">
                  <AiOutlineUser className="inline-block mx-2" />
                  Software developer
                </h3>
              </li>
              {/* <li>
                <h3 className='text-base font-semibold flex space-x-3 md:text-base'>
                  <AiFillCalendar className='inline-block mx-2' /> 1990.11.20
                </h3>
              </li> */}
              <li>
                <h3 className="text-base font-semibold flex space-x-3 md:text-base">
                  <MdLocationOn className="inline-block mx-2" /> 서울 영등포구
                  거주
                </h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:mt-0 md:w-3/5">
          <AnimatedText
            text="안녕하세요, 웹 개발 경력 2년차👩🏻‍💻 김세현입니다."
            className="text-4xl/loose mt-6 !text-left m-4"
          />
          <p className="text-lg mt-4 mb-6 md:text-lg md:leading-8">
            프론트엔드부터 백엔드, 데이터베이스까지 폭넓게 경험하며 다양한 기술 스택에 유연하게 대응해왔습니다.
            <br></br>
            <br></br>
            헬스케어 스타트업에서 프론트엔드 개발자로 첫 발을 내딛었고, 기획자·디자이너·백엔드 개발자와의 협업을 통해 서비스 개발 전반에 대한 실무 이해도를 키워왔습니다.
            <br></br>
            현재는 통신·렌탈 분야 중견기업에서 ASP.NET, Next.js, NestJS, MSSQL 기반의 웹 서비스 전반을 맡아 개발 및 운영을 담당하고 있으며, Windows Server 환경에서의 쿼리 최적화와 시스템 유지보수까지 폭넓게 다루고 있습니다.
            
            개발을 단순한 도구가 아닌, 업무의 구조와 흐름을 이해하고 개선하는 수단으로 생각합니다.
            <br></br>
            
            &ldquo;문제를 해결하는 개발&rdquo;보다는, &ldquo;비즈니스 흐름을 이해하고 개선하는 개발&rdquo;를 지향합니다.
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
      <div className="flex flex-row justify-center cursor-pointer">
        <Link
          to="about"
          activeClass="action"
          spy={true}
          smooth={true}
          offset={-100} // 스크롤시 100px 만큼
          duration={500} // 스크롤 시간 0.5초
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}

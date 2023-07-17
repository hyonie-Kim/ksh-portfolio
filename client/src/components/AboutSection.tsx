"use client";
import React from "react";
import Image from "next/image";
import SesacImage from "../../public/images/sesacmile.png";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
];

export default function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-3xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              🌱피드백과 코드리뷰를 통해 성장하는것을 좋아합니다.
            </h1>
            <p>
              지난 6개월간 서울시 청년취업사관학교에서 HTML, CSS, JavaScript와
              웹 개발에 대한 기초 지식을 공부하였고, 자바스크립트 언어를
              기반으로 React 프레임 워크 및 라이브러리를 활용하여 Express 그리고
              MySQL을 연결해 하나의 프로젝트를 만들고 웹사이트를 구현할수
              있습니다.
            </p>
            <br />
            <p>
              팀프로젝트를 하면서 Git을 사용하여 팀원들과 변경된 코드 이력을
              확인하고,어떤 기능을 추가하거나 오류사항을 수정할 때 commit을
              사용하고 메시지 관리하여 협업하였습니다.
            </p>
            <br />
            <p>
              개발한 웹 프로젝트를 naver cloud platform, AWS(EC2)와 같은
              클라우드 서버에 배포하고 다른사람들과 공유 할수 있습니다.
            </p>
            <br />
            <p>
              React와 같은 프레임 워크 기술과 프로세스를 깊이 있게 이해하고 이후
              새롭게 구현하였을때 빠르게 개발 하는 것을 목표로합니다.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, index) => {
                return (
                  <p
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    key={index}
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>

            <Image
              className="hidden md:block md:relative md:bottum-3 md:mx-auto md:z-0 "
              src={SesacImage}
              alt="SesacImage"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

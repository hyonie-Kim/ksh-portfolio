import React from "react";
import Image from "next/image";
import SesacImage from "../../public/images/sesacmile.jpg";
import AnimatedIcon from "./About/AnimatedIcon";

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
              🌱청년취업사관학교 용산1기
            </h1>
            <p>
              6개월간 풀스택 과정을 수료하였고, 학습한 기술을 바탕으로
              프론트엔드, 백엔드, 데이터베이스를 연결해 하나의 프로젝트를 만들고
              웹사이트를 구현할수 있습니다.
            </p>
            <br />
            <p>
              개발한 웹 프로젝트를 클라우드 서버에 배포하고 다른사람들과 공유
              할수 있습니다.
            </p>
            <br />
            <p>
              각 기능에 사용되는 기술과 프로세스를 이해하고 이후 새롭게
              구현하였을때 쉽게 개발 하는 것을 목표로합니다.
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
              className="hidden md:block md:relative md:top-6 md:mx-auto md:z-0 md:rounded-lg"
              src={SesacImage}
              alt="SesacImage"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

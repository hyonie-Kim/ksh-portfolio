import AnimatedIcon from "@/components/About/AnimatedIcon";
import Profile from "@/components/About/Profile";
import Skills from "@/components/About/Skills";
import { Metadata } from "next";
import React from "react";

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

export const metadata: Metadata = {
  title: "About Me",
  description: "김세현에 대한 소개글",
};

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
export default function AboutPage() {
  return (
    <>
      <Profile className="text-center" width={250} height={250} />
      <AnimatedIcon />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center md:mx-0">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          개발을 사랑하는 풀스택 개발자 <br />
          사람과 디자인을 담는 웹앱을 만들고 있음
        </p>
        {/* <h2 className={TITLE_CLASS}>Career</h2>
        <p>구굴러(-Now)</p> */}
        <h2 className={TITLE_CLASS}>Skills</h2>

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
      </section>
    </>
  );
}

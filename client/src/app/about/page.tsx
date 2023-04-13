import AnimatedIcon from "@/components/About/AnimatedIcon";
import Profile from "@/components/About/Profile";
import Skills from "@/components/About/Skills";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Me",
  description: "김세현에 대한 소개글",
};

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
export default function AboutPage() {
  return (
    <>
      <Profile className="text-center" />
      <AnimatedIcon />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          개발을 사랑하는 풀스택 개발자 <br />
          사람과 디자인을 담는 웹앱을 만들고 있음
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>구굴러(-Now)</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>React, Vue, Node</p>
      </section>
    </>
  );
}

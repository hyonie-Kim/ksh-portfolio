import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/IMG_KSH.jpg";
import AnimatedText from "./About/AnimatedText";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-20 md:py-24 md:flex-row md:space-x-4 md:text-left">
        <div className="md:w-1/2 md:mt-1">
          <Image
            className="rounded-full shadow-2xl"
            src={profileImage}
            alt="profileImage"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="md:mt-0 md:w-3/5 border-2 border-indigo-600">
          <AnimatedText
            text=" 유연한 자세로 빠르게🏃🏻‍♀️ 성장하는 개발자가 되도록 노력하겠습니다!"
            className="text-4xl/loose mt-6 !text-left m-4"
          />
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            팀과의 협업과 소통을 중요시하며, 서로의 아이디어를 존중하고 협력하여
            프로젝트를 성공적으로 완수하는 것을 목표로 하고 있습니다. 믿음직한
            신입 개발자로서 도움이 되어 든든한 팀원이 되겠습니다.
          </p>

          <div className="flex flex-row mt-8 justify-center border-2">
            <Link
              href="/dummy.pdf"
              target={"_blank"}
              className="flex items-center bg-black text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-black border-2 border-solid border-transparent hover:border-black"
            >
              이력서&ensp;
              <FaExternalLinkAlt />
            </Link>
            <Link
              href="/contact"
              className="ml-4 text-lg font-medium text-black underline my-auto"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link href="about">
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}

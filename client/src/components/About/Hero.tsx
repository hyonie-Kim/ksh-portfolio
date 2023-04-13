import React from "react";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import Profile from "./Profile";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-row space-x-4 text-center items-center justify-between my-10 py-16 md:flex-col ">
      <div className="w-1/2 md:mt-2 p-2 md:w-full">
        <Profile className="" width={350} height={350} />
      </div>

      <div className="flex w-1/2 felx-row justify-center md:mt-2 flex-col items-center md:w-full">
        <AnimatedText
          text=" 유연한 자세로 빠르게🏃🏻‍♀️ 성장하는 개발자가 되도록 노력하겠습니다!"
          className="text-4xl/loose mt-6 !text-left m-4"
        />

        <p className="text-lg mt-4 md-6 text-left font-medium leading-relaxed">
          끊임없이 새로운 기술과 도구를 학습하며, 문제를 찾아내고 해결하는
          능력을 갖추고 있습니다. 또한, 팀과의 협업과 소통을 중요시하며, 서로의
          아이디어를 존중하고 협력하여 프로젝트를 성공적으로 완수하는 것을
          목표로 하고 있습니다. 믿음직한 신입 개발자로서 도움이 되어 든든한
          팀원이 되겠습니다.
        </p>
        <div className="flex flex-row mt-8 justify-center">
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
    </section>
  );
}

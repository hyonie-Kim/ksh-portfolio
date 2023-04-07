import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/IMG_KSH.jpg";
import ContactBtn from "./ContactBtn";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <section className="flex items-center justify-between w-full">
      <div className="w-1/2">
        <Image
          className="mx-auto rounded-full"
          src={profileImage}
          alt="ProfileImage"
          width={450}
          height={450}
          priority
        />
        <div className="text-center">
          <h2 className="text-3xl font-bold mt-2">{"김세현/Kim Se Hyeon"}</h2>
          <h3 className="text-xl font-semibold">Front-end developer</h3>
          {/* <p>프론트엔드 개발자를 희망합니다</p> */}
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center self-center">
        <AnimatedText
          text=" 유연한 자세로 빠르게🏃🏻‍♀️ 성장하는 개발자가 되도록 노력하겠습니다!"
          className="!text-6xl !text-left"
        />
        <p className="my-4 text-base font-medium">
          끊임없이 새로운 기술과 도구를 학습하며, 문제를 찾아내고 해결하는
          능력을 갖추고 있습니다. 또한, 팀과의 협업과 소통을 중요시하며, 서로의
          아이디어를 존중하고 협력하여 프로젝트를 성공적으로 완수하는 것을
          목표로 하고 있습니다. 믿음직한 신입 개발자로서 도움이 되어 든든한
          팀원이 되겠습니다.
        </p>
        <div className="flex items-center self-start mt-2">
          <Link
            href="/"
            target={"_blank"}
            className="flex items-center bg-black text-lime-50 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-lime-50 hover:text-black border-2 border-solid border-transparent hover:border-black"
          >
            이력서
          </Link>
          <Link
            href="/contact"
            className="ml-4 text-lg font-medium text-black underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>

    // 원본
    // <section className="text-center">
    //   <Image
    //     className="mx-auto rounded-full"
    //     src={profileImage}
    //     alt="ProfileImage"
    //     width={250}
    //     height={250}
    //     priority
    //   />
    //   <h2 className="text-3xl font-bold mt-2">{"김세현/Kim Se Hyeon"}</h2>
    //   <h3 className="text-xl font-semibold">Front-end developer</h3>
    //   <p>프론트엔드 개발자를 희망합니다</p>

    //   <Link href="/contact">
    //     <button className="bg-yellow-500 rounded-xl py-1 px-4 mt-2">
    //       Contact Me
    //     </button>
    //   </Link>

    // </section>
  );
}

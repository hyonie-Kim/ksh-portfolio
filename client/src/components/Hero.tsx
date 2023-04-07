import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/IMG_KSH.jpg";
import ContactBtn from "./ContactBtn";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="ProfileImage"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"김세현/Kim Se Hyeon"}</h2>
      <h3 className="text-xl font-semibold">Front-end developer</h3>
      <p>프론트엔드 개발자를 희망합니다</p>

      <Link href="/contact">
        <button className="bg-yellow-500 rounded-xl py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
      <ContactBtn />
    </section>
  );
}

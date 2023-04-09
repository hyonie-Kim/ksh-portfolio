import React from "react";
import Image from "next/image";
import profileImage from "../../../public/images/IMG_KSH.jpg";

type Props = {
  className: string;
  width: number;
  height: number;
};
export default function Profile({ className, width, height }: Props) {
  return (
    <section className={className}>
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="ProfileImage"
        width={width}
        height={height}
        priority
      />
      <div className="text-center">
        <h2 className="text-3xl font-bold mt-2">{"김세현/Kim Se Hyeon"}</h2>
        <h3 className="text-xl font-semibold">Front-end developer</h3>
        {/* <p>프론트엔드 개발자를 희망합니다</p> */}
      </div>
    </section>
  );
}

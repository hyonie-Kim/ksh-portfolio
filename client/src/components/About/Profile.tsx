import React from "react";
import Image from "next/image";
import profileImage from "../../../public/images/IMG_KSH.jpg";
import { AiOutlineUser, AiFillCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
type Props = {
  className: string;
  sizes?: string;
  width: number;
  height: number;
};
export default function Profile({ className, width, height }: Props) {
  return (
    <section className={className}>
      <Image
        className="h-auto rounded-full shadow-2xl mx-auto"
        src={profileImage}
        alt="ProfileImage"
        // sizes="(max-width:768px) 33vw, (max-width:1200px) 33vw, 33vw"
        width={width}
        height={height}
        priority
      />

      {/* <div className="text-center my-4">
        <h2 className="text-3xl font-bold mt-2">{"김세현/Kim Se Hyeon"}</h2>
        <h3 className="text-xl font-semibold">
          <AiOutlineUser className="inline-block" /> Front-end developer
        </h3>
      </div> */}
      <div className="flex my-4">
        <ul className="list-inside mx-auto border-3 leading-relaxed space-y-2 md:space-y-1">
          <li>
            <h2 className="text-3xl font-bold mt-2 md:text-xl">
              {"김세현/Kim Se Hyeon"}
            </h2>
          </li>
          <li>
            <h3 className="text-xl font-semibold flex space-x-3 md:text-base">
              <AiOutlineUser className="inline-block mx-2" />
              Front-end developer
            </h3>
          </li>
          <li>
            <h3 className="text-xl font-semibold flex space-x-3 md:text-base">
              <AiFillCalendar className="inline-block mx-2" /> 1990.11.20
            </h3>
          </li>
          <li>
            <h3 className="text-xl font-semibold flex space-x-3 md:text-base">
              <MdLocationOn className="inline-block mx-2" /> 서울 영등포구 거주
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
}

import ContactForm from "@/components/Contact/ContactForm";
import { Metadata } from "next";
import React from "react";
import { SiTistory, SiGithub } from "react-icons/si";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "김세현에게 메일 보내기",
};

const LINKS = [
  { icon: <SiTistory />, url: "https://sehyeon90.tistory.com/" },
  { icon: <SiGithub />, url: "https://github.com/hyonie-Kim" },
];
export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">📧Contact Me</h2>
      <p>dev.hyonie@gmail.com</p>
      <p>*메일주신 내용에 대해 신속히 회신드리겠습니다.😃</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            className="text-5xl hover:text-yellow-400"
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}

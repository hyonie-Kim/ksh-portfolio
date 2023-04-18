import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "김세현에게 메일 보내기",
};

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">📧Contact Me</h2>
      <p>dev.hyonie@gmail.com</p>
      <p>*메일주신 내용에 대해 신속히 회신드리겠습니다.😃</p>
      {/* <h2 className="text-3xl font-bold my-8">Or Send me an email</h2> */}
      <ContactForm />
    </section>
  );
}

"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/contact";
import AnimatedIcon from "./AnimatedIcon";

type Form = {
  from: string;
  subject: string;
  message: string;
};
const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};
export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    sendContactEmail(form) //
      .then(() => {
        setBanner({
          message: "메일을 성공적으로 발송하였습니다.",
          state: "success",
        });
        setForm(DEFAULT_DATA);
      })
      .catch((error) => {
        setBanner({
          message: "메일전송에 실패 하였습니다. 다시 시도해 주세요.",
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section id="contact">
      <div className="my-12 pb-12 md:pt-16">
        <h1 className="text-center font-bold text-3xl">
          Contact
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col items-center">
          <p>dev.hyonie@gmail.com</p>
          <p>*메일주신 내용에 대해 신속히 회신드리겠습니다.😃</p>
        </div>
        <div className="flex flex-col  space-y-28">
          {banner && <Banner banner={banner} />}
          <form
            onSubmit={onSubmit}
            className="w-full max-w-md flex flex-col my-6 mx-auto p-4 gap-2 bg-slate-700 rounded-xl text-white"
          >
            <label htmlFor="from" className="font-semibold">
              Your Email
            </label>
            <input
              className="text-black"
              type="email"
              id="from"
              name="from"
              required
              value={form.from}
              onChange={onChange}
            />
            <label htmlFor="subject">subject</label>
            <input
              className="text-black"
              type="text"
              id="subject"
              name="subject"
              required
              value={form.subject}
              onChange={onChange}
            />
            <label htmlFor="message">Message</label>
            <textarea
              className="text-black"
              rows={10}
              id="message"
              name="message"
              required
              value={form.message}
              onChange={onChange}
            />
            <button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400">
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

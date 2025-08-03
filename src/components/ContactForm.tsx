'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';
import { sendContactEmail } from '@/service/contact';
import AnimatedIcon from './AnimatedIcon';

type Form = {
  from: string;
  subject: string;
  message: string;
};
const DEFAULT_DATA = {
  from: '',
  subject: '',
  message: '',
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
          message: '메일을 성공적으로 발송하였습니다.',
          state: 'success',
        });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({
          message: '메일전송에 실패 하였습니다. 다시 시도해 주세요.',
          state: 'error',
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section id='contact'>
      <div className='my-12 pb-12 md:pt-16'>
        <h1 className='text-center font-bold text-3xl'>
          Contact
          <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded' />
        </h1>
        <div className='flex flex-col items-center mb-8'>
          <p className='text-lg text-teal-600 font-medium mb-2'>dev.hyonie@gmail.com</p>
          <p className='text-sm text-gray-500'>궁금한 점이나 문의사항이 있으시면 언제든 연락주세요! ✨</p>
        </div>
        <div className='flex flex-col space-y-6'>
          {banner && <Banner banner={banner} />}
          <form
            onSubmit={onSubmit}
            className='w-full max-w-lg mx-auto p-8 bg-gradient-to-br from-white to-teal-50 rounded-2xl shadow-xl border border-teal-100'
          >
            <div className='space-y-6'>
              <div>
                <label htmlFor='from' className='block text-sm font-medium text-gray-700 mb-2'>
                  이메일 주소
                </label>
                <input
                  className='w-full px-4 py-3 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-400 transition-all duration-200 bg-white'
                  type='email'
                  id='from'
                  name='from'
                  required
                  value={form.from}
                  onChange={onChange}
                  placeholder='your.email@example.com'
                />
              </div>
              
              <div>
                <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>
                  제목
                </label>
                <input
                  className='w-full px-4 py-3 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-400 transition-all duration-200 bg-white'
                  type='text'
                  id='subject'
                  name='subject'
                  required
                  value={form.subject}
                  onChange={onChange}
                  placeholder='제목을 입력해주세요'
                />
              </div>
              
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                  메시지
                </label>
                <textarea
                  className='w-full px-4 py-3 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-400 transition-all duration-200 resize-none bg-white'
                  rows={8}
                  id='message'
                  name='message'
                  required
                  value={form.message}
                  onChange={onChange}
                  placeholder='메시지를 입력해주세요'
                />
              </div>
              
              <button 
                type='submit'
                className='w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-teal-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl'
              >
                메시지 보내기
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

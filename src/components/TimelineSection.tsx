'use client';
import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface TimelineItem {
  year: string;
  title: string;
  company?: string;
  description: string;
  type: 'work' | 'education';
}

const timelineData: TimelineItem[] = [
  {
    year: '2020.09',
    title: '방송정보국제교육원',
    company: '웹디자인과 웹퍼블리싱',
    description: '반응형 웹 디자인 및 JQuery 웹퍼블리싱 학습',
    type: 'education'
  },
  {
    year: '2021.08',
    title: '피어나인',
    company: '웹 개발자로 근무',
    description: 'React 기반 웹 개발',
    type: 'work'
  },
  {
    year: '2022.07',
    title: 'AI 양재허브',
    company: '인공지능 웹개발 Track',
    description: 'TensorFlow 기반 인공지능 웹 개발 학습',
    type: 'education'
  },
  {
    year: '2022.10',
    title: '서울시 청년취업사관학교',
    company: '풀스택 웹 개발자 양성 과정',
    description: 'AWS EC2 우분투 환경 구성 및 MySQL, Express.js 백엔드 학습',
    type: 'education'
  },
  {
    year: '2023.05',
    title: '엘리스 SW',
    company: '풀스택 웹 개발자 트랙',
    description: 'Node.js, MongoDB, Gitlab 학습',
    type: 'education'
  },
  {
    year: '2023.08',
    title: '블루앤트',
    company: '웹 개발자로 근무',
    description: 'React 기반 웹 개발',
    type: 'work'
  },
  {
    year: '2024.02',
    title: '한국소프트웨어교육원',
    company: 'Node.JS 기반 개발자 양성훈련과정',
    description: 'C/C++, C# Winform, Python 웹 크롤링 및 데이터 분석/시각화 학습',
    type: 'education'
  },
  {
    year: '2024.08',
    title: '에넥스텔레콤(재직중)',
    company: '풀스택 개발자로 근무',
    description: 'ASP.NET, Classic ASP, Next.js, NestJS 기반 유지보수 및 개발',
    type: 'work'
  }
];

export default function TimelineSection() {
  return (
    <section id="dev-life" className="pt-16 pb-16 md:pb-64 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-60">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Dev Life</h2>
          <p className="text-lg text-gray-600">지금까지의 여정을 한눈에</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 데스크톱 수평 타임라인 */}
        <div className="relative py-8 hidden md:block">
          {/* 수평 타임라인 라인 */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-gray-300 transform -translate-y-1/2"></div>

          {/* 타임라인 아이템들 */}
          <div className="relative flex justify-between items-center px-8">
            {timelineData.map((item, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* 타임라인 포인트 */}
                <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 ${
                  item.type === 'work' ? 'bg-teal-500' : 'bg-blue-500'
                }`}></div>
                
                {/* 아이콘 */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  {item.type === 'work' ? (
                    <FaBriefcase className="text-teal-600 text-xl" />
                  ) : (
                    <FaGraduationCap className="text-blue-600 text-xl" />
                  )}
                </div>

                {/* 점선으로 연결된 콘텐츠 */}
                <div className={`absolute text-center ${
                  index % 2 === 0 ? 'bottom-12' : 'top-12'
                }`}>
                  {/* 상단 카드 (홀수 인덱스) - 점선이 위에 */}
                  {index % 2 === 1 && (
                    <div className={`w-px h-8 mx-auto mb-2 border-l-2 border-dashed ${
                      item.type === 'work' ? 'border-teal-300' : 'border-blue-300'
                    }`}></div>
                  )}
                  
                  {/* 콘텐츠 */}
                  <div className="bg-white rounded-lg shadow-md p-3 w-40 transform hover:scale-105 transition-transform duration-300 mb-2">
                    <div className={`text-lg font-bold mb-1 ${
                      item.type === 'work' ? 'text-teal-600' : 'text-blue-600'
                    }`}>
                      {item.year}
                    </div>
                    <h3 className="text-xs font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    {item.company && (
                      <p className="text-xs text-gray-600 mb-1">
                        {item.company}
                      </p>
                    )}
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* 하단 카드 (짝수 인덱스) - 점선이 아래에 */}
                  {index % 2 === 0 && (
                    <div className={`w-px h-8 mx-auto border-l-2 border-dashed ${
                      item.type === 'work' ? 'border-teal-300' : 'border-blue-300'
                    }`}></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 모바일 수직 타임라인 */}
        <div className="md:hidden px-4">
          <div className="relative">
            {/* 수직 타임라인 라인 */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            {/* 타임라인 아이템들 */}
            <div className="space-y-6">
              {timelineData.map((item, index) => (
                <div key={index} className="flex items-start relative">
                  {/* 타임라인 포인트 */}
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-md z-10 ml-4 mt-2 ${
                    item.type === 'work' ? 'bg-teal-500' : 'bg-blue-500'
                  }`}></div>
                  
                  {/* 아이콘 */}
                  <div className="absolute -top-1 left-4 transform -translate-x-1/2">
                    {item.type === 'work' ? (
                      <FaBriefcase className="text-teal-600 text-sm" />
                    ) : (
                      <FaGraduationCap className="text-blue-600 text-sm" />
                    )}
                  </div>

                  {/* 콘텐츠 */}
                  <div className="ml-6 bg-white rounded-lg shadow-sm p-4 flex-1 transform hover:scale-102 transition-transform duration-300">
                    <div className={`text-base font-bold mb-1 ${
                      item.type === 'work' ? 'text-teal-600' : 'text-blue-600'
                    }`}>
                      {item.year}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    {item.company && (
                      <p className="text-xs text-gray-600 mb-2">
                        {item.company}
                      </p>
                    )}
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
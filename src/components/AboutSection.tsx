// 만약 client 컴포넌트로 전환하려면 파일 최상위에 "use client" 를 추가
'use client';
import React from 'react';
import Image from 'next/image';
import SesacImage from '../../public/images/sesacmile.png';

const skillData = [
  {
    category: '🔧 Frontend',
    items: [
      'Next.js 14 (App Router 중심의 구조 설계 및 SSR 활용)',
      'React (컴포넌트 단위 재사용, Zustand 전역 상태 관리 경험)',
      'TypeScript (props/interface 구조화, 타입 안전한 개발)',
      'JQuery (DOM 조작 및 이벤트 처리)',
    ],
  },
  {
    category: '🛠 Backend',
    items: [
      'NestJS (기존 프로젝트 유지보수 및 API/라우팅 수정 경험)',
      'ASP.NET WebForms / Classic ASP (기존 레거시 유지보수 및 개선)',
    ],
  },
  {
    category: '🗃 Database & Infra',
    items: [
      'MSSQL (기본 쿼리 작성 및 데이터 관리 경험)',
      'Windows Server (IIS 설정, DB 백업 및 접근 권한 관리)',
    ],
  },
  {
    category: '🧠 Collaboration & Tools',
    items: [
      'Git & GitHub (PR 리뷰, 협업 브랜치 전략 사용 경험)',
      'Jira (이슈 트래킹 및 칸반 보드 활용)',
      'ISMS 인증 문서 관리 및 보안 취약점 조치',
      'DBeaver, Postman, Figma (개발 보조 도구 활용 능숙)',
    ],
  },
];

export default function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-3xl">
          Skills & Tech Stack
          {/* About Me */}
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            {/* 왼쪽: Frontend, Backend */}
            {skillData.slice(0, 2).map((category, idx) => (
              <div key={idx} className="mb-6">
                <h2 className="text-xl font-bold mb-2">{category.category}</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="md:w-1/2">
            {/* 오른쪽: Database & Infra, Collaboration & Tools */}
            {skillData.slice(2).map((category, idx) => (
              <div key={idx} className="mb-6">
                <h2 className="text-xl font-bold mb-2">{category.category}</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <Image
              className="hidden md:block md:relative md:bottum-3 md:mx-auto md:z-0 "
              src={SesacImage}
              alt="SesacImage"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

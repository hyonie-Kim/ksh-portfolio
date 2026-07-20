import React from 'react';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiGit,
  SiMysql,
  SiJquery,
  SiDotnet,
  SiNextdotjs,
  SiNestjs,
  SiMicrosoftsqlserver,
  SiJenkins,
  SiTailwindcss,
  SiCplusplus,
  SiCsharp,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTensorflow,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiStyledcomponents,
  SiNodedotjs,
  SiJira,
  SiBitbucket,
  SiWordpress,
  SiPhp,
  SiOracle,
  SiAmazonaws,
  SiYoast,
} from 'react-icons/si';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface CareerItem {
  period: string;
  company: string;
  description: string;
  details?: string;
  skills: Skill[];
  isCurrent?: boolean;
}

export interface LearningItem {
  period: string;
  institution: string;
  description: string;
  skills: Skill[];
}

export const careerItems: CareerItem[] = [
  {
    period: '2026.03 ~ 현재',
    company: '더크루열정적인사람들',
    description: '글로벌 의료기관 웹사이트 개발 및 운영',
    details:
      'WordPress 커스텀 관리자 기능, API 연동, SEO 최적화, AI Search 및 AWS 인프라 운영을 담당하고 있습니다.',
    skills: [
      { name: 'WordPress', icon: <SiWordpress className="w-4 h-4" /> },
      { name: 'PHP', icon: <SiPhp className="w-4 h-4" /> },
      { name: 'JavaScript', icon: <SiJavascript className="w-4 h-4" /> },
      { name: 'SEO', icon: <SiYoast className="w-4 h-4" /> },
      { name: 'Oracle', icon: <SiOracle className="w-4 h-4" /> },
      { name: 'AWS', icon: <SiAmazonaws className="w-4 h-4" /> },
    ],
    isCurrent: true,
  },
  {
    period: '2024.08 ~ 2026.03',
    company: '에넥스텔레콤',
    description: '통신·렌탈 웹 서비스 개발 및 유지보수',
    skills: [
      { name: 'ASP.NET', icon: <SiDotnet className="w-4 h-4" /> },
      { name: 'Classic ASP', icon: <SiDotnet className="w-4 h-4" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" /> },
      { name: 'NestJS', icon: <SiNestjs className="w-4 h-4" /> },
      { name: 'MSSQL', icon: <SiMicrosoftsqlserver className="w-4 h-4" /> },
      { name: 'Jenkins', icon: <SiJenkins className="w-4 h-4" /> },
      { name: 'Git', icon: <SiGit className="w-4 h-4" /> },
    ],
  },
  {
    period: '2023.08 ~ 2023.11',
    company: '블루앤트',
    description: 'React 기반 웹 서비스 개발',
    skills: [
      { name: 'React', icon: <SiReact className="w-4 h-4" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4" /> },
      { name: 'Git', icon: <SiGit className="w-4 h-4" /> },
      { name: 'Jenkins', icon: <SiJenkins className="w-4 h-4" /> },
      { name: 'Jira', icon: <SiJira className="w-4 h-4" /> },
      { name: 'Bitbucket', icon: <SiBitbucket className="w-4 h-4" /> },
    ],
  },
  {
    period: '2021.08 ~ 2022.07',
    company: '피어나인',
    description: 'React 기반 웹 개발',
    skills: [
      { name: 'React', icon: <SiReact className="w-4 h-4" /> },
      { name: 'JavaScript', icon: <SiJavascript className="w-4 h-4" /> },
      { name: 'Styled Components', icon: <SiStyledcomponents className="w-4 h-4" /> },
      { name: 'Git', icon: <SiGit className="w-4 h-4" /> },
    ],
  },
  {
    period: '2021.02 ~ 2021.06',
    company: '라이브러리티이',
    description: 'SNS 콘텐츠 운영',
    skills: [
      { name: 'Photoshop', icon: <SiAdobephotoshop className="w-4 h-4" /> },
      { name: 'Illustrator', icon: <SiAdobeillustrator className="w-4 h-4" /> },
    ],
  },
];

export const learningItems: LearningItem[] = [
  {
    period: '2024.11 ~ 2024.12',
    institution: '러닝스푼즈 · 강남',
    description:
      '간편결제 PO에게 배우는 백오피스 — 백엔드 기획서 작성 및 DB 설계도 작성법 학습',
    skills: [
      { name: 'DB 설계', icon: <SiMicrosoftsqlserver className="w-4 h-4" /> },
    ],
  },
  {
    period: '2024.02 ~ 2024.07',
    institution: '한국소프트웨어교육원',
    description: 'C/C++, C# Winform, Python 웹 크롤링 및 데이터 분석·시각화 학습',
    skills: [
      { name: 'C/C++', icon: <SiCplusplus className="w-4 h-4" /> },
      { name: 'C# Winform', icon: <SiCsharp className="w-4 h-4" /> },
      { name: 'Python', icon: <SiPython className="w-4 h-4" /> },
      { name: 'Git', icon: <SiGit className="w-4 h-4" /> },
    ],
  },
  {
    period: '2023.05 ~ 2023.08',
    institution: '엘리스 SW',
    description: 'Node.js, MongoDB, GitLab 기반 웹 개발 학습',
    skills: [
      { name: 'React', icon: <SiReact className="w-4 h-4" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-4 h-4" /> },
      { name: 'JavaScript', icon: <SiJavascript className="w-4 h-4" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="w-4 h-4" /> },
      { name: 'Express.js', icon: <SiExpress className="w-4 h-4" /> },
      { name: 'MongoDB', icon: <SiMongodb className="w-4 h-4" /> },
      { name: 'Git', icon: <SiGit className="w-4 h-4" /> },
    ],
  },
  {
    period: '2022.10 ~ 2023.04',
    institution: '서울시 청년취업사관학교',
    description: 'AWS EC2 기반 웹 개발 구성 및 MySQL, Express.js 백엔드 학습',
    skills: [
      { name: 'React', icon: <SiReact className="w-4 h-4" /> },
      { name: 'Express.js', icon: <SiExpress className="w-4 h-4" /> },
      { name: 'MySQL', icon: <SiMysql className="w-4 h-4" /> },
      { name: 'Git', icon: <SiGit className="w-4 h-4" /> },
    ],
  },
  {
    period: '2022.07 ~ 2022.08',
    institution: 'AI 양재허브',
    description: 'TensorFlow 기반 인공지능 웹 개발 학습',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow className="w-4 h-4" /> },
      { name: 'React', icon: <SiReact className="w-4 h-4" /> },
    ],
  },
  {
    period: '2020.09 ~ 2021.01',
    institution: '방송정보국제교육원',
    description: '반응형 웹 디자인 및 jQuery 웹 퍼블리싱 학습',
    skills: [
      { name: 'HTML', icon: <SiHtml5 className="w-4 h-4" /> },
      { name: 'CSS', icon: <SiCss3 className="w-4 h-4" /> },
      { name: 'JavaScript', icon: <SiJavascript className="w-4 h-4" /> },
      { name: 'jQuery', icon: <SiJquery className="w-4 h-4" /> },
      { name: 'Git', icon: <SiGit className="w-4 h-4" /> },
    ],
  },
];

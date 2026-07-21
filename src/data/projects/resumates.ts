import { ProjectDetail } from '@/types/project';

export const resumatesDetail: ProjectDetail = {
  slug: 'Resumates',
  title: 'Resumates (이력서 작성 플랫폼)',
  subtitle: '풀스택 · 팀 프로젝트',
  type: 'team',
  layout: 'compact',
  company: '한국소프트웨어교육원 Node.JS 양성과정',
  period: '2024.06.20 ~ 2024.07.24',
  role: '풀스택 개발 (프론트엔드 · 백엔드)',
  teamSize: '2인',
  contribution: 'React UI 구현, Express API 구축, MongoDB 설계 및 배포',
  summary:
    '3가지 템플릿으로 개인 맞춤형 이력서를 쉽고 빠르게 작성할 수 있는 온라인 플랫폼',
  thumbnail: '/images/projects/Resumates.png',
  heroImage: '/images/projects/Resumates.png',
  techStack: [
    'React 18',
    'Styled Components',
    'Axios',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'JWT',
    'Nodemailer',
  ],
  links: {
    live: 'https://resumates.vercel.app/',
    github: 'https://github.com/Resumates/Resumates',
  },
  overview: {
    background:
      'Resumates(Resume + Mates)는 3가지 템플릿을 제공하고, 개인 맞춤형 이력서를 쉽고 빠르게 작성할 수 있는 온라인 플랫폼입니다.\n\n한국소프트웨어교육원 Node.JS 양성과정 2인 팀 프로젝트에서 풀스택 개발을 담당했습니다. React 기반 UI, Express.js RESTful API, MongoDB 스키마 설계, Vercel·Render 배포까지 진행했습니다.',
  },
  improvements: [
    '3가지 이력서 템플릿(Simple, Normal, Casual) 제공',
    '실시간 미리보기 기반 이력서 작성 UI 구현',
    'JWT·bcrypt 기반 회원 인증 시스템 구축',
    '프로필 이미지 업로드·크롭 및 PDF 다운로드',
    'Nodemailer 이메일 발송 기능',
    '이력서 작성·수정·삭제 및 마이페이지 기능',
  ],
  contributions: [
    '2인 팀 프로젝트에서 풀스택 개발 담당',
    'React·Styled Components 기반 컴포넌트 UI 구현',
    'Express.js RESTful API 및 MongoDB 스키마 설계',
    'JWT 인증·파일 업로드·PDF·이메일 기능 구현',
    'Vercel(Frontend)·Render(Backend) 클라우드 배포',
  ],
  highlights: {
    role: '풀스택 개발 (프론트엔드 · 백엔드)',
    challenge: '템플릿부터 PDF·이메일까지 이어지는 이력서 작성 플로우',
    outcome: '실시간 미리보기·PDF 다운로드를 갖춘 풀스택 플랫폼 구현',
  },
  challenge: [],
  solution: [],
  caseStudies: [
    {
      id: 'resume-writer',
      title: '템플릿 기반 이력서 작성·미리보기·PDF',
      summary:
        '템플릿 선택부터 실시간 미리보기, PDF 다운로드·이메일 발송까지 이어지는 이력서 작성 플로우를 풀스택으로 구현했습니다.',
      afterImage: {
        src: '/images/projects/Resumates.png',
        alt: 'Resumates 이력서 작성 플랫폼 화면',
        caption: '템플릿 기반 이력서 작성 및 미리보기 화면',
      },
      background:
        '이력서 작성이 템플릿 선택부터 출력까지 분산되어 초보자도 빠르게 완성하기 어려웠습니다. 템플릿 기반 작성 UI와 실시간 미리보기, PDF 다운로드·이메일 발송까지 한 흐름으로 연결했습니다.',
      improvements: [
        '3가지 템플릿 선택 및 작성 폼 구현',
        '작성과 동시 확인 가능한 실시간 미리보기',
        '완성 이력서 PDF 다운로드',
        'Nodemailer 이메일 알림 발송',
      ],
      keyImplementations: [
        'React 컴포넌트·Context API 전역 상태 관리',
        'Express.js RESTful API 및 MongoDB CRUD',
        'Multer·React Easy Crop 이미지 업로드·크롭',
        'JWT·bcrypt 인증 및 Axios API 통신',
      ],
      results: [
        '템플릿부터 출력까지 이어지는 이력서 작성 UX 제공',
        '실무 수준의 풀스택 웹 애플리케이션 구현',
        '팀 협업을 통한 기능 기획·개발·배포 경험',
      ],
    },
  ],
  outcomes: {},
};

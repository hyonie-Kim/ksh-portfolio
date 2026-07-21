import { ProjectDetail } from '@/types/project';

export const ollacareDetail: ProjectDetail = {
  slug: 'ollacare',
  title: 'Oallacare - 비대면 진료 의료 서비스',
  subtitle: '프론트엔드 · 디지털 헬스케어',
  type: 'work',
  layout: 'compact',
  company: '블루앤트',
  period: '2023.08 ~ 2023.10',
  role: '프론트엔드 개발',
  teamSize: '프론트엔드 단독 구현',
  contribution: '기획 요구사항에 맞춘 UI 개선 및 서비스 기능 개발',
  summary:
    '비대면 진료·약 배송·심리 상담을 제공하는 디지털 헬스케어 플랫폼의 프론트엔드 개발',
  thumbnail: '/images/projects/ollacare.png',
  heroImage: '/images/projects/ollacare.png',
  techStack: [
    'Next.js 13',
    'React',
    'TypeScript',
    'JavaScript',
    'React Hook Form',
    'Zustand',
    'SWR',
    'Styled-Components',
    'Vanilla Extract',
  ],
  links: {
    live: 'https://ollacare.com/',
  },
  overview: {
    background:
      '올라케어는 국내 비대면 진료, 약 배송, 심리 상담 서비스를 제공하는 의료 전문 디지털 헬스케어 플랫폼입니다.\n\n프론트엔드 팀에서 제공한 기반 코드를 바탕으로 기획 요구사항에 맞춘 UI 개선과 서비스 기능을 단독 구현했습니다. 이벤트 페이지와 상담 예약 페이지를 중심으로 작업했습니다.',
  },
  improvements: [
    'Next.js 12 기반 레거시 코드를 Next.js 13으로 마이그레이션',
    '웹사이트 UI 개선 및 서비스 기능 개발',
    '매달 진행되는 이벤트 페이지 기획→퍼블리싱',
    '심리/해석 상담 예약 서비스 개선',
    '반응형 UI 및 크로스 브라우징 대응',
    'React Hook Form 기반 폼 상태 관리 및 유효성 검증',
  ],
  contributions: [
    '프론트엔드 기반 코드를 활용한 기획 요구사항 단독 구현',
    'Next.js 12 → 13 마이그레이션으로 구조 개선',
    '이벤트 페이지 반복 배포 및 빠른 기획 대응',
    '상담 예약 서비스 개선을 통한 사용자 편의성 증대',
    'Swagger 기반 백엔드 API 연동 및 기획팀 협업',
  ],
  highlights: {
    role: '프론트엔드 개발',
    challenge: '단기간 기획 변경에 맞춘 UI·기능 빠른 반영',
    outcome: 'Next.js 마이그레이션 및 상담 예약·이벤트 페이지 개선',
  },
  challenge: [],
  solution: [],
  caseStudies: [],
  outcomes: {},
};

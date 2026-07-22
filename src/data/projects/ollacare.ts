import { ProjectDetail } from '@/types/project';

export const ollacareDetail: ProjectDetail = {
  slug: 'ollacare',
  title: 'Oallacare - 비대면 진료 의료 서비스',
  subtitle: '프론트엔드 · 디지털 헬스케어',
  type: 'work',
  layout: 'compact',
  company: '블루앤트',
  period: '2023.08 ~ 2023.10',
  role: '담당 기능 단독 구현 및 서비스 기능 개발',
  teamSize: '프론트엔드 6명',
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
  caseStudies: [
    {
      id: 'counseling-reservation-v2',
      title: '심리/해석 상담 예약 서비스 V2 개선',
      summary:
        '상담 가능 일정을 실시간 조회하는 예약 시스템을 구축하고, 날짜·시간 선택부터 본인인증까지 이어지는 예약 프로세스를 개선하여 사용자 경험과 예약 정확성을 향상시켰습니다.',
      afterImage: {
        src: '/images/projects/ollacare_consol.png',
        alt: '심리/해석 상담 예약 서비스 V2 화면 스케치',
        caption: '상담 예약 플로우 화면 스케치',
        label: '화면 스케치',
        type: 'diagram',
      },
      background:
        '기존 상담 예약 서비스는 상담 가능 시간 확인과 예약 과정이 직관적이지 않아 사용자가 예약 가능한 일정을 확인하기 어려웠습니다.\n\n예약 프로세스를 개선하여 상담 가능 날짜·시간을 실시간으로 조회하고, 본인인증 이후 예약까지 자연스럽게 이어지는 예약 플로우를 구현했습니다.',
      improvements: [
        '상담 예약 V2 플로우 구현',
        '캘린더 기반 상담 가능 날짜 조회 기능 개발',
        '예약 가능 시간(Time Slot) 동적 생성 및 상태 제어',
        'React Hook Form 기반 예약 폼 관리',
        'Swagger API 연동을 통한 예약 데이터 조회 및 신청',
        '본인인증과 예약 프로세스 연계',
      ],
      keyImplementations: [
        'Next.js 13 기반 상담 예약 페이지 개발',
        '상담 유형 및 상담사 정보를 URL Parameter로 전달',
        'SWR을 활용한 상담 가능 일정 실시간 조회(REST API·Swagger 연동)',
        'Dynamic Calendar로 선택한 날짜에 따라 예약 가능 시간 목록 동적 렌더링',
        '예약 완료·상담 불가 시간 비활성화 및 날짜 변경 시 시간 슬롯 자동 갱신',
        'React Hook Form 기반 예약 정보·상태 관리 및 UX 개선',
        '예약 신청 후 본인인증 및 결제 단계 연동',
        'API 실패 및 Invalid 데이터 예외 처리',
      ],
      results: [
        '상담 예약 과정을 단계별로 구성하여 사용자 경험 개선',
        '상담 가능 시간을 실시간으로 제공하여 예약 오류 감소',
        '예약 가능한 시간만 선택하도록 하여 잘못된 예약 방지',
        'API 기반 구조로 상담 일정 변경 시 별도 배포 없이 즉시 반영',
      ],
    },
    {
      id: 'event-page-responsive',
      title: '이벤트 페이지 퍼블리싱 및 반응형 UI 개발',
      summary:
        '매월 진행되는 프로모션·건강 캠페인 이벤트 페이지를 기획 일정에 맞춰 제작하고, PC·Mobile에서 동일한 경험을 제공하는 반응형 UI를 구현했습니다.',
      images: [
        {
          src: '/images/projects/ollacare_02.png',
          alt: '올라케어 PC·모바일 반응형 이벤트 페이지 화면',
          caption: 'PC / Mobile 반응형 이벤트·메인 페이지 UI',
        },
        {
          src: '/images/projects/ollacare_03.png',
          alt: '올라케어 이벤트 페이지 Figma 디자인 화면',
          caption: '디자이너 Figma UI 기반으로 이벤트 페이지 퍼블리싱',
          label: 'Figma 디자인',
          type: 'diagram',
        },
      ],
      background:
        '매월 진행되는 프로모션 및 건강 캠페인 이벤트 페이지를 기획 일정에 맞춰 제작했습니다.\n\n디자이너와 Figma를 기반으로 협업하며 PC와 Mobile 환경 모두에서 동일한 사용자 경험을 제공할 수 있도록 반응형 웹을 구현했습니다.',
      improvements: [
        '이벤트 페이지 퍼블리싱',
        '메인 페이지 이벤트 섹션 개발',
        'PC / Tablet / Mobile 반응형 웹 구현',
        'Figma 기반 디자인 구현',
        '컴포넌트 재사용 구조 적용',
        '크로스 브라우징 대응',
      ],
      keyImplementations: [
        'Next.js 13 · React · TypeScript 기반 이벤트 페이지 개발',
        'SCSS를 활용한 반응형 UI 구현',
        'Figma 디자인 기반 퍼블리싱 및 디자인 QA 반영',
        '재사용 가능한 이벤트·메인 섹션 컴포넌트 구조 적용',
        '기획 변경사항에 맞춘 월별 이벤트 페이지 반복 배포',
        '크로스 브라우징 대응 및 디자인 디테일 개선',
      ],
      results: [
        '월별 이벤트 페이지를 빠르게 제작 및 배포',
        '디자이너와의 협업을 통해 디자인 품질 유지',
        '반응형 UI 적용으로 다양한 디바이스에서 일관된 사용자 경험 제공',
      ],
    },
  ],
  outcomes: {},
};

import { ProjectDetail } from '@/types/project';

export const amobileDetail: ProjectDetail = {
  slug: 'amobile',
  title: '에이모바일 - 통신 서비스 플랫폼',
  subtitle: '고객용 · 알뜰폰(MVNO)',
  type: 'work',
  layout: 'compact',
  company: '에넥스텔레콤',
  period: '2024.08 ~ 2026.03',
  role: '고객용 웹사이트 유지보수 및 기능 개발',
  teamSize: '개발팀 2명',
  contribution: '요금제 가입·마이페이지·개통페이지 분석, 기능 수정 및 운영 지원',
  summary:
    '알뜰폰(MVNO) 요금제 가입·마이페이지(ASP.NET)와 USIM 개통페이지(Next.js·NestJS)를 운영하는 고객용 통신 서비스 사이트',
  thumbnail: '/images/projects/amobile.png',
  heroImage: '/images/projects/amobile.png',
  techStack: [
    'ASP.NET Web Forms',
    'C#',
    'MS SQL Server',
    'Next.js',
    'NestJS',
    'TypeScript',
    'HTML5',
    'CSS3',
    'JavaScript',
    'IIS',
  ],
  links: {
    live: 'https://www.amobile.co.kr/',
  },
  overview: {
    background:
      '에이모바일은 알뜰폰(MVNO) 통신 서비스를 제공하는 고객용 웹사이트입니다. 요금제 가입·마이페이지는 ASP.NET Web Forms, USIM 개통페이지는 Next.js·NestJS로 각각 구성되어 있습니다.\n\n모바일·웹 반응형 사이트와 관리자 페이지의 유지보수 및 기능 개선을 담당했으며, 운영 중 발생하는 이슈를 처리했습니다.',
  },
  improvements: [
    'ASP.NET Web Forms 기반 요금제 가입·마이페이지 유지보수 및 기능 개선',
    'Next.js·NestJS 기반 개통페이지 유지보수 및 기능 개선',
    '모바일·웹 반응형 사이트 관리 및 운영',
    '관리자 페이지 유지보수 및 운영 이슈 처리',
    'SQL Query 작성 및 데이터 조회 로직 개선',
    '운영 이슈 대응 및 기획·영업 요청사항 반영',
  ],
  contributions: [
    '레거시 ASP.NET과 Next.js·NestJS 혼합 스택 고객용 사이트 운영',
    '요금제 가입·마이페이지·개통페이지 기능 개선',
    '모바일·웹 반응형 UI 유지보수',
    '관리자 페이지 운영 이슈 신속 대응',
    '유관 부서 협업 및 요구사항 반영',
  ],
  highlights: {
    role: '고객용 웹사이트 유지보수 및 기능 개발',
    challenge: 'Web Forms·Next.js 혼합 스택 및 개통 프로세스 운영',
    outcome: '가입·마이페이지·개통페이지 기능 개선',
  },
  challenge: [],
  solution: [],
  caseStudies: [
    {
      id: 'plan-signup-mypage',
      title: '요금제 가입·마이페이지(ASP.NET Web Forms)',
      summary:
        'ASP.NET Web Forms 기반 요금제 선택·가입과 마이페이지(내 요금제 조회, 개인정보 관리) 기능을 유지보수·개선했습니다.',
      afterImage: {
        src: '/images/projects/amobile.png',
        alt: '에이모바일 웹사이트 화면',
        caption: '요금제 가입 및 고객용 서비스 화면',
      },
      background:
        '에이모바일 고객용 사이트의 핵심 기능인 요금제 가입과 마이페이지는 ASP.NET Web Forms로 구현되어 있습니다. 요금제 선택·가입 흐름과 내 요금제 조회, 개인정보 관리 기능에서 운영 이슈와 개선 요청이 지속적으로 발생했습니다.\n\n기존 코드 구조를 분석하고 Master Page·User Control 패턴을 활용해 안정적으로 유지보수했습니다.',
      improvements: [
        '요금제 선택·가입 프로세스 개선',
        '내 요금제 조회 기능 수정',
        '개인정보 관리 페이지 유지보수',
        '모바일·웹 반응형 UI 개선',
      ],
      keyImplementations: [
        'ASP.NET Web Forms 코드비하인드(.aspx.cs) 분석 및 수정',
        'Master Page·User Control 기반 레이아웃 유지보수',
        'SQL Server 쿼리 수정 및 데이터 검증',
        'JavaScript/jQuery 클라이언트 로직 개선',
      ],
      results: [
        '요금제 가입 프로세스 안정화',
        '마이페이지 사용성 개선',
        '모바일·웹 반응형 화면 운영 안정화',
      ],
    },
    {
      id: 'usim-activation',
      title: 'USIM 개통페이지(Next.js/NestJS)',
      summary:
        'Next.js·NestJS 기반 USIM 개통 신청, 개통 상태 조회, 개통 완료 처리 기능을 유지보수·개선했습니다.',
      afterImage: {
        src: '/images/projects/auth_amobile.png',
        alt: '에이모바일 USIM 개통페이지 화면',
        caption: '가입정보 기입 · USIM 개통 신청 화면',
      },
      background:
        'USIM 개통페이지는 Next.js 프론트엔드와 NestJS 백엔드로 구성된 고객용 개통 서비스입니다. 개통 신청부터 상태 조회, 완료 처리까지의 흐름에서 운영 이슈와 기능 개선 요청이 발생했습니다.\n\nAPI 연동 구간과 프론트엔드 UI를 분석하고, 개통 프로세스 전반을 안정적으로 개선했습니다.',
      improvements: [
        'USIM 개통 신청 기능 유지보수',
        '개통 상태 조회 로직 개선',
        '개통 완료 처리 프로세스 수정',
        '모바일·웹 반응형 UI 개선',
      ],
      keyImplementations: [
        'Next.js 페이지·컴포넌트 수정',
        'NestJS API 연동 및 비즈니스 로직 개선',
        '개통 상태 조회·완료 처리 흐름 유지보수',
        'SQL Server 연동 데이터 조회·검증',
      ],
      results: [
        '개통 신청·조회·완료 처리 흐름 안정화',
        'Next.js·NestJS 기반 기능 개선 경험',
        '운영 이슈 신속 대응으로 서비스 연속성 확보',
      ],
    },

    {
      id: 'auth-usim-validation',
      title: '본인인증(Auth) 및 USIM 검증 프로세스 개선(Next.js/NestJS)',
      summary:
        '쿠콘(KCB) 본인인증 API와 LG U+ USIM Validation API를 연동하여 온라인·셀프 개통의 본인인증 및 유심 검증 프로세스를 개선했습니다.',
      afterImage: {
        src: '/images/projects/auth_amobile.drawio.png',
        alt: '에이모바일 본인인증·USIM 검증 화면',
        caption: '본인인증 및 USIM 검증 프로세스 화면',
      },
      background:
        '온라인·셀프 개통 과정에서 주민등록증·운전면허증 진위 확인과 USIM 검증을 통해 고객 인증을 수행하고 있습니다.\n\n기존 운전면허증 인증은 구버전 API를 사용하고 있었으며, 불필요한 고유식별번호 입력이 필요했습니다. 또한 LG U+ USIM은 개통 전에 유효성을 확인하지 않아 잘못된 USIM으로 인해 개통 실패가 발생하는 사례가 있었습니다.\n\n이에 최신 인증 API를 적용하고, 개통 전 USIM Validation 기능을 추가하여 인증 절차와 개통 안정성을 개선했습니다.',
      improvements: [
        '쿠콘(KCB) 운전면허증 인증 API V3 적용',
        '운전면허증 고유식별번호 입력 UI 제거',
        'LG U+ USIM Validation API(V1) 연동',
        '온라인/셀프 개통 공통 인증 프로세스 개선',
        '인증 및 USIM 검증 예외 처리 강화',
      ],
      keyImplementations: [
        'NestJS 기반 본인인증 API 연동 로직 개선',
        '쿠콘 운전면허증 인증 API V3 적용',
        'LG U+ ValidateUsim API 연동 및 유심 종류별 분기 처리',
        'KT 유심은 기존 프로세스를 유지하고 LG U+만 Validation 수행',
        'API 응답(Result, ResultCd, ResultMsg) 기반 공통 예외 처리',
        '사전체크(DB 등록) 로직 리팩토링 및 중복 코드 제거',
        '개인정보(CI, 주민등록번호, 이름 등) 암호화 후 인증 API 호출',
      ],
      results: [
        '운전면허증 인증 절차 단순화로 사용자 입력 부담 감소',
        '최신 인증 API 적용으로 운영 안정성 향상',
        '개통 전 LG U+ USIM 검증으로 개통 실패 예방',
        '인증 오류 메시지 표준화로 장애 대응 효율 향상',
        '인증 및 개통 프로세스 공통화로 유지보수성 향상',
      ],
    },
  ],
  outcomes: {},
};

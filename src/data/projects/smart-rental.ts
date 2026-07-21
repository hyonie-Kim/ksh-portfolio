import { ProjectDetail } from '@/types/project';

export const smartRentalDetail: ProjectDetail = {
  slug: 'smartRental',
  title: '스마트렌탈',
  subtitle: '고객용 · 렌탈 쇼핑몰',
  type: 'work',
  layout: 'compact',
  company: '에넥스텔레콤',
  period: '2024.08 ~ 2026.03',
  role: '고객용 쇼핑몰 유지보수 및 기능 개발',
  teamSize: '개발팀 2명',
  contribution: 'PC·모바일 고객용 렌탈 쇼핑몰 분석, 기능 수정 및 운영 지원',
  summary:
    'PC·모바일 각각 운영되는 적응형 렌탈 쇼핑몰. 신용등급에 따라 렌탈 가능 상품이 달라집니다.',
  thumbnail: '/images/projects/smartRental.png',
  heroImage: '/images/projects/smartRental.png',
  techStack: [
    'ASP.NET Web Forms',
    'C#',
    'MS SQL Server',
    'HTML5',
    'CSS3',
    'JavaScript',
    'jQuery',
    'IIS',
  ],
  links: {
    live: 'https://www.smartrental.co.kr/',
  },
  overview: {
    background:
      '스마트렌탈은 가전·가구 렌탈 상품을 고객이 조회하고 가입·신청하는 고객용 Web 쇼핑몰입니다. PC용·모바일용 사이트가 각각 별도 프로젝트로 운영되는 적응형 구조입니다.\n\n외부 신용정보사(NICE, 롯데) 연동을 통해 신용등급을 조회하며, 등급에 따라 렌탈 가능 상품이 달라집니다. 쇼핑몰 화면 유지보수, 가입 프로세스·신용 연동 로직 개선을 담당했습니다.',
  },
  improvements: [
    'PC·모바일 고객용 쇼핑몰 화면 유지보수 및 기능 개선',
    '렌탈 가입서 작성·신청 프로세스 개선',
    '외부 신용정보사(NICE, 롯데) 연동 로직 유지보수 및 개선',
    '신용등급별 렌탈 가능 상품 로직 수정',
    '상품·카테고리 페이지 개발 및 수정',
    '운영 이슈 대응 및 기획·영업 요청사항 반영',
  ],
  contributions: [
    'PC·모바일 고객용 렌탈 쇼핑몰 안정적 운영 및 유지보수',
    '신용등급 연동·가입서 로직 개선',
    '레거시 ASP.NET Web Forms 기반 고객용 사이트 개발 경험',
    '유관 부서(기획·디자인·영업) 협업 및 요청사항 반영',
    '운영 중 발생 이슈 신속 대응',
  ],
  highlights: {
    role: '고객용 쇼핑몰 유지보수 및 기능 개발',
    challenge: 'PC·모바일 분리 운영 및 신용등급 연동 가입 로직',
    outcome: '가입 프로세스·신용 연동·렌탈 가능 상품 로직 개선',
  },
  challenge: [],
  solution: [],
  caseStudies: [
    {
      id: 'adaptive-rental-mall',
      title: 'PC·모바일 적응형 렌탈 쇼핑몰 운영',
      summary:
        'PC용·모바일용 사이트를 각각 운영하며, 기기별 렌탈 쇼핑몰 화면과 가입 흐름을 유지보수·개선했습니다.',
      afterImage: {
        src: '/images/projects/smartRental.png',
        alt: '스마트렌탈 렌탈 쇼핑몰 화면',
        caption: '가전·가구 렌탈 상품 조회 및 가입 화면',
      },
      background:
        '스마트렌탈은 PC·모바일 각각 별도 프로젝트로 구성된 적응형 렌탈 쇼핑몰입니다. 상품 조회, 렌탈 가입서 작성, 게시판 등 고객용 기능의 운영 이슈와 개선 요청이 지속적으로 발생했습니다.\n\n기존 코드 구조를 분석하고 Master Page·User Control 패턴을 활용해 PC·모바일 각각 안정적으로 유지보수했습니다.',
      improvements: [
        'PC·모바일 상품·카테고리 페이지 개선',
        '렌탈 가입서 작성·신청 흐름 수정',
        'ListView/GridView 기반 데이터 출력 개선',
        '게시판 및 안내 페이지 유지보수',
      ],
      keyImplementations: [
        'ASP.NET Web Forms 코드비하인드(.aspx.cs) 분석 및 수정',
        'PC·모바일 각 프로젝트별 레이아웃·컴포넌트 유지보수',
        'SQL Server 쿼리 수정 및 데이터 검증',
        'JavaScript/jQuery 클라이언트 로직 개선',
      ],
      results: [
        'PC·모바일 고객용 렌탈 가입 프로세스 안정화',
        '기기별 상품·카테고리 페이지 사용성 개선',
        '운영 이슈 신속 대응으로 서비스 연속성 확보',
      ],
    },
    {
      id: 'credit-rating-integration',
      title: '신용등급 연동 및 렌탈 가입서 로직 개선',
      summary:
        '외부 신용정보사(NICE, 롯데) 연동으로 신용등급을 조회하고, 등급에 따라 렌탈 가능 상품이 달라지는 로직을 유지보수·개선했습니다.',
      background:
        '렌탈 가입 시 고객 신용등급에 따라 렌탈 가능 상품이 달라지는 핵심 비즈니스 로직입니다. NICE·롯데 등 외부 신용정보사 API 연동 구간에서 운영 이슈와 정책 변경에 따른 수정 요청이 발생했습니다.\n\n연동 요청·응답 처리, 등급별 렌탈 가능 상품 판별·필터링 로직을 분석하고 안정적으로 개선했습니다.',
      improvements: [
        'NICE·롯데 신용정보사 연동 로직 유지보수',
        '신용등급별 렌탈 가능 상품 판별·필터링 로직 개선',
        '등급 조회 후 렌탈 가능 상품 분기 처리 수정',
        '연동 오류 및 예외 케이스 처리 보완',
      ],
      keyImplementations: [
        '외부 신용정보사 API 연동 코드 분석 및 수정',
        '신용등급 조회 결과 기반 렌탈 가능 상품 판별 로직 개선',
        '등급별 상품 분기·필터링 프로세스 유지보수',
        'SQL Server 연동 데이터 조회·검증',
      ],
      results: [
        '신용등급 연동 구간 안정성 향상',
        '등급별 렌탈 가능 상품 정책 변경 신속 반영',
        '렌탈 가능 상품 판별 흐름 개선',
      ],
    },
  ],
  outcomes: {},
};

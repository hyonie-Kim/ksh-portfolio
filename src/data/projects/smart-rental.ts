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
        src: '/images/projects/smartRental_edit.png',
        alt: '스마트렌탈 회원가입 약관동의·정보입력 수정 화면',
        caption: '약관 동의 체크박스·문구 수정 및 마케팅 동의 항목 추가',
      },
      background:
        '스마트렌탈은 PC·모바일 각각 별도 프로젝트로 구성된 적응형 렌탈 쇼핑몰입니다. 상품 조회, 렌탈 가입서 작성, 게시판 등 고객용 기능의 운영 이슈와 개선 요청이 지속적으로 발생했습니다.\n\n약관 문구·체크박스처럼 작은 수정이라도 변경 내용을 문서화해 유관 부서가 공유할 수 있도록 했고, Master Page·User Control 패턴을 활용해 PC·모바일 각각 안정적으로 유지보수했습니다.',
      improvements: [
        'PC·모바일 상품·카테고리 페이지 개선',
        '렌탈 가입서 작성·신청 흐름 수정',
        '약관 동의 체크박스 기본값 해제 및 고객 직접 선택 방식으로 개선',
        '이벤트/광고/마케팅 동의(선택) 항목 추가 및 안내 문구 수정',
        '수정사항 문서화로 유관 부서 공유',
        '게시판 및 안내 페이지 유지보수',
      ],
      keyImplementations: [
        'ASP.NET Web Forms 코드비하인드(.aspx.cs) 분석 및 수정',
        'PC·모바일 각 프로젝트별 레이아웃·컴포넌트 유지보수',
        '약관·체크박스 등 UI 문구·로직 변경 내역 문서화',
        'SQL Server 쿼리 수정 및 데이터 검증',
        'JavaScript/jQuery 클라이언트 로직 개선',
      ],
      results: [
        'PC·모바일 고객용 렌탈 가입 프로세스 안정화',
        '기기별 상품·카테고리 페이지 사용성 개선',
        '수정사항 공유로 유관 부서 커뮤니케이션 효율 향상',
        '운영 이슈 신속 대응으로 서비스 연속성 확보',
      ],
    },
    {
      id: 'credit-rating-integration',
      title: '신용등급 연동 및 렌탈 가입서 로직 개선',
      summary:
        '외부 신용정보사(NICE, 롯데) 연동으로 신용등급을 조회하고, 등급에 따라 렌탈 가능 상품이 달라지는 로직을 유지보수·개선했습니다.',
      images: [
        {
          src: '/images/projects/smartRental_api.drawio.png',
          alt: '렌탈 계약번호 생성 프로세스 플로우차트',
          caption: '렌탈 계약번호 생성 및 기본 고객 정보 처리 흐름',
          label: '렌탈 계약번호 생성 프로세스',
          type: 'diagram',
        },
        {
          src: '/images/projects/smartRental_api_02.drawio.png',
          alt: '신용점수 기반 신용등급 결정 및 렌탈 구매 여부 판별 플로우차트',
          caption: '신용점수 → 신용등급 변환 및 렌탈 구매 여부 결정 흐름',
          label: '신용등급 결정 및 렌탈 구매 여부 프로세스',
          type: 'diagram',
        },
      ],
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
    {
      id: 'safekey-credit-auth',
      title: '세이프키(SafeKey) 기반 본인인증 및 신용조회 프로세스 개선',
      summary:
        '세이프키 발급(SMS)과 NICE 신용조회를 연계하여 본인인증과 신용조회가 정상적으로 이루어질 수 있도록 인증 프로세스를 유지보수하고 검증 로직을 개선했습니다.',
      images: [
        {
          src: '/images/projects/smartRental.drawio.png',
          alt: '스마트렌탈 세이프키 본인인증 화면',
          caption: '세이프키 발급·인증 및 NICE 신용조회 화면',
        },
        {
          src: '/images/projects/smartRental_flow.drawio.png',
          alt: '본인인증 및 신용조회 프로세스 플로우차트',
          caption: '본인인증 및 신용조회 프로세스 흐름',
          label: '인증 프로세스',
          type: 'diagram',
        },
        {
          src: '/images/projects/smartRental_02.drawio.png',
          alt: '스마트렌탈 세이프키 신용조회 화면',
          caption: '세이프키 신용조회 입력·동의·조회 화면',
        },
        {
          src: '/images/projects/smartRental_flow_02drawio.png',
          alt: '세이프키 SMS 발급 활성화 플로우차트',
          caption: '세이프키 SMS 발급 활성화 흐름',
          label: '세이프키 SMS 발급 활성화 프로세스',
          type: 'diagram',
        },
      ],
      background:
        '렌탈 가입 시 NICE 신용조회를 수행하기 위해서는 고객이 먼저 세이프키(SafeKey)를 발급받아 입력하는 인증 절차가 필요했습니다.\n\n운영 과정에서 세이프키 미발급, 인증번호 불일치, 동의 누락 등으로 인해 신용조회가 실패하는 사례가 발생하였고, NICE API 호출 이전 단계에서 다양한 검증과 예외 처리가 요구되었습니다.\n\n기존 코드를 분석하여 세이프키 발급 여부 확인 → 입력값 검증 → NICE 신용조회 연동까지의 인증 흐름을 안정적으로 개선했습니다.',
      improvements: [
        '세이프키(SMS) 발급 및 입력 프로세스 유지보수',
        '세이프키 발급 여부 및 인증번호 검증 로직 개선',
        '개인정보 제공 동의 체크 로직 추가 및 예외 처리 보완',
        'NICE 신용조회 전 입력 데이터 검증 강화',
        '신용조회 성공 후 가입 정보 수정 방지 처리 적용',
      ],
      keyImplementations: [
        'ASP.NET Web Forms(Code Behind) 기반 세이프키 인증 로직 분석 및 수정',
        '세이프키 발급 요청값(Session)와 입력된 세이프키 일치 여부 검증',
        'SQL Server를 이용한 발급 이력 조회 및 인증 데이터 검증',
        'NICE 신용조회 API 호출 전 사전 검증 프로세스 개선',
        '인증 실패 및 예외 상황별 사용자 안내 메시지 처리',
      ],
      results: [
        '세이프키 인증 오류 감소 및 신용조회 성공률 향상',
        'NICE API 호출 이전 단계에서 오류를 사전 차단하여 안정성 확보',
        '사용자 입력 오류 및 운영 문의 감소',
        '본인인증부터 신용조회까지의 가입 프로세스 신뢰성 향상',
      ],
    },
  ],
  outcomes: {},
};

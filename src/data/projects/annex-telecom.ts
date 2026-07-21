import { ProjectDetail } from '@/types/project';

export const annexTelecomDetail: ProjectDetail = {
  slug: 'amobile_telecom',
  title: '에넥스텔레콤 - 통신 서비스 플랫폼',
  subtitle: '고객용 · 통신사 웹사이트',
  type: 'work',
  layout: 'compact',
  company: '에넥스텔레콤',
  period: '2024.08 ~ 2026.03',
  role: '고객용 웹사이트 유지보수 및 기능 개발',
  teamSize: '개발팀 2명',
  contribution: '고객 서비스·회원·요금 조회 기능 분석, 수정 및 운영 지원',
  summary:
    'Classic ASP 기반 고객용 통신사 웹사이트. 고객 서비스, 회원 관리, 요금 조회 기능을 운영합니다.',
  thumbnail: '/images/projects/annextele.png',
  heroImage: '/images/projects/annextele.png',
  techStack: [
    'Classic ASP',
    'MS SQL Server',
    'HTML5',
    'CSS3',
    'JavaScript',
    'jQuery',
    'Bootstrap',
    'AJAX',
    'IIS',
  ],
  links: {
    live: 'https://www.annextele.com/',
  },
  overview: {
    background:
      '에넥스텔레콤은 알뜰폰(MVNO) 통신사의 고객용 웹사이트입니다. Classic ASP 기반으로 고객 서비스, 회원 관리, 요금 조회 기능을 제공합니다.\n\n레거시 Classic ASP 사이트의 유지보수와 기능 개선을 담당했으며, 모바일·웹 반응형 화면과 운영 중 발생하는 이슈를 처리했습니다.',
  },
  improvements: [
    'Classic ASP 기반 고객용 웹사이트 유지보수 및 기능 개선',
    '고객 서비스(1:1 문의, FAQ, 공지사항) 기능 개선',
    '회원 관리·요금 조회 기능 수정',
    '모바일·웹 반응형 사이트 관리 및 운영',
    'AJAX 기반 비동기 통신 로직 개선',
    '운영 이슈 대응 및 기획·영업 요청사항 반영',
  ],
  contributions: [
    '레거시 Classic ASP 고객용 사이트 안정적 운영 및 유지보수',
    '고객 서비스·회원·요금 조회 기능 개선',
    '모바일·웹 반응형 UI 유지보수',
    '유관 부서 협업 및 요구사항 반영',
    '운영 중 발생 이슈 신속 대응',
  ],
  highlights: {
    role: '고객용 웹사이트 유지보수 및 기능 개발',
    challenge: '레거시 Classic ASP 사이트 운영 및 기능 개선',
    outcome: '고객 서비스·회원·요금 조회 기능 개선',
  },
  challenge: [],
  solution: [],
  caseStudies: [
    {
      id: 'customer-service-site',
      title: '고객 서비스·회원·요금 조회 운영',
      summary:
        'Classic ASP 기반 고객용 웹사이트의 고객 서비스, 회원 관리, 요금 조회 기능을 유지보수·개선했습니다.',
      afterImage: {
        src: '/images/projects/annextele.png',
        alt: '에넥스텔레콤 웹사이트 화면',
        caption: '고객용 통신사 웹사이트 화면',
      },
      background:
        '에넥스텔레콤 고객용 사이트는 Classic ASP로 구현되어 있으며, 1:1 문의·FAQ·공지사항, 회원가입·로그인·개인정보 관리, 실시간 요금 조회·청구서·결제 내역 등 핵심 고객 기능을 제공합니다.\n\n레거시 코드 구조를 분석하고 AJAX 비동기 통신·반응형 UI를 유지보수하며 운영 이슈와 개선 요청을 반영했습니다.',
      improvements: [
        '1:1 문의, FAQ, 공지사항 기능 개선',
        '회원가입·로그인·개인정보 관리 유지보수',
        '실시간 요금 조회·청구서·결제 내역 기능 수정',
        '모바일·웹 반응형 UI 개선',
      ],
      keyImplementations: [
        'Classic ASP 레거시 코드 분석 및 수정',
        'AJAX 기반 비동기 데이터 처리 개선',
        'SQL Server 쿼리 수정 및 데이터 검증',
        'jQuery·Bootstrap 기반 반응형 UI 유지보수',
      ],
      results: [
        '고객 서비스·회원·요금 조회 기능 안정화',
        '레거시 Classic ASP 사이트 운영 경험',
        '운영 이슈 신속 대응으로 서비스 연속성 확보',
      ],
    },
  ],
  outcomes: {},
};

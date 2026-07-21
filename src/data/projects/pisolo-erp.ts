import { ProjectDetail } from '@/types/project';

export const pisoloErpDetail: ProjectDetail = {
  slug: 'pisolo_erp',
  title: '피졸로(PISOLO) ERP',
  subtitle: 'Back Office · ERP',
  type: 'work',
  layout: 'compact',
  company: '에넥스텔레콤',
  period: '2024.08 ~ 2026.03',
  role: 'ERP 유지보수 및 기능 개발',
  teamSize: '개발팀 3명',
  contribution: '운영 중인 ERP 시스템 분석, 기능 수정 및 신규 개발',
  summary:
    '상품·주문·회원·재고·배송·계약 등 기업 업무를 통합 관리하는 Web 기반 ERP 시스템',
  thumbnail: '/images/projects/pisolo_ERP.png',
  heroImage: '/images/projects/pisolo_ERP.png',
  techStack: [
    'ASP.NET Web Forms 4.0',
    'C#',
    'MS SQL Server',
    'ADO.NET',
    'HTML5',
    'CSS3',
    'JavaScript',
    'jQuery',
    'IIS',
  ],
  overview: {
    background:
      '피졸로 ERP는 상품, 주문, 회원, 재고, 배송, 계약 등 기업의 업무를 통합 관리하는 Web 기반 ERP 시스템입니다.\n\n운영 중인 시스템의 유지보수와 신규 기능 개발을 담당하며, 기존 업무 프로세스를 분석하고 사용자 요구사항을 반영하여 기능 개선 및 운영 안정화를 수행했습니다.',
  },
  improvements: [
    'ERP 화면 유지보수 및 신규 기능 개발',
    '주문·상품·회원 등 업무 프로세스 개선',
    'SQL Query 및 Stored Procedure 성능 개선',
    '사용자 권한 관리 및 메뉴 접근 제어',
    '검색, 페이징, 엑셀 업로드/다운로드 기능 개선',
    '운영 오류 수정 및 사용자 요청사항 반영',
  ],
  contributions: [
    '운영 중인 ERP 기능 개선 및 유지보수',
    '업무 프로세스 개선을 통한 사용자 편의성 향상',
    'SQL 튜닝 및 Stored Procedure 개선',
    '운영 오류 수정 및 시스템 안정화',
    '부서 요청사항 기반 신규 기능 개발',
  ],
  highlights: {
    role: 'ERP 유지보수 및 기능 개발',
    challenge: '레거시 Web Forms ERP 운영 및 개선',
    outcome: '보안·성능·업무 프로세스 개선',
  },
  challenge: [],
  solution: [],
  caseStudies: [
    {
      id: 'erp-security',
      title: 'ERP 시스템 보안 강화',
      summary:
        'ISMS 심사 대응을 위해 ERP 로그인 및 접근 제어 기능을 개선하고, 인증 및 로그 관리 체계를 구축했습니다.',
      afterImage: {
        src: '/images/projects/pisolo_ERP_login.png',
        alt: '개선된 ERP 로그인 UI',
        caption: '개선된 로그인 UI',
      },
      flowImage: {
        src: '/images/projects/Pisolo_login_flowchart.png',
        alt: 'ERP 로그인 인증 프로세스 플로우차트',
        caption: 'IP 접근 제어 및 인증번호 검증 흐름',
        label: '인증 프로세스',
      },
      background:
        '기존 ERP는 로그인 인증과 접속 이력 관리 기능이 부족하여 내부 시스템 보안 강화가 필요한 상황이었습니다.\n\nISMS 심사 대응과 운영 보안 수준 향상을 위해 로그인 인증 절차와 접근 제어, 사용자 활동 로그 기능을 개선했습니다.',
      improvements: [
        '등록된 IP만 ERP 접속 허용',
        '로그인 UI 개선',
        '이메일 인증번호 발송 및 2차 인증',
        '사용자 접속 이력 저장',
        '사용자 이벤트 로그 기록',
        '엑셀 다운로드 이력 관리',
        'ISMS 심사 대응 기능 적용',
      ],
      keyImplementations: [
        'IP 접근 제어 Middleware 구현',
        '이메일 인증번호 발송 및 검증',
        '로그인 인증 프로세스 개선',
        '사용자 이벤트 로그 저장',
        '엑셀 다운로드 로그 관리',
      ],
      results: [
        '등록된 IP 이외의 접근 차단으로 내부 시스템 보안 강화',
        '로그인 인증 절차 추가로 계정 보안 향상',
        '사용자 활동 이력을 체계적으로 관리',
        'ISMS 심사 요구사항 충족',
        '운영 중 보안 감사 대응 용이',
      ],
    },
  ],
  outcomes: {},
};

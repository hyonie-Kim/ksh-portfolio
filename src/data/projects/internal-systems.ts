import { ProjectDetail } from '@/types/project';

export const internalSystemsDetail: ProjectDetail = {
  slug: 'internal_systems',
  title: 'MNG 사내 인트라넷',
  subtitle: 'Admin · Back Office',
  type: 'work',
  layout: 'compact',
  company: '에넥스텔레콤',
  period: '2024.08 ~ 2026.03',
  role: 'MNG 유지보수 및 기능 개발',
  teamSize: '개발팀 3명',
  contribution: '요구사항 분석부터 기능 개발, 배포, 유지보수까지 담당',
  summary:
    '고객·계약·CS·운영 업무를 관리하는 사내 인트라넷 기반 Admin 시스템',
  thumbnail: '/images/projects/intranet_mng.png',
  heroImage: '/images/projects/intranet_mng.png',
  techStack: [
    'ASP.NET Web Forms 4.0',
    'C#',
    'MS SQL Server',
    'JavaScript',
    'jQuery',
    'AJAX',
    'IIS',
  ],
  overview: {
    background:
      'MNG는 사내 인트라넷 기반 업무 관리 시스템으로, 고객·계약·CS·운영 업무를 관리하는 관리자(Admin) 시스템입니다.\n\n다양한 부서에서 사용하는 내부 운영 기능의 개발 및 유지보수를 수행했으며, 업무 자동화와 운영 효율 개선을 위한 기능을 지속적으로 개발했습니다.',
  },
  improvements: [
    'MNG 화면 유지보수 및 신규 기능 개발',
    '요금제 정책 변경 업무 자동화',
    '외부 연동 REST API 개발',
    'SQL Query 및 Stored Procedure 성능 개선',
    '검색, 페이징, 엑셀 업로드/다운로드 기능 개선',
    '운영 오류 수정 및 부서 요청사항 반영',
  ],
  contributions: [
    '사내 인트라넷 기반 운영 기능 개선 및 유지보수',
    '반복 업무 자동화를 통한 운영 효율 향상',
    '트랜잭션 기반 데이터 처리 및 API 연동',
    '유관 부서 요구사항 기반 신규 기능 개발',
    '레거시 Web Forms 시스템 안정적 운영',
  ],
  highlights: {
    role: 'MNG 유지보수 및 기능 개발',
    challenge: '반복 업무 및 다부서 요청 대응',
    outcome: '업무 자동화 및 운영 효율 개선',
  },
  challenge: [],
  solution: [],
  caseStudies: [
    {
      id: 'price-management',
      title: '요금제관리 시스템 신규 개발',
      summary:
        '반복적인 통신 요금제 정책 변경 업무를 웹 관리자 기능으로 자동화했습니다.',
      afterImage: {
        src: '/images/projects/mng_price.png',
        alt: '요금제관리 시스템 관리자 화면',
        caption: '요금제 정책 조회 및 일괄 변경 관리 화면',
      },
      background:
        '매달 통신 요금제 정책 변경 시 통신팀이 반복적으로 수행하던 쿼리 작업을 웹 기반 관리자 페이지로 자동화하여 업무 효율을 개선했습니다.',
      improvements: [
        '정책 조회 및 일괄 변경',
        '외부 연동 API 대응값 관리',
        '관련 내부 데이터 일괄 업데이트',
        '중복 등록 방지 및 실시간 데이터 검증',
      ],
      keyImplementations: [
        'ASP.NET WebMethod 기반 AJAX 통신',
        'SQL Server 다중 테이블 트랜잭션 처리',
        'JavaScript 클라이언트 사이드 유효성 검증',
        'CSS Grid/Flexbox 반응형 UI',
      ],
      results: [
        '24시간 정책 변경 가능 (기존 시간대 제한 해소)',
        '다중 요금제 ID 일괄 처리로 업무 시간 단축',
        '실시간 데이터 검증으로 오류율 감소',
      ],
    },
    {
      id: 'payment-api',
      title: '외부 고객사 입금 API 신규 개발',
      summary:
        '계약 상태 변경 및 업무큐 처리를 위한 REST API를 개발했습니다.',
      afterImage: {
        src: '/images/projects/deposit_api_test.png',
        alt: '입금 API 테스트 화면',
        caption: 'API 요청/응답 테스트 화면',
      },
      background:
        '외부 고객사의 입금 확인에 따른 계약 상태 변경 및 업무큐 처리를 자동화하기 위해 REST API를 개발했습니다.',
      improvements: [
        '필수 파라미터 검증',
        '조건 조회, 업데이트, 대기건 해제',
        '트랜잭션 기반 데이터 처리',
        '표준화된 에러 응답 처리',
      ],
      keyImplementations: [
        'POST /api/v1/payment-status 엔드포인트 설계',
        '요청 데이터 유효성 검증 및 비즈니스 로직 분리',
        '트랜잭션 단위 처리로 데이터 무결성 보장',
        '에러 코드 체계화',
      ],
      results: [
        '수동 업무 자동화로 처리 시간 단축',
        '트랜잭션 기반 안전한 데이터 처리',
        '다양한 고객사 요구사항에 대응 가능한 구조',
      ],
      code: {
        language: 'json',
        content: `// Request — POST /api/v1/payment-status
{
  "clientId": "partner-001",
  "orderId": "ORD-2024-0001",
  "status": "CONFIRMED",
  "operatorId": "admin-user"
}

// Response
{
  "success": true,
  "code": "200",
  "data": {
    "resultCode": "0000",
    "orderStatus": "UPDATED"
  }
}`,
      },
    },
  ],
  outcomes: {},
};

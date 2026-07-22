import { ProjectDetail } from '@/types/project';

export const viewDetail: ProjectDetail = {
  slug: 'view',
  title: 'VIEW - 글로벌 병원 홈페이지 구축 및 운영',
  subtitle: 'WordPress · CMS · AI Search',
  type: 'work',
  layout: 'compact',
  period: '2026.05 ~ 2026.07',
  role: '글로벌 병원 홈페이지 리뉴얼 및 CMS·운영 기능 구축',
  teamSize: '2명 (개발 1명 · 퍼블리셔 1명)',
  contribution:
    '글로벌 병원 홈페이지 및 CMS 구축',
  summary:
    'WordPress 기반 글로벌 병원 홈페이지를 리뉴얼하고, 관리자 CMS, AI Search, SEO 최적화 및 운영 기능을 구축한 프로젝트',
  thumbnail: '/images/projects/view.png',
  heroImage: '/images/projects/view.png',
  techStack: [
    'WordPress',
    'PHP',
    'Custom Plugin',
    'JavaScript',
    'HTML5',
    'CSS3',
    'AWS',
    'CloudFront',
    'SSL',
    'WAF',
    'TikTok API',
    'YouTube API',
  ],
  links: {
    live: 'https://www.viewplasticsurgery.com/',
  },
  overview: {
    background:
      '글로벌 환자를 대상으로 하는 병원 홈페이지를 WordPress 기반으로 리뉴얼했습니다. 사용자에게 보이는 사이트와 운영팀이 사용하는 관리자 CMS를 함께 구축하는 것이 핵심이었습니다.\n\n아키텍처는 WordPress ↔ Custom Plugin ↔ AI Search API ↔ AWS(CloudFront·SSL·WAF)로 구성되며, 콘텐츠 관리·상담 신청·검색·미디어 연동·인프라 운영까지 서비스가 실제로 돌아갈 수 있는 환경을 만들었습니다.',
  },
  improvements: [
    'WordPress 기반 글로벌 병원 홈페이지 구축',
    '관리자 CMS 개발 및 콘텐츠 관리 기능 구현',
    'SEO / GEO / AEO 최적화',
    'AI Search(RAG) 구축',
    '상담 신청 시스템(Custom Forms)',
    'TikTok / YouTube API 연동',
    'AWS + CloudFront 운영',
    '권한(Role) 관리 시스템 구축',
  ],
  contributions: [
    '사용자 사이트와 관리자 CMS를 함께 구축·운영',
    '의료진·Before&After·Review 등 병원 콘텐츠 구조 설계',
    '다국어·글로벌 유입에 맞춘 SEO / GEO / AEO 최적화',
    'AI Search·상담 신청·외부 API 연동으로 운영 효율 향상',
    'AWS·CloudFront·SSL·WAF 기반 안정적 서비스 운영',
  ],
  highlights: {
    role: '홈페이지 리뉴얼 및 CMS·운영 기능 구축',
    challenge: '사용자 사이트와 운영 CMS를 하나의 서비스로 구축',
    outcome: '글로벌 병원 홈페이지·CMS·검색·인프라 운영 체계 확보',
  },
  challenge: [],
  solution: [],
  caseStudies: [
    {
      id: 'global-hospital-site',
      title: '글로벌 병원 홈페이지 개발',
      summary:
        '반응형 퍼블리싱과 페이지 개발을 통해 의료진, Before&After, Review 등 글로벌 병원 콘텐츠를 다국어 환경에서 제공하는 사용자 사이트를 구축했습니다.',
      afterImage: {
        src: '/images/projects/view.png',
        alt: 'VIEW 글로벌 병원 홈페이지 메인 화면',
        caption: '글로벌 병원 메인 홈페이지',
      },
      background:
        '글로벌 환자를 대상으로 병원 소개, 시술 정보, 의료진, Before&After, Review 등 다양한 콘텐츠를 안정적으로 노출해야 했습니다.\n\nPC·모바일 반응형 퍼블리싱과 페이지 구조를 설계하고, 다국어 환경에서도 일관된 사용자 경험을 제공하도록 홈페이지를 구축했습니다.',
      improvements: [
        '반응형 웹 퍼블리싱 및 페이지 개발',
        '의료진·시술 소개 페이지 구성',
        'Before&After·Review 콘텐츠 노출',
        '다국어 글로벌 사이트 구조 반영',
      ],
      keyImplementations: [
        'WordPress 기반 글로벌 병원 홈페이지 구축',
        'PC / Mobile 반응형 UI 퍼블리싱',
        '의료진·Before&After·Review 등 콘텐츠 페이지 개발',
        '다국어·글로벌 사용자 유입을 고려한 페이지 구조 설계',
      ],
      results: [
        '글로벌 환자를 위한 병원 홈페이지 구축',
        '주요 콘텐츠 페이지의 일관된 UX 제공',
        '반응형 대응으로 다양한 디바이스 접근성 향상',
      ],
    },
    {
      id: 'wordpress-admin-cms',
      title: 'WordPress 관리자 CMS 개발',
      summary:
        'Custom Post Type·Meta Box·Role 기반 권한 관리를 활용해 운영팀이 콘텐츠와 상담 신청을 관리할 수 있는 WordPress 관리자 CMS를 구축했습니다.',
      afterImage: {
        src: '/images/projects/VIEW_wordpress.png',
        alt: 'VIEW WordPress 관리자 CMS 화면',
        caption: '온라인 상담·콘텐츠 관리 관리자 페이지',
      },
      background:
        '홈페이지만 만드는 것이 아니라, 운영팀이 콘텐츠를 등록·수정하고 상담 신청을 처리할 수 있는 CMS가 필요했습니다.\n\nWordPress Custom Post Type과 Meta Box, Role 기반 권한 관리를 중심으로 관리자 기능을 확장하고, 실제 서비스 운영이 가능한 관리 환경을 구축했습니다.',
      improvements: [
        'Custom Post Type 기반 콘텐츠 구조 설계',
        'Meta Box를 활용한 관리 항목 구성',
        'Role 기반 권한 관리 시스템 구축',
        '상담 신청·콘텐츠 관리 관리자 기능 구현',
      ],
      keyImplementations: [
        'WordPress Plugin·Custom Post Type 기반 CMS 확장',
        'Meta Box를 활용한 시술·의료진·상담 데이터 관리',
        '관리자 Role·권한별 메뉴 및 기능 제어',
        '온라인 상담 신청 현황·상태 관리 UI 구현',
      ],
      results: [
        '운영팀이 직접 콘텐츠를 관리할 수 있는 CMS 확보',
        '상담 신청·콘텐츠 운영 프로세스 효율화',
        '사용자 사이트와 관리자 CMS의 일관된 운영 체계 구축',
      ],
    },
  ],
  outcomes: {},
  retrospective: {
    learned: [
      '사용자 사이트와 관리자 CMS를 함께 설계해야 실제 서비스 운영이 가능하다는 점',
      'SEO / GEO / AEO와 AI Search를 콘텐츠 구조와 함께 설계하는 경험',
      'AWS·CloudFront·WAF 등 인프라와 WordPress 운영을 연결하는 실무 경험',
    ],
    difficulty: [
      '글로벌·다국어 유입과 병원 콘텐츠 구조를 CMS에 맞게 모델링하는 과정',
      'AI Search·외부 API·보안(SSL·WAF)을 운영 안정성과 함께 맞추는 작업',
    ],
    next: [
      'AI Search 품질과 상담 전환 지표를 연결한 고도화',
      '콘텐츠·권한·운영 자동화 범위 확대',
    ],
  },
};

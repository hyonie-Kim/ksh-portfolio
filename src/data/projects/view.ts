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
    'NestJS',
    'MariaDB',
    'Gemini API',
    'JavaScript',
    'HTML5',
    'CSS3',
    'AWS',
    'CloudFront',
    'SSL',
    'WAF',
    'Apache',
    'PM2',
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
        src: '/images/projects/view_main.png',
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
    {
      id: 'ai-search-seo',
      title: 'AI Search + SEO + GEO + AEO',
      summary:
        'WordPress 콘텐츠 기반 NestJS AI Search(RAG)를 구축하고, SEO·GEO·AEO 최적화를 콘텐츠 구조와 관리자 설정으로 분리 구현했습니다.',
      images: [
        {
          src: '/images/projects/view_seo_list.png',
          alt: 'SEO / GEO / AEO 관리자 목록 화면',
          caption: '관리자 SEO · GEO · AEO 목록 화면',
        },
        {
          src: '/images/projects/view_seo_edit.png',
          alt: 'SEO / GEO / AEO 등록·수정 화면',
          caption: 'SEO · GEO · AEO 등록 및 수정 화면',
        },
      ],
      imageLayout: 'row',
      background:
        'WordPress 콘텐츠와 관리자 설정을 기반으로 NestJS AI Search API가 검색 데이터를 처리하고, Gemini API를 통해 임베딩 및 답변을 생성하도록 구성했습니다.\n\nSEO·GEO·AEO는 검색 파이프라인과 분리하여 구현했습니다. 운영자가 관리자 CMS에서 페이지별로 SEO·GEO·AEO를 등록·수정하면, 해당 페이지에 메타데이터와 검색 최적화 설정이 적용됩니다.',
      improvements: [
        'NestJS·RAG 기반 AI Search API 구축',
        'Gemini API 연동(임베딩·답변 생성)',
        '운영자가 페이지별 SEO·GEO·AEO 등록 시 해당 페이지에 자동 적용',
        '페이지별 메타데이터 및 구조화 데이터 적용',
        'FAQ·의료진·시술 콘텐츠의 검색 친화적 구조 설계',
        '관리자 CMS에서 SEO·GEO·AEO 설정 관리',
        'AI Search 인덱싱 대상 콘텐츠 연동',
      ],
      keyImplementations: [
        'WordPress(view_theme · view-admin) ↔ MariaDB ↔ AI Search API 연동',
        'NestJS RAG 파이프라인에서 검색 데이터 처리',
        'Gemini API를 통한 임베딩·답변 생성',
        '페이지 URL 단위로 SEO·GEO·AEO를 등록·수정하는 CMS 기능 구현',
        '등록된 설정을 해당 정적·콘텐츠 페이지에 메타로 적용',
        'FAQ·의료진·시술 콘텐츠를 검색·인덱싱에 맞게 구조화',
      ],
      results: [
        '콘텐츠 기반 AI 검색으로 상담·정보 탐색 경험 개선',
        '운영자가 페이지별 SEO·GEO·AEO를 직접 등록·적용할 수 있는 운영 구조 확보',
        '검색 파이프라인과 검색 최적화를 역할별로 분리해 유지보수성 향상',
      ],
      code: {
        language: 'text',
        content: `Browser
   │
   ▼
WordPress
(view_theme · view-admin)
   │
   ├───────────────► MariaDB
   │
   ▼
AI Search API
(NestJS · RAG)
   │
   ▼
Gemini API
(임베딩 · 답변 생성)`,
      },
    },
    {
      id: 'external-api-automation',
      title: '외부 API 연동 및 콘텐츠 운영 자동화',
      summary:
        'TikTok Display API와 YouTube API를 WordPress 관리자에 연동해 SNS 콘텐츠 수집·동기화부터 사용자 사이트 노출까지의 운영 과정을 자동화했습니다.',
      images: [
        {
          src: '/images/projects/view_media_youtube.png',
          alt: 'YouTube API 연동 설정 화면',
          caption: 'YouTube API 연동 설정 화면',
        },
        {
          src: '/images/projects/view_media_youtube_02.png',
          alt: 'YouTube 동기화 영상 관리 목록',
          caption: 'YouTube 동기화 영상 관리 목록',
        },
        {
          src: '/images/projects/view_media_tiktok.png',
          alt: 'TikTok Display API 연동 상태 화면',
          caption: 'TikTok Display API 연동 상태 화면',
        },
        {
          src: '/images/projects/view_media_tiktok_02.png',
          alt: '사용자 사이트 TikTok 채널 노출 화면',
          caption: '사용자 사이트 TikTok 채널 노출 화면',
        },
      ],
      imageLayout: 'row',
      background:
        'SNS 영상을 사이트에 수동으로 등록하는 반복 업무를 줄이고, 공식 채널의 최신 콘텐츠를 안정적으로 제공할 수 있는 연동 구조가 필요했습니다.\n\nTikTok은 Display API를 통해 공식 계정의 영상 목록을 조회하도록 구현하고, 실제 서비스 연동을 위해 TikTok Developer 앱 생성부터 App Review 제출·보완·승인까지 전 과정을 진행했습니다.\n\nYouTube는 신규 영상을 매일 정오에 자동으로 확인해 WordPress 관리자에 등록하는 Cron 기반 동기화를 적용했습니다. 관리자는 필요할 때 수동 동기화를 실행하고, 동기화 결과와 오류 상태를 확인할 수 있습니다.\n\n동기화된 콘텐츠와 썸네일은 관리자 설정을 거쳐 사용자 사이트의 VIEW TV 및 TikTok 채널 페이지에 노출되도록 구성했습니다.',
      improvements: [
        'TikTok Display API 연동 및 App Review 대응',
        'YouTube 신규 영상·썸네일 Cron 자동 동기화',
        '관리자 수동 동기화 기능 제공',
        '동기화 이력·상태·오류 관리',
        'VIEW TV·TikTok 채널 페이지 자동 노출',
        'SNS 콘텐츠 등록 업무 효율화',
      ],
      keyImplementations: [
        'TikTok Developer 앱 생성 및 Display API App Review 승인 대응',
        'TikTok API 영상 데이터를 WordPress 콘텐츠로 동기화',
        'YouTube API와 Cron을 활용한 매일 정오 신규 영상 수집',
        '관리자에서 동기화 실행 결과·이력·오류 상태를 확인하는 기능 구현',
        '대표 영상·목록 노출 여부 등 운영 설정과 사용자 사이트 연동',
        'API 썸네일 오류 발생 시 대체 이미지를 적용하는 fallback 처리',
      ],
      results: [
        '공식 TikTok·YouTube 콘텐츠를 병원 사이트에 안정적으로 연동',
        'YouTube 신규 영상 등록 자동화로 운영팀의 반복 업무 감소',
        '동기화 상태와 오류 확인 기능을 통해 운영 대응력 향상',
        '관리자 콘텐츠와 사용자 사이트 노출 흐름을 일원화',
      ],
      code: {
        language: 'text',
        content: `TikTok API ─┐
            ├──► WordPress 관리자 동기화 ──► 사용자 사이트 노출(Front)
YouTube API ┘`,
      },
    },
    {
      id: 'infra-performance',
      title: '운영 인프라 및 성능 개선',
      summary:
        'AWS CloudFront·WAF·SSL과 Apache·WordPress·PM2 운영 구조를 구성하고, 캐시·보안·인증서·API 장애 등 실제 운영 이슈를 분석·해결했습니다.',
      background:
        '외부 요청부터 서버까지 CloudFront(CDN·Cache·WAF·SSL)를 경유해 Apache/WordPress로 전달되는 운영 구조를 구성했습니다.\n\nMariaDB와 AI Search API(PM2)를 함께 운영하며, 단순 구축을 넘어 캐시 미반영·업로드 차단·인증서 만료·API 장애 등 실제 운영 이슈를 로그 기반으로 분석하고 해결했습니다.',
      improvements: [
        'AWS CloudFront 캐시 정책·Invalidation 운영',
        'WAF 보안 규칙 설정 및 업로드 차단 이슈 해결',
        'ACM SSL 인증서 발급·갱신',
        'Apache·WordPress·PM2 서비스 운영',
        '이미지 WebP 변환 및 CDN 캐시 최적화',
        '서버 로그·API 상태 기반 장애 대응',
      ],
      keyImplementations: [
        'CloudFront Cache Behavior 및 Path Pattern 운영',
        'Cache Invalidation을 통한 정적 리소스 반영',
        'WAF Rule 분석 및 이미지 업로드 차단 이슈 해결',
        'ACM SSL 인증서 발급 및 갱신',
        'Apache · CloudFront · PM2 로그 기반 장애 분석',
        'AI Search API 상태 점검 및 서비스 운영',
        '이미지 WebP 및 CDN 캐시 최적화',
      ],
      operationalIssues: [
        {
          issue: 'CloudFront 캐시로 이미지가 반영되지 않음',
          resolution:
            'Cache Invalidation과 캐시 정책 수정으로 즉시 반영되도록 개선',
        },
        {
          issue: '상담 신청 이미지 업로드 실패',
          resolution:
            'WAF Managed Rule이 multipart/form-data 요청을 차단하는 원인을 분석하고 Count 모드로 검증 후 Block 정책 조정',
        },
        {
          issue: '특정 페이지 탭 동작 오류',
          resolution: 'CloudFront Behavior Path Pattern 수정으로 정상 동작',
        },
        {
          issue: 'SSL 인증서 만료',
          resolution: 'ACM 인증서 재발급 및 CloudFront 배포에 연결',
        },
        {
          issue: 'YouTube 썸네일 미노출',
          resolution: 'Fallback 이미지 로직 추가 및 API 응답 예외 처리',
        },
      ],
      results: [
        '운영 중 발생하는 캐시·보안 이슈를 빠르게 대응',
        '이미지 업로드 및 콘텐츠 배포 안정성 향상',
        'CloudFront와 WAF 운영 경험 확보',
        '장애 원인 분석 시간을 단축',
        '안정적인 서비스 운영 환경 구축',
      ],
      code: {
        language: 'text',
        content: `Browser
   │
   ▼
AWS CloudFront
(CDN · Cache · WAF · SSL)
   │
   ▼
Apache / WordPress
   ├── MariaDB
   └── AI Search API (PM2)`,
      },
    },
  ],
  outcomes: {},
  retrospective: {
    learned: [
      'CloudFront는 단순 CDN이 아니라 Cache Behavior 설계가 중요하다는 것을 경험했다.',
      'WAF는 보안뿐 아니라 정상 요청도 차단할 수 있어 로그 기반 분석이 중요했다.',
      '운영 환경에서는 코드보다 캐시·인증서·인프라 설정이 서비스 안정성에 더 큰 영향을 줄 수 있다는 것을 배웠다.',
      '실제 서비스에서는 개발보다 운영과 장애 대응 역량이 더 중요하다는 점을 경험했다.',
    ],
    difficulty: [
      'WAF Block과 정상 multipart 업로드를 구분하기 위해 Count 모드로 원인을 추적하는 과정',
      'CloudFront 캐시·Path Pattern·Invalidation이 맞물린 이슈를 로그로 좁혀 가는 과정',
    ],
    next: [
      '운영 이슈 대응 절차와 캐시·WAF 점검 체크리스트를 문서화',
      'AI Search API 상태 모니터링과 장애 알림을 고도화',
    ],
  },
};

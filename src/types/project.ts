export type ProjectType = 'work' | 'personal' | 'freelance' | 'team';

export type ProjectImageType = 'screen' | 'diagram' | 'code' | 'before' | 'after';

export interface ProjectImageData {
  src: string;
  alt: string;
  caption?: string;
  type?: ProjectImageType;
  label?: string;
}

export interface ProjectCodeData {
  language: string;
  content: string;
}

export interface ProjectOperationalIssue {
  issue: string;
  resolution: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  summary?: string;
  images?: ProjectImageData[];
  /** images 배열 배치. 기본 stack(세로), row는 가로(모바일에서는 세로) */
  imageLayout?: 'stack' | 'row';
  beforeImage?: ProjectImageData;
  afterImage?: ProjectImageData;
  flowImage?: ProjectImageData;
  background?: string;
  improvements?: string[];
  features?: string[];
  keyImplementations?: string[];
  implementation?: string[];
  /** 운영 중 발생 이슈와 해결 내용 */
  operationalIssues?: ProjectOperationalIssue[];
  results?: string[];
  code?: ProjectCodeData;
}

export type ProjectLayout = 'standard' | 'compact';

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle?: string;
  type: ProjectType;
  layout?: ProjectLayout;
  company?: string;
  client?: string;
  period: string;
  role: string;
  teamSize?: string;
  contribution?: string;
  summary: string;
  thumbnail: string;
  heroImage?: string;
  techStack: string[];

  links?: {
    live?: string;
    github?: string;
    document?: string;
  };

  overview: {
    background: string;
    objective?: string;
  };

  /** compact 레이아웃: 주요 개선사항 */
  improvements?: string[];

  /** compact 레이아웃: 프로젝트 기여 */
  contributions?: string[];

  highlights: {
    role: string;
    challenge: string;
    outcome: string;
  };

  challenge: string[];
  solution: string[];
  caseStudies: ProjectCaseStudy[];

  outcomes: {
    efficiency?: string[];
    stability?: string[];
    collaboration?: string[];
  };

  retrospective?: {
    learned?: string[];
    difficulty?: string[];
    next?: string[];
  };
}

export const PROJECT_TYPE_LABEL: Record<ProjectType, string> = {
  work: '실무',
  personal: '개인',
  freelance: '외주',
  team: '팀 프로젝트',
};

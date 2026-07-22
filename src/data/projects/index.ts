import { ProjectDetail } from '@/types/project';
import { amobileDetail } from './amobile';
import { annexTelecomDetail } from './annex-telecom';
import { internalSystemsDetail } from './internal-systems';
import { ollacareDetail } from './ollacare';
import { pisoloErpDetail } from './pisolo-erp';
import { resumatesDetail } from './resumates';
import { smartRentalDetail } from './smart-rental';

/** slug → 구조화 상세 데이터 매핑. 점진적으로 프로젝트 추가 예정 */
const projectDetails: Record<string, ProjectDetail> = {
  smartRental: smartRentalDetail,
  amobile: amobileDetail,
  amobile_telecom: annexTelecomDetail,
  internal_systems: internalSystemsDetail,
  pisolo_erp: pisoloErpDetail,
  ollacare: ollacareDetail,
  Resumates: resumatesDetail,
};

export function getProjectDetail(slug: string): ProjectDetail | null {
  return projectDetails[slug] ?? null;
}

export function getAllProjectDetails(): Record<string, ProjectDetail> {
  return projectDetails;
}

export function getAllProjectDetailSlugs(): string[] {
  return Object.keys(projectDetails);
}

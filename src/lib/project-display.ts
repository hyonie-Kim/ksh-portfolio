import { Project, ProjectBadge } from '@/service/projects';

export function getProjectThumbnail(project: Project): string {
  if (project.thumbnail) {
    return project.thumbnail;
  }

  const thumbnailMap: Record<string, string> = {
    amobile_telecom: '/images/projects/annextele.png',
    amobile: '/images/projects/amobile.png',
    internal_systems: '/images/projects/intranet_mng.png',
    pisolo_erp: '/images/projects/pisolo_ERP.png',
    Resumates: '/images/projects/Resumates.png',
    smartRental: '/images/projects/smartRental.png',
    ollacare: '/images/projects/ollacare.png',
    wedding_mo: '/images/projects/wedding_mo.png',
    cobooki: '/images/projects/cobooki.png',
  };

  return thumbnailMap[project.path] ?? `/images/projects/${project.path}.png`;
}

export function getProjectYear(date: string): string {
  return new Date(date).getFullYear().toString();
}

export function getProjectBadge(project: Project): ProjectBadge {
  if (project.badge) return project.badge;
  if (project.developmentScope?.includes('실무')) return '실무';
  if (project.participant.includes('개인')) return '개인';
  if (project.participant.includes('팀')) return '팀 프로젝트';
  return '개인';
}

export function getProjectBadgeClass(badge: string): string {
  if (badge === '실무') {
    return 'bg-teal-100 text-teal-800 border-teal-200';
  }
  if (badge === '팀 프로젝트') {
    return 'bg-blue-100 text-blue-800 border-blue-200';
  }
  return 'bg-gray-100 text-gray-700 border-gray-200';
}

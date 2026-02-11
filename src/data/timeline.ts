import type { TimelineEvent } from '../types/timeline'

export const timeline: TimelineEvent[] = [
  {
    date: '2024',
    title: 'Loggy 프로젝트',
    description: 'Docker 기반 로컬 로그 수집 및 관리 시스템 개발',
    tags: ['Spring Boot', 'Redis', 'Docker'],
    type: 'project',
  },
  {
    date: '2024',
    title: 'Diet Coach 프로젝트',
    description: '식단 관리 및 코칭 서비스 개발',
    tags: ['Spring Boot', 'MySQL', 'React'],
    type: 'project',
  },
  {
    date: '2024',
    title: 'SSAFY 교육',
    description: '삼성 청년 SW 아카데미 과정 수료',
    tags: ['Java', 'Spring Boot', 'Algorithm'],
    type: 'education',
  },
]

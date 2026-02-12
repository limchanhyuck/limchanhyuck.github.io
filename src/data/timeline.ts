import type { TimelineEvent } from '../types/timeline'

export const timeline: TimelineEvent[] = [
  {
    date: '2026.01 - 02',
    title: 'Loggy (로기) 프로젝트',
    description: 'Git Flow 메타포 기반 실시간 협업 회의 플랫폼. 6인 팀에서 백엔드 Meeting·Issue·Branch·Notification 도메인 담당. N+1 최적화, JWT 인증 연동, WebSocket 알림 시스템 구현.',
    tags: ['Java 17', 'Spring Boot 3.5', 'PostgreSQL', 'Redis', 'WebSocket', 'QueryDSL'],
    type: 'project',
  },
  {
    date: '2025 - 2026',
    title: 'SSAFY (삼성 청년 SW 아카데미)',
    description: 'Java, Spring Boot, 알고리즘, 웹 개발 등 SW 개발 역량 교육 과정 수료.',
    tags: ['Java', 'Spring Boot', 'Algorithm', 'Web'],
    type: 'education',
  },
  {
    date: '2025',
    title: '정보처리기사 취득',
    description: '한국산업인력공단 정보처리기사 자격증 취득.',
    tags: ['국가기술자격'],
    type: 'certificate',
  },
  {
    date: '2024',
    title: 'SQLD 취득',
    description: '한국데이터산업진흥원 SQL 개발자(SQLD) 자격증 취득.',
    tags: ['SQL', 'Database'],
    type: 'certificate',
  },
  {
    date: '2024',
    title: 'Diet Coach 프로젝트',
    description: '식단 관리 및 코칭 서비스 개발. Spring Boot 기반 백엔드 및 React 프론트엔드 구현.',
    tags: ['Spring Boot', 'MySQL', 'React'],
    type: 'project',
  },
]

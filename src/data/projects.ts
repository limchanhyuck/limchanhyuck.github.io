import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'loggy',
    title: 'Loggy',
    description: 'Docker 기반 로컬 로그 수집 및 관리 시스템',
    longDescription:
      'Docker 컨테이너 환경에서 발생하는 로그를 실시간으로 수집하고 관리할 수 있는 시스템입니다. Spring Boot 기반의 백엔드와 Redis를 활용한 고성능 캐싱으로 대량의 로그 데이터를 효율적으로 처리합니다.',
    tech: ['Spring Boot', 'Redis', 'Docker'],
    github: 'https://github.com/limchanhyuck/Loggy',
    demo: null,
    image: '/assets/images/loggy.png',
    highlights: [
      '실시간 로그 수집 파이프라인 구축',
      'Redis 기반 캐싱으로 조회 성능 최적화',
      'Docker Compose로 원클릭 배포 환경 구성',
    ],
  },
  {
    id: 'diet-coach',
    title: 'Diet Coach',
    description: '식단 관리 및 코칭 서비스',
    longDescription:
      '사용자의 식단을 분석하고 맞춤형 코칭을 제공하는 서비스입니다. 영양 데이터 기반의 식단 추천과 목표 달성률 트래킹 기능을 제공합니다.',
    tech: ['Spring Boot', 'MySQL', 'React'],
    github: 'https://github.com/limchanhyuck/DietCoach',
    demo: null,
    image: '/assets/images/diet-coach.png',
    highlights: [
      '영양 데이터 기반 식단 분석 엔진',
      '개인 맞춤형 식단 추천 알고리즘',
      '목표 달성률 시각화 대시보드',
    ],
  },
]

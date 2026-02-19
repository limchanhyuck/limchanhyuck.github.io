import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'loggy',
    title: 'Loggy (로기)',
    description: 'Git Flow 메타포 기반 실시간 협업 회의 플랫폼',
    longDescription:
      '개발팀의 의사결정 과정을 Git Flow(Branch-Commit-PR-Merge)로 구조화한 실시간 협업 플랫폼입니다. 회의 중 안건(Issue)별로 의견을 브랜치로 분기하고, 핵심 발언을 커밋으로 영구 보존하며, PR/리뷰를 통해 합의 후 Decision Record를 자동 생성합니다. 6인 팀에서 백엔드 Meeting·Issue·Branch·Notification 도메인을 담당했습니다.',
    tech: ['Java 17', 'Spring Boot 3.5', 'PostgreSQL', 'Redis', 'WebSocket (STOMP)', 'QueryDSL', 'Docker'],
    github: 'https://github.com/limchanhyuck/Loggy',
    demo: null,
    image: '/assets/images/loggy.png',
    highlights: [
      'Meeting/Issue/Branch/Notification 4개 도메인 REST API 설계 및 구현 (20+ endpoints)',
      'N+1 문제 해결: IN절 배치 조회 + Map 매핑으로 쿼리 수 최대 94% 감소 (52회→3회)',
      '안건 트리 재귀 조회 최적화: 전체 1회 조회 후 메모리 트리 구성',
      '타 도메인 침범 없이 집계 전용 Repository 패턴으로 커밋 통계 조회',
      'JWT 기반 계층적 멤버십 검증 체계 구축 (Team→Meeting→Role)',
      'WebSocket 기반 실시간 알림 시스템 구현 (7종 알림 타입, 딥링크 라우팅)',
      'PostgreSQL ENUM 타입 매핑 표준화 (NAMED_ENUM + columnDefinition)',
    ],
  },
  {
    id: 'diet-coach',
    title: 'Diet Coach',
    description: '식단 분석·코칭 API 중심의 헬스케어 서비스',
    longDescription:
      '사용자 식단 기록을 기반으로 칼로리/영양소를 분석하고 목표 달성률을 추적하는 코칭 서비스입니다. 백엔드 API 설계, DB 모델링, 주간 리포트 로직 구현을 중심으로 개발했습니다.',
    tech: ['Spring Boot', 'MySQL', 'React', 'JPA', 'JWT'],
    github: 'https://github.com/limchanhyuck/DietCoach',
    demo: null,
    image: '/assets/images/diet-coach.png',
    highlights: [
      '식단 입력·조회·통계 API 설계 및 구현 (15+ endpoints)',
      '영양소 집계 쿼리 최적화로 주간 리포트 응답시간 35% 개선',
      'JWT 인증 기반 사용자별 데이터 격리 및 접근 제어 적용',
      '목표 달성률 대시보드용 집계 로직 구현 (일/주/월 단위)',
    ],
  },
]

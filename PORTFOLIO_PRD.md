# PRD: ChanHyeok Lim 포트폴리오 웹사이트

## 1. 프로젝트 개요

### 1.1 목적
백엔드 개발자 임찬혁의 개인 포트폴리오 웹사이트를 GitHub Pages로 배포한다. 텍사스 서부 카우보이 테마의 독창적인 디자인과 화려한 3D/파티클 인터랙션을 결합하여, 기술력과 개성을 동시에 어필하는 포트폴리오를 만든다.

### 1.2 기본 정보
- **개발자**: 임찬혁 (ChanHyeok Lim)
- **GitHub**: [limchanhyuck](https://github.com/limchanhyuck)
- **이메일**: dlacksgur311@gmail.com
- **배포 플랫폼**: GitHub Pages (`limchanhyuck.github.io`)

### 1.3 기술 스택 (포트폴리오 사이트 자체)
- **프레임워크**: React 18+ (Vite로 빌드)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS 또는 Styled Components
- **3D/애니메이션**: Three.js (React Three Fiber), Framer Motion, tsParticles
- **배포**: GitHub Pages (`gh-pages` 패키지)
- **패키지 매니저**: npm 또는 yarn

---

## 2. 디자인 컨셉: "Texas Cowboy / Wild West"

### 2.1 비주얼 키워드
- 사막, 석양, 황야, 먼지, 별이 쏟아지는 밤하늘
- 나무 질감, 밧줄, 가죽, 녹슨 금속
- 빈티지 포스터, 워난티드(Wanted) 스타일 타이포그래피
- 따뜻한 어스톤(갈색, 주황, 황금색) + 깊은 남색 밤하늘

### 2.2 컬러 팔레트

| 용도 | 색상 | HEX |
|------|------|-----|
| 배경 (메인) | 다크 브라운/밤하늘 | `#1A0F0A` |
| 배경 (서브) | 모래/사막 | `#2C1B0E` |
| 포인트 1 | 석양 오렌지 | `#D4731A` |
| 포인트 2 | 골드/황금 | `#C9A227` |
| 텍스트 (메인) | 크림/아이보리 | `#F5E6C8` |
| 텍스트 (서브) | 먼지 회색 | `#A89279` |
| 강조 | 레드 (위험/CTA) | `#8B2500` |
| 하늘/밤 | 딥 네이비 | `#0D1B2A` |

### 2.3 타이포그래피
- **헤딩**: 서부 스타일 세리프 폰트 — `Rye`, `Playfair Display`, 또는 `Bungee Shade` (Google Fonts)
- **본문**: 깔끔한 산세리프 — `Inter`, `Fira Code` (코드 블록)
- **강조 텍스트**: Wanted 포스터 스타일 커스텀 처리

### 2.4 UI 요소 스타일
- **카드**: 나무 판자 또는 가죽 질감 배경, 밧줄 테두리 또는 못(nail) 장식
- **버튼**: 가죽 버튼 느낌, 호버 시 불꽃 또는 먼지 파티클
- **구분선**: 밧줄 또는 가시철조망 SVG
- **아이콘**: 서부 테마 커스텀 아이콘 (총, 모자, 말발굽, 선인장 등)
- **커서**: 커스텀 커서 (십자선 또는 카우보이 모자)
- **스크롤바**: 커스텀 스타일 (나무/가죽 질감)

---

## 3. 페이지 구조 및 섹션

사이트는 **싱글 페이지 애플리케이션 (SPA)** 으로 구성하며, 부드러운 스크롤로 각 섹션을 탐색한다. 네비게이션 바는 상단 고정.

### 3.1 Navigation Bar
- 상단 고정, 스크롤 시 배경 블러/반투명 처리
- 로고: 브랜딩 마크 (카우보이 모자 + 이니셜 "CL" 조합)
- 메뉴 항목: Home, About, Skills, Projects, Timeline, Blog, Contact
- 모바일: 햄버거 메뉴 (문이 열리는 살룬도어 애니메이션)
- 현재 섹션 하이라이트 (active indicator)

### 3.2 Section 1: Hero (랜딩)
**컨셉**: 광활한 서부 사막 풍경, 석양이 지는 배경

- **3D 배경 시/**: Three.js로 구현한 사막 + 석양 장면
  - 천천히 움직이는 구름
  - 별이 반짝이는 하늘 (시간에 따라 낮/밤 전환 or 패럴랙스)
  - 먼지 파티클이 바람에 날리는 효과
  - 마우스 움직임에 따른 패럴랙스 반응
- **타이핑 애니메이션**:
  - "Welcome to the Wild West of Code"
  - "Building scalable backend systems"
  - "From idea to deployment"
  - (GitHub README 타이핑 애니메이션과 연동될 내용)
- **CTA 버튼**: "Explore My Trail" → Projects 섹션으로 스크롤
- **이름/직함**: 큰 서부 스타일 폰트로 "ChanHyeok Lim" + "Backend Engineer"

### 3.3 Section 2: About Me
**컨셉**: Wanted 포스터 스타일

- **레이아웃**: 빈티지 Wanted 포스터 형태의 카드
  - "WANTED" 헤더 (또는 "ABOUT THIS COWBOY")
  - 프로필 이미지 (원형, 빈티지 필터)
  - 간단한 자기소개 텍스트
- **내용**:
  - Backend 중심 개발 — Spring Boot + JPA/MyBatis 기반
  - Docker 기반 개발 환경 구성
  - 서버 아키텍처 설계에 관심
  - 실제 서비스를 만드는 걸 좋아함
- **애니메이션**: 스크롤 인 시 포스터가 벽에 못 박히는 듯한 효과

### 3.4 Section 3: Tech Stack (기술 스택 시각화)
**컨셉**: 카우보이의 무기고/장비 진열장

- **시각화 방식**: 인터랙티브 스킬 맵 또는 육각형 그리드
  - 각 기술을 서부 아이템에 비유 (선택적)
  - 호버 시 숙련도 바 또는 간단한 설명 팝업
  - 카테고리별 그룹핑 with 애니메이션 필터
- **기술 목록**:

| 카테고리 | 기술 |
|----------|------|
| Backend | Java, Spring Boot, Python |
| Database | MySQL, PostgreSQL, Redis |
| ORM/Data Access | JPA (Hibernate), MyBatis |
| Frontend | JavaScript, React |
| DevOps | Docker, Linux |

- **애니메이션**: 각 아이템이 스크롤 시 하나씩 등장 (staggered fade-in), 3D 회전 효과

### 3.5 Section 4: Projects (프로젝트 상세)
**컨셉**: 현상금 게시판 (Bounty Board)

- **레이아웃**: 나무 게시판에 핀으로 꽂힌 프로젝트 카드들
- **각 프로젝트 카드 구성**:
  - 프로젝트명 (Wanted 포스터 스타일 헤더)
  - 한 줄 설명
  - 사용 기술 태그 (뱃지 스타일)
  - 스크린샷/GIF 미리보기
  - GitHub 링크 버튼
  - (선택) 라이브 데모 링크
- **프로젝트 목록**:

#### 📌 Loggy
- **설명**: Docker 기반 로컬 로그 수집 및 관리 시스템
- **기술**: Spring Boot, Redis, Docker
- **GitHub**: https://github.com/limchanhyuck/Loggy
- **상세 내용**: (프로젝트의 아키텍처, 해결한 문제, 핵심 기능 등을 추가)

#### 📌 Diet Coach
- **설명**: 식단 관리 및 코칭 서비스
- **기술**: (실제 사용한 스택으로 업데이트 필요)
- **GitHub**: https://github.com/limchanhyuck/DietCoach
- **상세 내용**: (프로젝트의 아키텍처, 해결한 문제, 핵심 기능 등을 추가)

- **인터랙션**:
  - 카드 호버 시 살짝 들어올려지는 3D tilt 효과
  - 클릭 시 모달 또는 상세 페이지로 전환 (카드 flip 애니메이션)
  - 필터링: 기술 스택별 프로젝트 필터

### 3.6 Section 5: Timeline (타임라인/경력)
**컨셉**: 서부 여행 지도 / 기찻길 노선도

- **레이아웃**: 수직 타임라인, 각 노드가 기차역처럼 표현
  - 좌우 교차 배치 (데스크톱), 단일 열 (모바일)
  - 각 노드: 날짜, 이벤트 제목, 설명, 관련 기술 태그
- **내용 예시** (실제 내용으로 업데이트 필요):
  - 개발 시작 시점
  - 주요 프로젝트 시작/완료
  - 학력/교육
  - 경력 (있을 경우)
  - 자격증/수료
- **애니메이션**: 스크롤 시 기차가 레일 위를 달리는 효과, 각 역에 도착하면 콘텐츠 fade-in

### 3.7 Section 6: Blog (블로그/글 연동)
**컨셉**: 서부 신문(Western Gazette) 스타일

- **레이아웃**: 빈티지 신문 느낌의 카드 그리드
- **연동 방식**: Notion API 연동
  - Notion 데이터베이스에서 블로그 글 목록을 자동으로 가져옴
  - `@notionhq/client` SDK 사용
  - Notion DB 필수 속성: `Title`(제목), `Date`(날짜), `Tags`(태그, 멀티셀렉트), `Summary`(요약 텍스트), `Thumbnail`(썸네일 URL), `Slug`(URL 경로), `Published`(체크박스, 공개 여부 필터)
  - GitHub Pages는 정적 호스팅이므로, **빌드 타임에 Notion API를 호출**하여 글 목록을 JSON으로 미리 생성하거나, **Notion API를 클라이언트에서 직접 호출하는 프록시 서버**(Cloudflare Workers 등)를 사용
  - 추천 방식: 빌드 스크립트(`prebuild`)에서 Notion API 호출 → `src/data/posts.json` 자동 생성 → 빌드 시 포함
- **카드 구성**: 제목, 날짜, 태그, 미리보기 텍스트, 썸네일
- **애니메이션**: 신문이 바람에 날리듯 카드 등장

### 3.8 Section 7: Contact
**컨셉**: 전보/텔레그램 보내기

- **레이아웃**: 빈티지 전보 양식 스타일 Contact Form
- **필드**: 이름, 이메일, 메시지
- **전송 방식**: EmailJS 또는 Formspree (서버리스)
- **추가 링크**: GitHub, Gmail, LinkedIn, Blog 아이콘 버튼
- **애니메이션**: 전송 시 전보가 날아가는 효과

### 3.9 Footer
- 카우보이가 석양을 향해 걸어가는 실루엣 SVG
- 저작권 표시: "© 2025 ChanHyeok Lim. Built with grit and code."
- 맨 위로 스크롤 버튼 (라쏘/올가미 애니메이션)

---

## 4. 인터랙션 및 애니메이션 상세

### 4.1 3D 요소 (Three.js / React Three Fiber)
| 요소 | 위치 | 설명 |
|------|------|------|
| 사막 + 석양 장면 | Hero | 배경으로 깔리는 3D 환경. 마우스 패럴랙스 반응 |
| 먼지/모래 파티클 | Hero, 전환 시 | tsParticles로 바람에 날리는 먼지 |
| 별 필드 | Hero (밤) | 반짝이는 별, 유성 효과 |
| 텀블위드 (회전초) | 로딩/전환 | 페이지 로딩 시 굴러가는 회전초 |

### 4.2 스크롤 애니메이션 (Framer Motion / GSAP)
| 애니메이션 | 적용 위치 | 설명 |
|-----------|----------|------|
| Fade In Up | 모든 섹션 | 스크롤 시 아래에서 위로 등장 |
| Staggered Children | Skills, Projects | 자식 요소가 순차적으로 나타남 |
| Parallax Scroll | 배경 레이어 | 깊이감 있는 다층 스크롤 |
| Card Tilt | 프로젝트 카드 | 마우스 위치에 따른 3D 기울기 |
| Counter Animation | Skills 숙련도 | 숫자가 올라가는 카운팅 효과 |
| Typewriter | Hero | 텍스트 한 글자씩 타이핑 |

### 4.3 마이크로 인터랙션
- 버튼 호버: 먼지 파티클 burst
- 링크 호버: 밑줄이 밧줄처럼 꼬이는 효과
- 페이지 전환: 석양 빛이 퍼지는 wipe 효과
- 로딩 상태: 텀블위드가 굴러가는 로딩 스피너
- 스크롤 진행률: 상단에 골드 컬러 프로그레스 바

### 4.4 사운드 효과 (선택적, 토글 가능)
- 버튼 클릭: 가벼운 총소리/박차 소리
- 섹션 전환: 바람 소리
- 기본은 음소거, 토글 버튼으로 on/off

---

## 5. 반응형 디자인

### 5.1 브레이크포인트
| 디바이스 | 너비 | 비고 |
|---------|------|------|
| 모바일 | ~767px | 단일 컬럼, 3D 효과 경량화 |
| 태블릿 | 768~1023px | 2컬럼 그리드 |
| 데스크톱 | 1024px~ | 풀 레이아웃, 모든 애니메이션 활성 |

### 5.2 성능 고려
- 모바일에서는 3D 장면을 정적 이미지 또는 간단한 CSS 애니메이션으로 대체
- `prefers-reduced-motion` 미디어 쿼리 지원
- 이미지 lazy loading
- 3D 리소스 동적 import (코드 스플리팅)

---

## 6. 기술 구현 가이드

### 6.1 프로젝트 구조
```
portfolio/
├── public/
│   ├── assets/
│   │   ├── textures/       # 나무, 가죽, 사막 텍스처
│   │   ├── models/         # 3D 모델 (gltf/glb)
│   │   ├── images/         # 프로젝트 스크린샷, 프로필
│   │   └── sounds/         # 효과음 (선택)
│   └── favicon.ico         # 카우보이 모자 파비콘
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ScrollProgress.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── Blog.tsx
│   │   │   └── Contact.tsx
│   │   ├── three/
│   │   │   ├── DesertScene.tsx
│   │   │   ├── DustParticles.tsx
│   │   │   └── StarField.tsx
│   │   └── ui/
│   │       ├── WantedCard.tsx
│   │       ├── WoodCard.tsx
│   │       ├── RopeDivider.tsx
│   │       ├── CowboyButton.tsx
│   │       └── TypeWriter.tsx
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   ├── useParallax.ts
│   │   └── useMediaQuery.ts
│   ├── types/
│   │   ├── project.ts      # 프로젝트 타입 정의
│   │   ├── skill.ts        # 기술 스택 타입 정의
│   │   ├── timeline.ts     # 타임라인 타입 정의
│   │   └── blog.ts         # 블로그 글 타입 정의
│   ├── data/
│   │   ├── projects.ts     # 프로젝트 데이터
│   │   ├── skills.ts       # 기술 스택 데이터
│   │   ├── timeline.ts     # 타임라인 데이터
│   │   └── posts.json      # Notion에서 빌드 시 자동 생성
│   ├── styles/
│   │   ├── global.css
│   │   ├── fonts.css
│   │   └── theme.ts        # 컬러, 타이포 상수
│   ├── utils/
│   │   └── animations.ts   # Framer Motion variants
│   ├── App.tsx
│   └── main.tsx
├── scripts/
│   └── fetch-notion.ts     # 빌드 전 Notion API 호출 스크립트
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

### 6.2 핵심 의존성
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@react-three/fiber": "^8.x",
    "@react-three/drei": "^9.x",
    "three": "^0.160.x",
    "framer-motion": "^10.x",
    "tsparticles": "^3.x",
    "react-tsparticles": "^2.x",
    "react-scroll": "^1.x",
    "react-intersection-observer": "^9.x",
    "@notionhq/client": "^2.x",
    "emailjs-com": "^3.x",
    "react-icons": "^4.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/react": "^18.x",
    "@types/react-dom": "^18.x",
    "@types/three": "^0.160.x",
    "vite": "^5.x",
    "tailwindcss": "^3.x",
    "gh-pages": "^6.x",
    "@vitejs/plugin-react": "^4.x",
    "tsx": "^4.x"
  }
}
```

### 6.3 배포 설정 (GitHub Pages)
```js
// vite.config.js
export default defineConfig({
  base: '/', // limchanhyuck.github.io 사용 시
  // base: '/repo-name/', // 서브 경로 사용 시
  plugins: [react()],
})
```

```json
// package.json scripts
{
  "scripts": {
    "dev": "vite",
    "prebuild": "tsx scripts/fetch-notion.ts",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

---

## 7. SEO 및 메타데이터

```html
<title>ChanHyeok Lim | Backend Engineer Portfolio</title>
<meta name="description" content="Backend Engineer 임찬혁의 포트폴리오. Spring Boot, Docker, Java 기반 시스템 설계.">
<meta property="og:title" content="ChanHyeok Lim - Backend Engineer">
<meta property="og:description" content="I don't just write code. I build systems.">
<meta property="og:image" content="og-image.png">
<meta property="og:url" content="https://limchanhyuck.github.io">
```

---

## 8. 데이터 파일 예시

### 8.1 projects.ts
```ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  demo: string | null;
  image: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 'loggy',
    title: 'Loggy',
    description: 'Docker 기반 로컬 로그 수집 및 관리 시스템',
    longDescription: '(상세 설명 추가)',
    tech: ['Spring Boot', 'Redis', 'Docker'],
    github: 'https://github.com/limchanhyuck/Loggy',
    demo: null,
    image: '/assets/images/loggy.png',
    highlights: [
      '실시간 로그 수집 파이프라인 구축',
      'Redis 기반 캐싱으로 조회 성능 최적화',
      'Docker Compose로 원클릭 배포 환경 구성'
    ]
  },
  {
    id: 'diet-coach',
    title: 'Diet Coach',
    description: '식단 관리 및 코칭 서비스',
    longDescription: '(상세 설명 추가)',
    tech: ['Spring Boot', 'MySQL', 'React'],
    github: 'https://github.com/limchanhyuck/DietCoach',
    demo: null,
    image: '/assets/images/diet-coach.png',
    highlights: [
      '(핵심 기능 1)',
      '(핵심 기능 2)',
      '(핵심 기능 3)'
    ]
  }
];
```

### 8.2 skills.ts
```ts
export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  [key: string]: Skill[];
}

export const skills: SkillCategory = {
  backend: [
    { name: 'Java', icon: 'java', level: 85 },
    { name: 'Spring Boot', icon: 'spring', level: 80 },
    { name: 'Python', icon: 'python', level: 65 },
  ],
  database: [
    { name: 'MySQL', icon: 'mysql', level: 80 },
    { name: 'PostgreSQL', icon: 'postgresql', level: 70 },
    { name: 'Redis', icon: 'redis', level: 70 },
  ],
  orm: [
    { name: 'JPA (Hibernate)', icon: 'hibernate', level: 75 },
    { name: 'MyBatis', icon: 'mybatis', level: 75 },
  ],
  frontend: [
    { name: 'JavaScript', icon: 'javascript', level: 70 },
    { name: 'React', icon: 'react', level: 65 },
  ],
  devops: [
    { name: 'Docker', icon: 'docker', level: 80 },
    { name: 'Linux', icon: 'linux', level: 70 },
  ]
};
```

### 8.3 timeline.ts
```ts
export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  tags: string[];
  type: 'project' | 'education' | 'career' | 'certificate';
}

export const timeline: TimelineEvent[] = [
  {
    date: '2024.XX',
    title: '(이벤트 제목)',
    description: '(설명)',
    tags: ['Spring Boot', 'Docker'],
    type: 'project'
  },
  // ... 실제 타임라인 데이터로 채워야 함
];
```

### 8.4 Notion 블로그 연동 (scripts/fetch-notion.ts)
```ts
// 빌드 전 실행되어 Notion DB에서 블로그 글을 가져와 JSON으로 저장
import { Client } from '@notionhq/client';
import fs from 'fs';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  thumbnail: string | null;
  slug: string;
  notionUrl: string;
}

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID!;

async function fetchPosts(): Promise<BlogPost[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: { property: 'Published', checkbox: { equals: true } },
    sorts: [{ property: 'Date', direction: 'descending' }],
  });

  return response.results.map((page: any) => ({
    id: page.id,
    title: page.properties.Title.title[0]?.plain_text ?? '',
    date: page.properties.Date.date?.start ?? '',
    tags: page.properties.Tags.multi_select.map((t: any) => t.name),
    summary: page.properties.Summary.rich_text[0]?.plain_text ?? '',
    thumbnail: page.properties.Thumbnail?.url ?? null,
    slug: page.properties.Slug.rich_text[0]?.plain_text ?? page.id,
    notionUrl: page.url,
  }));
}

fetchPosts().then(posts => {
  fs.writeFileSync('src/data/posts.json', JSON.stringify(posts, null, 2));
  console.log(`✅ ${posts.length}개 블로그 글 가져옴`);
});
```

**필요한 환경 변수** (`.env`):
```
NOTION_API_KEY=secret_xxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxx
```

---

## 9. 체크리스트 (구현 우선순위)

### Phase 1: 기본 구조 (MVP)
- [ ] Vite + React 프로젝트 초기화
- [ ] 기본 라우팅 및 섹션 레이아웃
- [ ] Navbar + Footer
- [ ] Hero 섹션 (타이핑 애니메이션)
- [ ] About 섹션
- [ ] Skills 섹션 (정적)
- [ ] Projects 섹션 (카드 리스트)
- [ ] Contact 섹션 (EmailJS 연동)
- [ ] 반응형 기본 대응
- [ ] GitHub Pages 배포 파이프라인

### Phase 2: 서부 테마 적용
- [ ] 컬러 팔레트 및 폰트 적용
- [ ] 카우보이 테마 UI 컴포넌트 (WantedCard, WoodCard 등)
- [ ] 커스텀 구분선, 아이콘
- [ ] 배경 텍스처 및 질감 적용
- [ ] 커스텀 커서

### Phase 3: 3D 및 애니메이션
- [ ] Hero 3D 사막 장면 (Three.js)
- [ ] 먼지 파티클 효과
- [ ] 스크롤 애니메이션 (Framer Motion)
- [ ] 카드 3D tilt 효과
- [ ] 타임라인 기차 애니메이션
- [ ] 마이크로 인터랙션

### Phase 4: 콘텐츠 & 마무리
- [ ] Timeline 실제 데이터 입력
- [ ] Blog Notion API 연동 (fetch-notion.ts 스크립트 + 빌드 파이프라인)
- [ ] 프로젝트 상세 내용 보강
- [ ] SEO 메타데이터
- [ ] 성능 최적화 (Lighthouse 90+ 목표)
- [ ] 사운드 효과 (선택)

---

## 10. 참고 레퍼런스

### 디자인 영감
- [Wanted Poster Generator](https://www.wantedposter.com/) — Wanted 포스터 스타일 참고
- [Wild West Typography](https://fonts.google.com/?query=western) — 서부 폰트
- [Three.js Desert Demo](https://threejs.org/examples/) — 3D 사막 장면 참고

### 기술 참고
- [React Three Fiber 공식 문서](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion 공식 문서](https://www.framer.com/motion/)
- [GitHub Pages + Vite 배포 가이드](https://vitejs.dev/guide/static-deploy.html#github-pages)

---

## 11. 주의사항 (클로드 코드에게)

1. **Phase 1을 먼저 완성**한 후 점진적으로 테마와 애니메이션을 적용할 것
2. **3D 요소는 성능에 주의** — 모바일 fallback 반드시 구현
3. **데이터 파일은 분리** — `src/data/` 폴더에서 관리하여 콘텐츠 수정이 쉽도록
4. **`(추가 필요)` 표시된 부분**은 사용자에게 확인 후 채울 것
5. **커밋은 기능 단위**로 나눠서 할 것
6. 배포 URL은 `https://limchanhyuck.github.io`
7. **Notion 연동 설정**: Notion Integration 생성 후 API Key 발급, 블로그용 DB를 Integration에 공유 필요. `.env`에 `NOTION_API_KEY`와 `NOTION_DATABASE_ID` 설정. GitHub Actions 배포 시 Secrets로 관리할 것
8. **프로젝트 초기화 명령어**: `npm create vite@latest portfolio -- --template react-ts`

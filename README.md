# FootPrint - 여행 발자취 커뮤니티

나의 여행 발자취를 기록하고 공유하는 커뮤니티 서비스의 프론트엔드입니다.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3 + shadcn/ui
- **State Management**: Zustand
- **Data Fetching**: TanStack React Query
- **HTTP Client**: Axios
- **Font**: Pretendard

## Getting Started

```bash
# 의존성 설치
npm install

# 환경변수 설정
cp .env.example .env.local

# 개발 서버 실행
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## Scripts

| 명령어             | 설명               |
| ------------------ | ------------------ |
| `npm run dev`      | 개발 서버 실행     |
| `npm run build`    | 프로덕션 빌드      |
| `npm run start`    | 프로덕션 서버 실행 |
| `npm run lint`     | ESLint 검사        |
| `npm run lint:fix` | ESLint 자동 수정   |
| `npm run format`   | Prettier 포맷팅    |

## Branch Strategy

- `main` - 프로덕션 배포 브랜치
- `dev` - 개발 통합 브랜치
- `feat/*` - 기능 개발 브랜치

# Resumates (이력서 작성 플랫폼)

2024년 6월 20일~ 2024년 7월 24일 (3인 팀프로젝트)

---

## 1. 프로젝트 개요

- 팀프로젝트 | 2024년 6월 20일~ 2024년 7월 24일
- 역할: 풀스택 개발 (프론트엔드 + 백엔드)

## 2. 기술 스택

### 프론트엔드
- React 18.3.1 - 메인 프레임워크
- Styled Components - CSS-in-JS 스타일링
- React Router DOM - 클라이언트 사이드 라우팅
- Axios - HTTP 클라이언트
- React Easy Crop - 이미지 크롭 기능
- React To Print - 이력서 PDF 출력

### 백엔드
- Node.js - 서버 런타임
- Express.js - 웹 프레임워크
- MongoDB + Mongoose - 데이터베이스
- JWT - 인증 토큰
- Multer - 파일 업로드
- Nodemailer - 이메일 발송

### 배포
- 프론트엔드: Vercel
- 백엔드: Render
- 데이터베이스: MongoDB Atlas

## 4. 주요기능

### 1. 사용자 인증
- 회원가입/로그인
- JWT 토큰 기반 인증
- 소셜 로그인 (네이버)

### 2. 이력서 작성
- 3가지 템플릿 (Simple, Normal, Casual)
- 드래그 앤 드롭 이미지 업로드
- 실시간 미리보기
- PDF 다운로드

### 3. 사용자 관리
- 프로필 이미지 업로드/크롭
- 계정 정보 수정
- 이메일 설정

### 4. 이력서 관리
- 이력서 목록 조회
- 이력서 수정/삭제
- 마이페이지

## 5. 아키텍처

1. 프론트엔드 구조
```bash
client/src/
├── components/     # 재사용 컴포넌트
├── pages/         # 페이지 컴포넌트
├── api/           # API 통신
├── hooks/         # 커스텀 훅
├── style/         # 스타일 컴포넌트
└── utils/         # 유틸리티 함수
```

2. 백엔드 구조

```bash
server/
├── controllers/   # 비즈니스 로직
├── models/        # 데이터 모델
├── routes/        # API 라우트
├── middleware/    # 미들웨어
└── upload/        # 파일 업로드
```
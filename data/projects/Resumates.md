# Resumates - 이력서 작성 플랫폼

## 1. 프로젝트 개요

| 항목           | 내용                                                                 |
|----------------|----------------------------------------------------------------------|
| **프로젝트명** | Resumates (Resume + Mates) |
| **기간**       | 2024년 6월 20일 ~ 2024년 7월 24일 (총 5주)                          |
| **소속**       | 한국소프트웨어교육원 Node.JS 양성과정 - 3인 팀프로젝트 |
| **설명**       | 3가지 템플릿을 제공하고 개인 맞춤형 이력서를 쉽고 빠르게 작성할 수 있는 온라인 플랫폼 |

## 2. 보유 기술 스택

- **Frontend**: React 18, Styled Components, Axios, React Router DOM
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT, bcrypt
- **File Upload**: Multer, React Easy Crop
- **Email**: Nodemailer
- **Deployment**: Vercel (Frontend), Render (Backend)
- **Tools**: npm, GitHub, Postman

## 3. 프로젝트 세부 내용

### ✅ 담당 역할

- **풀스택 개발** - 프론트엔드 & 백엔드 개발 담당
- **프론트엔드**: React 기반 사용자 인터페이스 구현
- **백엔드**: Express.js 기반 RESTful API 서버 구축
- **데이터베이스**: MongoDB 스키마 설계 및 연동
- **배포**: Vercel + Render 클라우드 배포

### 🛠️ 주요 기술

- **React 18** 기반 컴포넌트 기반 개발 및 상태 관리
- **Styled Components**를 활용한 CSS-in-JS 스타일링
- **Node.js & Express.js** 기반 서버 구축 및 RESTful API 개발
- **MongoDB & Mongoose**를 활용한 데이터베이스 설계 및 CRUD 기능 구현
- **JWT & bcrypt**를 이용한 보안 인증 시스템 구현
- **Multer**를 활용한 파일 업로드 및 이미지 처리

### 📈 성과 / 개선한 점

- **사용자 경험 향상**: 실시간 미리보기와 드래그 앤 드롭으로 직관적인 이력서 작성
- **보안 강화**: JWT 토큰 기반 인증 및 bcrypt를 통한 비밀번호 암호화
- **성능 최적화**: 이미지 크롭 및 압축을 통한 파일 업로드 최적화

### 🎯 주요 기능

- **회원 관리**: 회원가입, 로그인, 프로필 관리, 계정 설정
- **이력서 작성**: 3가지 템플릿(Simple, Normal, Casual) 제공
- **실시간 미리보기**: 작성과 동시에 결과를 확인할 수 있는 실시간 렌더링
- **파일 업로드**: 프로필 이미지 업로드 및 크롭 기능
- **PDF 다운로드**: 완성된 이력서를 PDF 형태로 다운로드
- **이메일 발송**: Nodemailer를 활용한 이메일 알림 기능
- **이력서 관리**: 작성/수정/삭제 및 마이페이지 기능

### 🔧 기술적 구현

- **프론트엔드 아키텍처**: 컴포넌트 기반 구조로 재사용성 및 유지보수성 향상
- **상태 관리**: React Context API를 활용한 전역 상태 관리
- **라우팅**: React Router DOM을 활용한 SPA 구현
- **API 통신**: Axios를 활용한 HTTP 클라이언트 구현
- **데이터베이스 설계**: MongoDB와 Mongoose를 활용한 스키마 설계
- **파일 처리**: Multer를 활용한 이미지 업로드 및 React Easy Crop을 통한 이미지 크롭

### 🤝 팀 협업

- **팀 구성**: 3인 팀 프로젝트
- **역할 분담**: 풀스택 개발 담당 (프론트엔드 & 백엔드)
- **협업 도구**: GitHub를 활용한 버전 관리 및 협업
- **의사소통**: 정기적인 회의를 통한 기능 기획 및 개발 진행

### 🚀 배포 및 운영

- **프론트엔드 배포**: Vercel을 활용한 React 앱 배포
- **백엔드 배포**: Render를 활용한 Express.js 서버 배포
- **데이터베이스**: MongoDB Atlas 클라우드 데이터베이스 활용
- **환경 설정**: 개발/프로덕션 환경 분리 및 환경변수 관리

## 4. 프로젝트 구조

### Frontend 구조
```
client/src/
├── components/     # 재사용 컴포넌트
│   ├── Header/     # 헤더 컴포넌트
│   ├── Modal/      # 모달 컴포넌트
│   ├── resumeForm/ # 이력서 작성 폼
│   └── resumeTemplate/ # 이력서 템플릿
├── pages/          # 페이지 컴포넌트
├── api/            # API 통신
├── hooks/          # 커스텀 훅
├── style/          # 스타일 컴포넌트
└── utils/          # 유틸리티 함수
```

### Backend 구조
```
server/
├── controllers/    # 비즈니스 로직
├── models/         # 데이터 모델
├── routes/         # API 라우트
├── middleware/     # 미들웨어
└── upload/         # 파일 업로드
```


---

> 📌 **비고**: 3인 팀 프로젝트에서 풀스택 개발을 담당하여 React와 Node.js를 활용한 실무 수준의 웹 애플리케이션을 구현했습니다. 특히 실시간 미리보기와 PDF 다운로드 기능을 통해 사용자 경험을 고려하였고, 팀 협업을 통한 소통 능력과 문제 해결 능력도 함께 향상시킬 수 있었습니다. 
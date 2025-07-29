# With Chu Forever | 웨딩 청첩장

2025.07.20 ~ 진행중(개인)

---

## 1. 프로젝트 개요
- 개인프로젝트 | 2025.07.20 ~ 진행중(개인)
- 사용기술: React 19, TypeScript, Vite 환경, 

## 2. 기획 배경/목적

- 커스텀 가능한 모던한 청첩장을 만들기 위함
- 친구의 특별한 순간을 위한 의미 있는 기록

## 3. 주요 기능

1. 반응형 디자인

2. 인터랙티브 갤러리
  - Swiper 기반 이미지 슬라이더
  - 전체화면 이미지 뷰어

3. 위치 서비스
  - akao Maps API
  - 교통편 안내 (버스/지하철)

4. 소셜 기능
  - 카카오톡 공유
  - 링크 복사 기능
  - 참석 여부 모달

5. 애니메이션 효과
  - CSS Keyframes 애니메이션

## 4. 문제 해결 경험

1. 이미지 갤러리 (Swiper) 문제
문제: 선택한 이미지가 첫 번째만 표시되고, 다른 이미지들은 보이지 않는 문제
해결 과정:
Swiper의 initialSlide, loop, slideTo props 조정
key prop을 통한 강제 리렌더링 구현
CSS 스타일링으로 이미지 가시성 확보
useEffect와 onSwiper 콜백 최적화
결과: 모든 이미지가 정상적으로 표시되고 슬라이드 기능 완벽 작동

2. 환경 변수 문제
문제: process is not defined 에러 (Node.js vs Vite 환경 차이)
해결 과정:
process.env → import.meta.env 변경
Vite 환경에 맞는 환경 변수 접근 방식 적용
개발/운영 환경 분리 설정
결과: Kakao Maps API 정상 작동

3. Kakao Maps API 통합
문제: NotAuthorizedError, 지도가 렌더링되지 않는 문제
해결 과정:
Kakao Dev Center에서 서비스 활성화
API 키 환경 변수 설정
SDK 로딩 순서 최적화
마커 및 지도 컨트롤 구현
결과: 완벽한 지도 기능 구현

4. Sass 컴파일 문제
문제: Undefined mixin, Can't find stylesheet to import 에러
해결 과정:
@import → @use 구문 변경 (Sass 최신 문법)
Vite alias 설정 최적화
@types/node 설치로 타입 에러 해결
결과: SCSS 모듈 정상 작동

5. 배포 환경 문제
문제: Vercel 빌드 에러 (Could not resolve "./SCSS/global.scss")
해결 과정:
파일 경로 대소문자 수정 (Linux 환경 대응)
빌드 설정 최적화
환경별 API URL 분리
결과: 성공적인 프론트엔드/백엔드 배포

## 5. 배포 / 링크

1. Git  Hub:

```bash
https://with-chu-forever.vercel.app/
```

2. Backend API

```bash
https://with-chu-forever-1.onrender.com/wedding
```

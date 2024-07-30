## 👩🏻프로젝트 소개

#### 지금까지 만들었던 프로젝트 내용을 정리하고, 취업 준비를 위한 포트폴리오 용도의 웹 사이트입니다.

1. HOME, About, Project, Contact 화면으로 구성되어 있습니다.
2. Project에서 사이드 프로젝트 관련하여 기술들을 확인할수 있습니다.
3. Contact 화면에서 메일 전송 기능이 있습니다.

<br/>

<!-- ### 🎥데모 영상 -->

## 🛠기술 스택

- Frontend: Next.js, TypeScript, tailwind css
- Deployment: Vercel

<!-- <p>
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>
</p> -->

## 🏃🏻‍♀️로컬 실행 방법

1. 레포지토리를 클론하고자 하는 디렉토리에서 아래 명령어 수행

```
git clone <레포지토리 주소>
```

<br>
2. 클론한 디렉토리에서 아래 명령어를 통해 필요한 module설치

```
npm install
```

<br>
3. next 앱 실행

```
npm run start
```

## 💭문제 해결 기록
### 1. 메일 발송 API 배포 환경 오류 해결

 **문제점**:
 <br/>
 개발 환경에서는 메일 발송 기능이 정상적으로 작동하지만, Vercel 배포 환경에서는 `/api/contact` 엔드포인트 호출 시 500 Internal Server Error 가 발생
   
**해결 방법**:
<br/>
1. Vercel 프로젝트 환경 변수 설정
   - Key:`NEXT_PUBLIC_API_BASE_URL`
   - Value: `https://ksh-portfolio.vercel.app`
2. API 요청 코드 수정
    - 클라이언트 코드에서 API 기본 URL을 환경 변수를 통해 동적으로 설정하도록 변경
3. 서버 로그 확인
   - Vercel 대시보드에서 배포 로그를 통해 구체적인 에러 메시지를 확인하고, 필요한 수정 사항 적용
4. API 핸들러 코드 개선
   - 서버 측 코드에서 구체적인 에러 메시지를 출력하도록 수정하여 디버깅을 용이하게 함

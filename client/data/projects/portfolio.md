# 포트폴리오 웹사이트 (Next.js)

2023.04.01 ~ 2023.04.20 (개인프로젝트)

---

## 🔗URL

https://ksh-portfolio.vercel.app/

## ⚒️Technology Stack

- Frontend: Next.js, TypeScript, tailwind css
- Deployment: Vercel

## 📝Summary

취업 준비를 위한 **포트폴리오 용도의 웹 사이트** 입니다.
직접 프로젝트를 만들어보고 Next.js 서버사이드와 클라이언트 서버 렌더링에 대해 이해할수 있었습니다. 서버사이드 렌더링 장점인 검색엔진 최적화 SEO를 지원하면서 동시에 React가 지원하는 클라이언트 사이드 렌더링도 적절하게 사용하면서 효율적으로 앱을 구성하여 만들수 있음을 경험하였습니다. 항상 배포하는것을 어렵게 느꼈는데, Vercel로 이용하여 클릭 몇번으로 간단하게 배포를 할수 있어서 큰 장점도 느낄수 있었습니다

테일윈드 CSS를 사용하면서 각각이 컴포넌트에 스타일을 주면서 이전에 아이디와 클래스명을 검색하면서 스타일을 주는 번거로움을 덜어서 편리하였습니다.

- 테일윈드 CSS를 이용한 반응형 웹사이트
- 노드메일러 메일 발송 기능
- 클라이언트와 서버간의 통신 방법

### \* 주요 기능

- ✅ 간단한 자기소개
- ✅ 인적 사항
- ✅ 이력서
- ✅ 기술스택
- ✅ 프로젝트 경험
- ✅ 메일 발송 - 노드메일러

## 🙋‍♀️와이어 프레임

#### 전체페이지

- app > layout 페이지에서 body 태그 안에 자식태그로 전체 레이아웃 페이지를 구성
  ![portfolio](/images/projects/portfolio_1.png)

#### 헤더 - 네비게이션 바

- React-scroll 라이브러리를 사용하여 섹션마다 id를 주어 해당 페이지로 이동
- 모바일 화면으로 축소되었을 때 useState 상태값을 사용하였습니다. false일때, React-icon라이브러리를 사용하여 Menu버튼가 나타나고 true일땐 close버튼이 나타나는 토글 기능 구현
  ![portfolio](/images/projects/portfolio_2.png)

#### 자기소개 메인 페이지

- 하단화살표에 애니메이션 키프레임 추가 무한반복 효과
  ![portfolio](/images/projects/portfolio_3.png)

#### 기술스킬 소개 페이지

![portfolio](/images/projects/portfolio_4.png)

#### 프로젝트 페이지

- Json파일의 프로젝트 정보를 읽어와서 비동기로 동작하는 getAllProject()함수를 호출
- 이때, 타입 Project의 객체 정보를 배열형태로 반환
- 현재까지 Next.js버전에서 서로 다른 컴포넌트에서 async/await 사용시 타입에대한 정보가 명시 되지 않아 에러가 발생, 때문에 사용하는 컴포넌트 상단에 이코멘트 추가
- -webkit-line-clamp 속성을 사용하여 텍스트의 길이가 넘치면 말줄임표(...) 사용
  ![portfolio](/images/projects/portfolio_5.png)

#### Contact 페이지

- 메일발송 Nodemailer 라이브러리 사용
- 사용자가 입력한 정보의 유효성 검사 Yup 라이브러리 사용
  ![portfolio](/images/projects/portfolio_6.png)

## ⚙️Environment Setup

```bash
# Install JavaScript Packages
npm install

#Run Frontend Server
npm run dev
```

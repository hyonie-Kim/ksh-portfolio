# MileEASY 프로젝트

---

## 🔗URL

http://3.35.216.78:8080/

## ⚒️Technology Stack

- Frontend: HTML, CSS, JavaScript, jQuery, Bootstrap
- Backend: Node.js, EJS Template Engine, Express.js, Sequelize
- Database: MySQL
- Deployment: AWS(EC2)

## 📝Summary

**여행 MBTI 테스트를 통해 사용자 성향에 맞추어 여행지를 추천하는 웹 사이트** 입니다.
청년취업사관학교 용산 1기에서 지금까지 배웠던 내용을 바탕으로 만든 첫번째 팀 프로젝트입니다.
백엔드와 프론트엔드가 협업하는 과정에 대해서 배울수 있었습니다.
프론트 팀원들과 피그마를 사용하여 UI 틀을 잡고, 백엔드에 필요한 기술은 문서로 작성하여 노션과 슬랙을 통해 소통하였습니다. 팀원들과 git규칙을 정하여 어떤부분이 변경되었는지 협업할수 있었고, 필요한 지식은 서로 공유하면서 모르는 부분은 빠르게 학습할수 있었습니다.

주로 UI/UX 디자인은 시각적으로 재미있는 효과를 주기위해 애니메이션 효과로 구현을 하였습니다.

직접 프로젝트를 만들면서 데이터베이스 모델을 만들고, 사용자가 접근한 라우터를 통해 데이터를 처리하면서 MVC 패턴의 전체적인 흐름에 대해서도 이해할수 있었습니다.

### \* 주요 기능

- ✅ 회원가입 및 로그인/로그아웃
- ✅ 프로필 이미지
- ✅ MBTI 테스트
- ✅ 여행지 추천
- ✅ 방명록 작성 (커뮤니티)

## 🙋‍♀️담당 기능

#### 로그인/로그아웃 화면

- HTML contaienr Tag의 역할과 상속관계의 이해
- CSS display:flex에 대한이해
- getElementByName과 getElementByID()가 불러오는 데이터 구조의 이해
- addEventListener()를 통한 이벤트 구현

![mileEASY](/images/projects/mileEASY.png)

#### 회원정보 수정 페이지

- multiparty/form-data 이미지 파일 업로드 구현

#### 방명록 작성 페이지

- swiper라이브러리 슬라이드 기능
- ejs 템플릿엔진을 이용한 node.js 데이터 및 HTML 반복문 구현

## ⚙️Environment Setup

1. Git Clone

```bash
git clone https://github.com/MileEASY/MileEasy_repo.git
```

2. 서버 실행

```bash
npm install
node index.js
```

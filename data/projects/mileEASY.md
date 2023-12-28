# MileEASY 여행 MBTI 사이트

2022.12.01 ~ 2022.12.29 (5인 팀프로젝트)

---

![mileEASY](/images/projects/mileeasy.gif)

## 🔗URL

http://3.35.216.78:8080/

## ⚒️Technology Stack

- Frontend: HTML, CSS, JavaScript, jQuery, Bootstrap
- Backend: Node.js, EJS Template Engine, Express.js, Sequelize
- Database: MySQL
- Deployment: AWS(EC2)

## 📝Summary

**여행 MBTI 검사를 통해서 사용자 성향에 맞게 국내여행지를 추천하는 웹 사이트** 입니다.
기획 단계에서 피그마를 사용하여 UI 틀을 잡고, 주로 UI/UX 디자인은 시각적으로 재미있는 효
과를 주기위해 애니메이션 효과로 동적 구현을 하였습니다.
MVC 패턴을 사용하여 UI영역과 로직 영역을 분리하여 작업하였고, Express EJS템플릿을 활
용하여 간단한 웹서버를 구축하였습니다. 이를 통해서 클라이언트 단에서 HTTP Response로
오는 데이터를 표현하는데 편리하였습니다.
HTML구조와 비슷한 새로운 구조를 배워서 사용함으로써 재미있는 경험이 되었습니다.

### \* 이슈

마이페이지 구현 시 이미지 파일과 텍스트 값을 form에 담기 위해서 enctype을
multipart/form-data로 변경
이때 req.body로 요청 시 body에 데이터가 담기지 않는 문제가 발생

### \* 해결

노드 환경에서 사용하는 multiparty 패키지를 사용하여 form 데이터를 파싱
클라이언트에서 req.body로 보낸 텍스트 값과 path에 각 경로를 지정하여 어떤 이미지가 전송
되었는지 확인 가능

### \* 역할 및 기여도

- 프론트엔드, 60%

### \* 프로젝트 총 인원

- 백엔드 2명, 프론트엔드 3명 총 5명

## 🙋‍♀️구현 기능

#### 로그인/로그아웃 화면

![mileEASY](/images/projects/mile_1.png)

#### 회원정보 수정 페이지

- HTML 폼 POST방식 전송을 할때 데이터를 인코딩 타입을 multiparty/form-data 를 사용하여 이미지 파일 업로드 구현
  ![mileEASY](/images/projects/mile_2.png)

#### 방명록 등록 페이지

![mileEASY](/images/projects/mile_3.png)

### 방명록 읽기 페이지

- swiper 슬라이드 플러그인을 이용해서 슬라이드를 구현

  ![mileEASY](/images/projects/mile_4.png)

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

# cobooki 사이트

2023.07.03 ~ 2023.07.14 (5인 팀프로젝트)

---

<!-- ![mileEASY](/images/projects/mileeasy.gif) -->

## 🔗URL

http://3.35.216.78:8080/

## ⚒️Technology Stack

- Frontend: HTML, CSS, JavaScript, jQuery, Bootstrap
- Backend: Node.js, EJS Template Engine, Express.js, Sequelize
- Database: MongoDB
- Deployment: AWS(EC2)

## 📝Summary

**개발공부를 하고 있는 입문자들에게 IT 개발 도서를 추천 해주는 웹사이트** 입니다.

1. Coding + book + IT = Cobooki(코부기) 줄잇말
2. 회원가입, 로그인, 회원정보 수정 및 탈퇴 등 사용자 관련 CRUD
3. 장바구니 관련 기능을 프론트 단에서 수행
4. 관리자 페이지

### \* 이슈

마이페이지 구현 시 이미지 파일과 텍스트 값을 form에 담기 위해서 enctype을
multipart/form-data로 변경
이때 req.body로 요청 시 body에 데이터가 담기지 않는 문제가 발생

### \* 해결

노드 환경에서 사용하는 multiparty 패키지를 사용하여 form 데이터를 파싱
클라이언트에서 req.body로 보낸 텍스트 값과 path에 각 경로를 지정하여 어떤 이미지가 전송
되었는지 확인 가능

### \* 역할 및 기여도

- 백엔드, 100%

### \* 프로젝트 총 인원

- 백엔드 1명, 프론트엔드 4명 총 5명

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

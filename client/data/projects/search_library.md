# 알라딘 API 도서 검색 사이트

2023.01.26 ~ 2023.02.04 (개인프로젝트)

---

## 🔗URL

http://3.35.216.78:3001/

## ⚒️Technology Stack

- Frontend: React, Redux, BootStrap
- Backend: Express.js
- Database: MySQL
- Deployment: AWS(EC2)

## 📝Summary

**알라딘 API를 이용하여 만든 도서 검색 사이트** 입니다. 평소 책읽기를 좋아하여 주제를 도서사이트로 선택하였습니다. 혼자서 프론트와 백엔드 간의 리액트로 API를 사용해보는 것을 목적으로 진행한 간단한 프로젝트입니다.

프로젝트를 진행하면서 어려웠던 점은 API를 요청하면서 Cors 이슈를 마주했을때 하루 반나절을 붙잡고 해결 하지 못했는데, 이번 프로젝트를 계기로 동일출처 접근 정책에 대해 알수 있었고, 클라이언트 또는 서버에서 에러를 해결하는 방법에 대해 학습할수 있었습니다.

상태관리 라이브러리로 Redux와 Middleware 구성을 위한 Redux-thunk를 사용했습니다.
익숙하지 않는 기술을 사용하다보니 해당 기술의 장점을 살리기 어려웠고, 반응형 부트스트랩 디자인을 예쁘게 만들기 어려웠습니다.

#### 알라딘 Open API Cors 이슈 해결

백엔드 express 서버에 요청을 보내면 백엔드 서버가 알라딘 서버에 요청을 보내고 응답을 받아서 클라이언트에 보내준다.

### \* 주요 기능

- ✅ 로그인/로그아웃 기능
- ✅ 도서 검색
- ✅ 알라딘 API 도서 데이터 캐러셀
- ✅ MVC구조를 만들고 Node.js Mysql연결

## ⚙️Environment Setup

1. Git Clone

```bash
git clone https://github.com/hyonie-Kim/search_library.git

```

2. Backend

```bash
cd server
npm install
node server
```

3. Frontend

```bash
cd client
npm install
npm run start
```

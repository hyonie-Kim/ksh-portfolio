## Library 사이트

---

## 📝Summary

**알라딘 API를 이용하여 만든 도서 검색 사이트** 입니다. 평소 책읽기를 좋아하여 분야를 도서로 선택하였습니다. 리액트로 API를 사용해보는 것을 목적으로 하여 개인 프로젝트를 진행하였습니다.

### \* 주요 기능

- ✅ 로그인/로그아웃 기능
- ✅ 도서 검색
- ✅ 알라딘 API 도서 데이터 캐러셀
- ✅ MVC구조를 만들고 Node.js Mysql연결

#### 알라딘 Open API Cors 이슈 해결

백엔드 express 서버에 요청을 보내면 백엔드 서버가 알라딘 서버에 요청을 보내고 응답을 받아서 클라이언트에 보내준다.

## ⚒️Technology Stack

- Frontend: React, Redux, BootStrap
- Backend: Express.js
- Database: MySQL
- Deployment: AWS(EC2)

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

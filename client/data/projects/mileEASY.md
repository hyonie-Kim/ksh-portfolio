## MileEASY 프로젝트

<h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>

- mbti 답변 클릭할 때마다 배열에 결과 타입 누적 추가해서 배열 내에 각 타입의 최대 개수 카운트 하여 사용자 mbti 도출
- db에서 User mbti 컬럼과 Trip mbti 컬럼 값 일치 시, 결과 페이지에 사용자 mbti 및 해당 mbti에 대한 추천 여행지 정보 보여주기

```query
use MileEasy;

create table User (

id varchar(50) Not null primary key,

pw varchar(50) not null,

name varchar(128) not null,

mbti varchar(4)
);

```

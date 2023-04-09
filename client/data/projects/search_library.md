## Library 사이트

리액트로 영화플랫폼사이트를 만드는 프로젝트 진행 중 영화 목록을 쉽게 볼수있도록 슬라이드를 구현하려했다. react-multi-carousel사용하여 슬라이드 구현하려던 중에 무비카드의 높이 값변경이 안되었다.

```js
<div
  className="card"
  style={{
    backgroundImage:
      "url(" +
      `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
      ")",
    backgroundSize: "100%",
    display: "block",
  }}
>
  내용
</div>
```

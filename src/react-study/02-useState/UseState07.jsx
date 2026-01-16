import { useState } from "react";

//조건부  렌더링-UI상태 or 권한 상태
export default function UseState07() {
  //로그인상태
  const [isLogin,setIsLogin]= useState(false);
  const [accessToken,setAccessToken]=useState(null);

  const toggleLogin=()=>{
    //함수형 업데이트
    setIsLogin((prev)=>!prev);
  };
  
  const gettokkenClick=()=>{
    setAccessToken("토큰이에요!");
  }

  //Js의 모든 값은 boolean값이 될 수 있다.
  //A가 truthy면 B가 평가
  //값 && 함수(컴포넌트) ->값이 truthy일때만 컴포넌트가 호출
  return (
    //삼항연산자->데이터 2개가 달리보여야 할 때
    //&& 연산자->보이거나 안 보이거나 
    <div>
      <button onClick={toggleLogin}>{isLogin?"로그아웃":"로그인"}</button>
      <h2>{isLogin?"어서오세요":"로그인이 필요합니다"}</h2>
      <button onClick={gettokkenClick}>토큰 가져오기</button>
      <p>토큰 갱신 성공!</p>
      {accessToken&&<p>토큰 갱신 성공</p>}
    </div>
  )
}

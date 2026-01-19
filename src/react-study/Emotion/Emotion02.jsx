import React, { useState } from 'react'
import {css} from "@emotion/react"

const MOVIES=[
    {
        id:1,
        title:"인셉션",
        year:2010,
        description:"꿈 속에서 꿈꾸는 범죄스릴러"
    },

      {
        id:2,
        title:"인터스텔라",
        year:2013,
        description:"인류생존과 시공간 표현한 SF 영화"
    },
    {
        id:3,
        title:"주토피아",
        year:2025,
        description:"닉 주디"
    },
]

const cardStyle=(isActive)=>css`
    width:${isActive?"220px":"120px"};
    height:220px;
    padding:10px;
    box-sizing: border-box;
    background-color: ${isActive?"#ddd":"#eee"};
    transition:all 0.3s ease-in-out;
    cursor:pointer;  
`;

//화살표 함수형으로 만드는 함수
const MovieCard=({movie,isActive,onClick})=>{
    const{title,year,description}=movie;
    return(
        <div onClick={onClick} css={cardStyle}>
            <h4>{title}</h4>
            <small>{year}</small>
        {isActive && <p>{description}</p>}
        </div>
    )
}


export default function Emotion02() {
    const [activeId,setActiveId]=useState(null);

    useEffect(()=>{
        //setInterval(()=>{},ms) 함수
        //ms마다 첫번째 매개변수로 전달받은 함수를 실행

        //ms마다 setActiveId를 호출해서 조작하면?
    },[])
    }


  return (
    <div>
        {/* map()으로 MovieCard들을 렌더링 시켜 주세요 */}
        {MOVIES.map((m)=>{
            return <MovieCard
             movie={m} 
             key={m.id} 
             onClick={()=>setActiveId(activeId===m.id?null:m.id)}
             isActive={activeId===movie.id} //같은 카드를 한번 더 누르면 null->해제 
             />
        })}
    </div>
  )

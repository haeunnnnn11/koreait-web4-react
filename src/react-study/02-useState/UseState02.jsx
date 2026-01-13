import React, { useState } from 'react'

export default function UseState02() {

    //setter를 호출하면 컴포넌트는 재호출된다.
    let myNumber=10; //재호출시 myNumber는 다시 10이 담김
    const[count,setCount]=useState(0);

    const handleChangePlusNumberClick=()=>{
       myNumber++;
       console.log(myNumber);
       setCount(count+1);
    }

    const handleChangeMinusNumberClick=()=>{
        myNumber--;
        console.log(myNumber);
        setCount(count-1);
    }

  return (
    //+1버튼을 누르면 h3태그에 있는 숫자가 +1되도록
    //-1버튼을 누르면 h3태그에 있는 숫자가 -1되도록
    <div>
        <h1>카운터</h1>
        <h3>{count}</h3>
        <button onClick={handleChangePlusNumberClick}>+1</button>
        <button onClick={handleChangeMinusNumberClick}>-1</button>

    </div>
  )
}

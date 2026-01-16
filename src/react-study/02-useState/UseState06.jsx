import React, { useState } from 'react'

export default function UseState06() {
    const [memos, setMemos] = useState([]);
    const [inputVal, setInputVal] = useState("")
    const[done,setDone]=useState(false);

    //[{},{},{}]{id:Date.now() ,text:}
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputVal(value);
    };
    
    const addMemoClick = () => {
        setMemos((prev) => {
            return [
                ...prev,
                {
                    id: Date.now(),
                    text: inputVal,
                    done:done,
                },
            ];
        });
        setInputVal("")
    };

    const handleCheckClick=(e)=>{
        //체크박스 체크시 true담겨있음 <>체크 x->false
        const checkVal=e.target.checked;
        setDone(checkVal);
    };

    //체크박스는 우리가 추가한만큼 생기기 때문에 데이터식별이 필요함.
    //->id를 매개변수로 받아야한다.
    const handleToggleDone=(id)=>{
        //{id:~,text:~,done:true}
        const newMemos=memos.map((memo)=>{
            if(memo.id===id){
                return{
                    ...memo,
                    done:!memo.done
                }
            }else{
                return memo;
            }
            
        });
        setMemos(newMemos);

    };

    const handleAllcheck=()=>{
        setMemos((prev)=>{
            return prev.map((memo)=>{
                return{
                    ...memo,
                    done:true,
                }
            })
        })
    };
    const handleAllUnCkeck=()=>{
        setMemos((prev)=>{
            return prev.map((memo)=>{
                return{
                    ...memo,
                    done:false,
                }
            })
        })
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputVal}
                onChange={handleInputChange}
                placeholder='memo 입력'
            />
            <input type="checkbox" checked={done} onChange={handleCheckClick}/>
            <button onClick={addMemoClick}>메모 추가하기</button>
            <button onClick={handleAllUnCkeck}>모두 체크해제</button>
            <button onClick={handleAllcheck}>모두 체크하기</button>
            <ul>
                {
                    memos.map((memo) => {
                        const { id, text,done } = memo;
                        return 
                        //memos 기준으로 렌더링된 결과
                        //->setmemos를 호출해야 된다.
                        <li key={id}>
                            {text}
                            <input 
                                type="checkbox"
                                checked={done}
                                //()=>fx():fx()를 호출하는 함수
                                //fx(id):호출결과 
                                //{}로 함수를 전달할때,매개변수도 같이줘야할때
                                //()=>fx(매개변수)로 작성!
                                onChange={(id)=>handleToggleDone(id)}

                             />
                        </li>;
                    })
                }
            </ul>
            <ul>
                {/* 체크가 된 memo의 text들이 <li>빨래하기</li> */}
                {
                    memos.filter((memo)=>{
                        return memo.done;
                    }).map((memo)=>{
                        return <li key={memo.id}>{memo.text}</li>
                    })
                }
            </ul>
        </div>
    )
}




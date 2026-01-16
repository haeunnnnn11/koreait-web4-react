import React, { useState, useEffect } from 'react'

export default function UseEffect02() {
    //상태가 바뀐 이후 계산되어야 하는 것들
    //검색어 -> 검색어 추천
    
    const [inputVal, setInputVal] = useState("")
    const [suggestions, setSuggestions] = useState([])

    const keywords = ["리액트","자바스크립트","리액트네이티브","자바","스프링","파이썬","스프링부트","흑백요리사","최강록","최강희"]

    //setInputVal이 바뀌면 -> 업데이트가 완료된 이후에
    //따로 계산되어야함
    //최초실행시에도 함수가 호출되니까 inputVal이 ""이기 때문에 모든 단어에 매칭
    useEffect(() => {
        const newSuggestions = keywords.filter((keyword) => {
            return keyword.includes(inputVal)
        })

        setSuggestions(newSuggestions)
    }, [inputVal])

    return (
        <div>
            <h2>검색</h2>
            <input 
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder='검색어입력'
            />

            <ul>
                {/* 여러개의 li 태그들이 들어와야함. */}
                {/* suggestion들을 li들로 변환 */}
                {suggestions.map((word, i) => {
                    return (
                        <li key={i}>
                            <button>{word}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


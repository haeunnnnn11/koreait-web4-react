import React, { useState, useEffect } from 'react'

export default function UseEffect03() {
    const [temperature, setTemperature] = useState(0);
    const [msg, setMsg] = useState("");

    //10도 이하->추워요!메세지 출력
    //10~24 ->좋은 날씨
    //25 초과 ->더워요

    const handleChangePlusNumberClick = () => {
        setTemperature((prev) => prev + 1)
    }

    const handleChangeMinusNumberClick = () => {
        setTemperature((prev) => prev - 1)
    }

    useEffect(() => {
        if (temperature <= 10) {
            setMsg("추워요")
        } else if (temperature <= 24) {
            setMsg("좋은 날씨")
        } else {
            setMsg("더워요")
        }
    }, [temperature]);

    return (
        <>
            <h2>에어컨 리모컨</h2>
            <h1>{temperature}도</h1>

            <button onClick={handleChangePlusNumberClick}>+</button>
            <button onClick={handleChangeMinusNumberClick}>-</button>

            <h3>{msg}</h3>
        </>
    )
}

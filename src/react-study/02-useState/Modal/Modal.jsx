import React from 'react'

const overlayStyle={
    position:"fixed",
    top:0,
    left:0,
    width:"100vw",
    height:"100vh",
    backgroundColor:"rgba(0,0,0,0.3)",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
};

const modalStyle={
    backgroundColor:"white",
    width:"420px",
    height:"360px",
    padding:"20px",
    borderRadius:"8px"
}

export default function Modal({isOpen,post,OnClick}) {

    if(!isOpen){
        return null;
    } //jsx에서 falsy,[],boolean 표현 안됨. 
  return (
    
    <div style={overlayStyle}>
        <div style={modalStyle}>
            <h2>
                {post.ti}
            </h2>
            {/* <p>props로 content</p> */}
            {/* 눌리면isOpen이 true가 되어야함 */}
            <button onClick={onClick}>닫기</button>
        </div>
    </div>
  )
}

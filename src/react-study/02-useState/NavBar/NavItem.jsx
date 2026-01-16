import React from 'react'

//css -> css in JS
//emotion or styled-component
//mui
export default function NavItem({id,label,isActive,onClick}) {
  return (
    <div>
        <li
            onClick={()=>onClick(id)}
            style={{cursor:"pointer",fontWeight:isActive?"500":"800"}}>
        {label} 
        </li>
    </div>
  )
}

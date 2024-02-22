import React from 'react'
import top from '../assets/head_top.png'
import bottom from '../assets/head_bottom.png'


export default function Header(props) {
    const style={
        fontWeight:"bold",
        fontFamily: "Dancing Script, cursive",
        fontSize:"30px"
    }
  return (
    <div className="container text-center h-25">
        <img src={top} alt=''/>
        <div style={style}>
            {props.text}
        </div>
        <img src={bottom} alt=''/>
    </div>
  )
}

import React from 'react'
import dulha from '../assets/dulha.JPG'
import dulhan from '../assets/dulhan.JPG'
import sindoor from '../assets/sindoor.png'


export default function Card(props) {
    const style={
        fontWeight:"bold",
        fontFamily: "Dancing Script, cursive",
        color:"red"
    }
  return (
    <div className="container px-3 my-5" ref={props.refer}>
        <div className="card" style={{width: "100%"}}>
        <div className="row g-0">
            <div className="col-md-4">
            <div className="card-body text-center">
                <h5 className="card-title" style={style}>वधु</h5>
            </div>
            <img src={dulhan} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-4">
            <div className="card-body text-center mt-5">
                <h2 className="card-title" style={style}>Cordially Invited</h2>
                <p className="card-text"><small>To the Marriage Ceremony of Priya Sharma & Vivek Gupta on 22nd of November, 2024</small></p>
                <p className="card-text"><img src={sindoor} className="img-fluid rounded-start" alt="..."/></p>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card-body text-center">
                <h5 className="card-title" style={style}>वर</h5>
            </div>
            <img src={dulha} className="img-fluid rounded-start" alt="..."/>
            </div>
        </div>
    </div>
    </div>
  )
}

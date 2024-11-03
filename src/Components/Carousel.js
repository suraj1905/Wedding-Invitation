import React from 'react'
import video from '../assets/engagement_2.mp4'
import '../App.css'
import image from '../assets/carousel_married.png'


export default function Carousel(props) {
  
  return (
    <div>
        <div id="carouselCaptions" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <video className="d-block w-100" autoPlay muted loop style={{opacity:0.6, blur:5}}>
                        <source src={video} type="video/mp4"/>
                    </video>
                <div className="image-container">
                    <img src={image} alt='' onClick={props.handleScrollClick}/>
                </div>
                </div>
                </div>
            </div>
    </div>
  )
}

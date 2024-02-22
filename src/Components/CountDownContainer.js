import React, { useEffect, useState } from 'react'
import backImg from '../assets/CountDown.JPG'

export default function CountDownContainer() {
    const [targetDate] = useState(new Date('2024-11-22 00:00:00'));
    const [difference, setDifference] = useState(null);
    const [day, setDay] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const today = new Date();
      const newDifference = targetDate.getTime() - today.getTime();
      setDifference(newDifference);
    }, 1000);
    calculateTime();
    return () => clearInterval(intervalId);
  },);

  const calculateTime = () => {
    if (!difference) return null;

    setDay(Math.floor(difference / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
  };

  const style={
    fontWeight:"bold",
    fontFamily: "Playfair Display, serif",
    width: "100%",
    }   
  return (
    <div className="container text-center my-4" style={{backgroundImage:{backImg}}}>
        <div id="carouselCaptions" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 rounded"
                        src={backImg} alt=''/>
                    <div className="carousel-caption d-lg-block">
                        <div className="card w-100 bg-danger" style={{display: "flex", flexWrap: "wrap"}}>
                            <div className="card-body text-light" style={{flex: "1 0 auto"}}> 
                                <div className="row g-0" style={style}>
                                    <div className="col">
                                        {day}<br/> 
                                        <small>days</small>
                                    </div>
                                    <div className="col">
                                            {hours}
                                            <br/>
                                        <small>hours</small>
                                    </div>
                                    <div className="col">
                                    {minutes}
                                    <br/>
                                        <small>minutes</small>
                                    </div>
                                    <div className="col">
                                    {seconds}
                                    <br/>
                                        <small>seconds</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

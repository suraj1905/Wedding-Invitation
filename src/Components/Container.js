import React from 'react'
import Haldi from '../assets/Haldi.jpg'
import Sangeet from '../assets/Mehendi_Sangeet.jpg'
import Matkor from '../assets/Matkor.jpg'
import Bidai from '../assets/bidai.jpg'
import Sindoor from '../assets/sindoor.png'
import Reception from '../assets/Reception.jpg'


export default function Container() {
  const data = [
    {
        occassion: "Mehendi & Sangeet",
        image: Sangeet,
        date: "20th November, 2024"
    },
    {
        occassion: "Haldi",
        image: Haldi,
        date: "21th November, 2024"
    },
    {
        occassion: "Matkor",
        image: Matkor,
        date: "21th November, 2024"
    },
    {
        occassion: "Shubh Vivah",
        image: Sindoor,
        date: "22nd November, 2024"
    },
    {
        occassion: "Vidai",
        image: Bidai,
        date: "23rd November, 2024"
    },
    {
        occassion: "Reception",
        image: Reception,
        date: "24th November, 2024"
    },
    ]

    const style={
        fontWeight:"bold",
        fontFamily: "Dancing Script, cursive",
        color:"red"
    }
  return (
    <div className="container text-center my-4 border rounded">
        <div className="row align-items-center">
            {data.map((element)=>{
                return(
                    <div key={element.occassion} className="col-md-4">
                        <img src={element.image} height={200} width={200} alt='' className="my-3 border rounded"/>
                        <h5 style={style}>{element.occassion}</h5>
                        <small>Date: {element.date} </small>
                        <p className="mt-0">Venue:- Revealing Soon</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

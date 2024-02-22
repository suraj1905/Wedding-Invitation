import React from 'react'
import { FaHeart } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='container text-center'>
        <footer className="py-3 my-4 border-top">
        <div className="col">
        <span className="text-center">Developed with <FaHeart color='red'/> by <a href='http://sutantratechnologies.com/' style={{color:'red'}} target='_blank' rel='noreferrer'>Sutantra Technologies</a></span>
        </div>
    </footer>
    </div>
  )
}

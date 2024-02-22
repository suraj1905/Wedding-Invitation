import React from 'react'
import mantra from '../assets/mantra.png'
import ganesh from '../assets/ganesh.png'
import rightImg from '../assets/right.png'
import leftImg from '../assets/left.png'
import '../App.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary h-80">
        <div className="container-fluid">
            <a href="/" className="navbar-brand" style={{float:"right"}}>
                <img src={rightImg} alt="Start" height={50} width={50} className="img-fluid"/>
                <img src={ganesh} alt="Start" height={50} width={50} className="img-fluid"/>
            </a>
            <img src={mantra} alt="Middle" className="img-fluid d-block mx-auto mt-2 mb-2 midImg"/>
            <a href="/" className="navbar-brand me-0" style={{float:"right"}}>
                <img src={ganesh} alt="End" height={50} width={50} className="img-fluid"/>
                <img src={leftImg} alt="Start" height={50} width={50} className="img-fluid"/>
            </a>
        </div>
    </nav>
  )
}

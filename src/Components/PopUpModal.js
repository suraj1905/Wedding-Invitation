import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import ganesh from '../assets/ganesha.jpg'
import ReactHowler from 'react-howler';
import mantra from '../assets/mantra.mp3'


export default function PopUpModal(props) {
  const [show, setShow] = useState(true);
  const [playing, setPlaying] = useState(props.playing)
  const handleClose = () =>{
    setShow(false);
    setPlaying(true)
  }

  return (
    <>
      <ReactHowler
          src={mantra}
          playing={playing}
        />
      <Modal show={show} id="myModal" onHide={handleClose} centered className='justify-content-center align-items-center d-flex'>
        <Modal.Body>
        <div className="container">
          <img className="img-fluid" style={{ maxHeight: '300px' }} src={ganesh} alt='' />
        </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

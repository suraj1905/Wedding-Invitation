import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import ganesh from '../assets/ganesha.jpg'
import ReactHowler from 'react-howler';
import mantra from '../assets/mantra.mp3'
import tenu from '../assets/Tenu_Leke.mp3'




export default function PopUpModal(props) {
  const songs = [
    mantra, 
    tenu,
  ];
  const [show, setShow] = useState(true);
  const [playing, setPlaying] = useState(props.playing)
  const handleClose = () =>{
    setShow(false);
    setPlaying(true)
  }
  

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handleSongEnd = () => {
    const nextSongIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextSongIndex);
  };

  return (
    <>
      <ReactHowler
          src={songs[currentSongIndex]}
          playing={playing}
          onEnd={handleSongEnd}
          
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

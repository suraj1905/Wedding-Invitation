import { useRef } from 'react';
import './App.css';
import Card from './Components/Card';
import Carousel from './Components/Carousel';
import Container from './Components/Container';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import CountDownContainer from './Components/CountDownContainer';
import Footer from './Components/Footer';
import Video from './Components/Video';
import bottom from './assets/head_bottom.png'
import Modal from './Components/PopUpModal';



function App() {

  const cardComponentRef = useRef(null);

  const handleScrollClick = () => {
    cardComponentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const style={
    fontWeight:"bold",
    fontFamily: "Dancing Script, cursive",
    fontSize:"15px",
    marginTop: "40px"
}
  return (
    <>
      <Navbar/>
      <Modal playing={true}/>
      <Carousel handleScrollClick={handleScrollClick}/>
      <Card refer={cardComponentRef}/>
      <Header text="Save the dates"/>
      <Container/>
      <Header text="Count down begins"/>
      <CountDownContainer/>
      <Header text="Video Invitation"/>
      <Video url="https://www.youtube.com/embed/UbUcZi3e5rA"/>
      <Header text="Special Moments"/>
      <Video url="https://www.youtube.com/embed/icrT4ruvlHk"/>
      <div className="container text-center h-25">
        <div style={style}>
        कृपया हमारे जीवन के सबसे महत्वपूर्ण दिन पर आएं और हमें आशीर्वाद दें
        </div>
        <img src={bottom} alt=''/>
    </div>
      <Footer/>
    </>
  );
}

export default App;

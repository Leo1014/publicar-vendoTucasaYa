import React from "react";
import Slider from "react-slick";
import "./slider.css"
import CasaSoacha from "./components/casaSoacha/CasaSoacha";
import NavBar from "./components/NavBar/NavBar"
import Landing from './components/Landing/Landing'
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

import image_1 from "../src/slides/fachada.jpeg"
import image_2 from "../src/slides/1.jpeg"
import image_3 from "../src/slides/2.jpeg"
import image_4 from "../src/slides/3.jpeg"
import image_5 from "../src/slides/4.jpeg"
import image_6 from "../src/slides/5.jpeg"
import image_7 from "../src/slides/6.jpeg"
import image_8 from "../src/slides/7.jpeg"
import image_9 from "../src/slides/8.jpeg"
import image_10 from "../src/slides/9.jpeg"



function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div>
      <NavBar />
      <CasaSoacha />
      <Slider {...settings} className="slider">
        <div>
          <img src={image_1} alt="fachada" width={400} height={400} />
        </div>
        <div>
          <img src={image_2} alt="sala" width={400} height={400} />
        </div>
        <div>
          <img src={image_3} alt="" width={400} height={400} />
        </div>
        <div>
          <img src={image_4} alt="" width={400} height={400} />
        </div>
        <div>
          <img src={image_5} alt="" width={400} height={400} />
        </div>
        <div>
          <img src={image_6} alt="" width={400} height={400} />
        </div>
        <div>
          <img src={image_7} alt="" width={400} height={400} />
        </div>
        <div>
          <img src={image_8} alt="" width={400} height={400} />
        </div>
        <div>
          <img src={image_9} alt="" width={400} height={400} />
        </div>
        <div>
          <img src={image_10} alt="" width={400} height={400} />
        </div>
      </Slider>
      <Banner/>
  
      <Landing />
      <Footer />
      
    </div>
  )
}

export default App

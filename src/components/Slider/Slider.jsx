import React from "react";
import Slider from "react-slick";
import "./slider.css"

import image_1 from "../../slides/fachada.jpeg"
import image_2 from "../../slides/1.jpeg"
import image_3 from "../../slides/2.jpeg"
import image_4 from "../../slides/3.jpeg"
import image_5 from "../../slides/4.jpeg"
import image_6 from "../../slides/5.jpeg"
import image_7 from "../../slides/6.jpeg"
import image_8 from "../../slides/7.jpeg"
import image_9 from "../../slides/8.jpeg"
import image_10 from "../../slides/9.jpeg"



export default function SliderHouse() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      
      <Slider {...settings} className="slider">
        <div>
          <img className="img-fluid" src={image_1} alt="fachada" width={400} height={400} />
        </div>
        <div>
          <img className="img-fluid" src={image_2} alt="sala" width={400} height={400} />
        </div>
        <div>
          <img className="img-fluid" src={image_3} alt="" width={400} height={400} />
        </div>
        <div>
          <img className="img-fluid" src={image_4} alt="" width={400} height={400} />
        </div>
        <div>
          <img className="img-fluid" src={image_5} alt="" width={400} height={400} />
        </div>
        <div>
          <img className="img-fluid" src={image_6} alt="" width={400} height={400} />
        </div>
        <div>
          <img className="img-fluid" src={image_7} alt="" width={400} height={400} />
        </div>
        <div>
          <img className="img-fluid" src={image_8} alt="" width={400} height={400} />
        </div>
        <div>
          <img src={image_9} alt="" width={400} height={400} />
        </div>
        <div>
          <img src={image_10} alt="" width={400} height={400} />
        </div>
      </Slider>
      
    </div>
  )
}


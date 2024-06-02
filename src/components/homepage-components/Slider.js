import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
  "./slider1.png",
];

export default function SimpleSlider() {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
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
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
    ] 
  };

  const topImages = images.slice(0, 10);  // İlk 10 resmi al
  const bottomImages = images.slice(10);  // Sonraki 10 resmi al

  return (
    <div className="slick-slider-container">
      <div className="slider-container">
        <Slider {...settings}>
          {topImages.map((image, index) => (
            <div key={index}>
              <img src={image} className="w-full h-full" alt={`slider ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {bottomImages.map((image, index) => (
            <div key={index}>
              <img src={image} className="w-full h-full" alt={`slider ${index + 11}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

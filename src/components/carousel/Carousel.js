import React from "react";
import Slider from "react-slick";
import { partnerImg } from "../partners/partnersImg";
import './carousel.css'

const Carousel = () => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    speed: 200,
    slidesToScroll: 3,
    autoplay: true,
    pauseOnHover: true,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: "center",
          slidesToScroll: 3,
          infinite: true,
          slidesToShow: 3,
          speed: 100,
          autoplay: true,
          pauseOnHover: true,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          {partnerImg.map((item, idx) => (
            <div>
              <img
                className="partnersLogo"
                key={idx}
                src={item}
                alt="partner"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;

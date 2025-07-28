import React from 'react'
import banner from "../assets/Banner.png"
import Slider from 'react-slick';

const Banner = () => {
    var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "10%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "transparent",
          borderRight: "2px #ffff solid",
          padding: "10px 0",
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (
    <>
    <Slider {...settings}>
        <div className="">
        <img src={banner} alt="" />
    </div>
    <div className="">
        <img src={banner} alt="" />
    </div>
    <div className="">
        <img src={banner} alt="" />
    </div>
    <div className="">
        <img src={banner} alt="" />
    </div>

    </Slider>
    </>
  )
}

export default Banner
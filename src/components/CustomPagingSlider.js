import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/style/exercisePage.css';
import { arrow } from "@popperjs/core";

const CustomPagingSlider = ({ images }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <div className="slider-container img-slider">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.url} alt={`Slide ${index}`} style={{ width: '100%' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CustomPagingSlider;

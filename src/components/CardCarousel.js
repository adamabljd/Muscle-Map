import React from 'react';
import Slider from 'react-slick';
import { Card } from "./Card";
import '../assets/style/cardCarousel.css';

const Arrow = ({ className, style, onClick, icon }) => {
  return (
    <div
      className={`${className} custom-arrow`}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", color: "#FAFAFA", backgroundColor: "rgba(160, 109, 92, 1)", borderRadius: "50%", width: "50px", height: "50px", zIndex: 2 }}
      onClick={onClick}
    >
      <i className={icon}></i>
    </div>
  );
};


const CardCarousel = ({ cards }) => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    prevArrow: <Arrow icon="fas fa-chevron-left" />,
    nextArrow: <Arrow icon="fas fa-chevron-right" />,
  };

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="carousel-item">
            <Card title={card.title} imgUrl={card.imgUrl} muscles={card.muscles} />
          </div>
        ))}
      </Slider>
    </div>

  );
};

export default CardCarousel;
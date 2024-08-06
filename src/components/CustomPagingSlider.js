import React, {useState, useRef, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/style/exercisePage.css';

const CustomPagingSlider = ({ images, isMuscle, nbOfSlides }) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const settingsMain = {
        asNavFor: nav2,
        ref: slider => (sliderRef1 = slider),
        centerMode: true,
        centerPadding: '0px',
        arrows: !isMuscle,
        swipe: !isMuscle
    };

    const settingsThumbs = {
        asNavFor: nav1,
        ref: slider => (sliderRef2 = slider),
        slidesToShow: nbOfSlides,
        swipeToSlide: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0px',
        arrows: !isMuscle,
        swipe: !isMuscle,
    };

    const thumbImages = isMuscle ? images.slice(1) : images;

    const textColor = !isMuscle ? '#D4C7AF' : '#FAFAFA';

    return (
        <div className="slider-container img-slider">
            <Slider {...settingsMain}>
                {images.map((image, index) => (
                    <div key={index} className="mb-2">
                        <img className="mb-1" src={image.url} alt={`Slide ${index}`} style={{ width: '100%', borderRadius: '15px' }}/>
                        <h2 style={{ color: textColor }}>{image.name || 'AAAAA'}</h2>
                    </div>
                ))}
            </Slider>

            <Slider {...settingsThumbs}>
                {thumbImages.map((image, index) => (
                    <div key={index}>
                        <img className="mb-1" src={image.url} alt={`Slide ${index}`} style={{ width: '100%', borderRadius: '10px' }}/>
                        <p style={{ color: textColor }}>{image.name || 'Aaaaaa'}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CustomPagingSlider;

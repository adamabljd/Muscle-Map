import React from 'react';
import logo from '../assets/images/logo_full.png';
import bp from '../assets/images/image.png';
import '../assets/style/homepage.css';
import CardCarousel from '../components/CardCarousel';

const cards = [
    { title: "Card 1", muscles: "Muscles 1", imgUrl: bp },
    { title: "Card 2", muscles: "Muscles 2", imgUrl: bp },
    { title: "Card 3", muscles: "Muscles 3", imgUrl: bp },
    { title: "Card 4", muscles: "Muscles 4", imgUrl: bp },
    { title: "Card 5", muscles: "Muscles 5", imgUrl: bp },
    { title: "Card 6", muscles: "Muscles 6", imgUrl: bp }
];

function Homepage() {
    return (
        <div className="container-fluid home-container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-5 col-lg-4 col-xl-3 text-center px-5 px-md-3 mt-3 mt-md-5">
                    <img src={logo} alt="Muscle Map" className="img-fluid home-logo" />
                </div>
                <div className="col-12 col-md-7 col-lg-5 text-center mt-3 mt-md-5">
                    <p className="home-paragraph fw-bold mb-0">
                        Welcome to Muscle Map, your go-to guide for gym exercises!
                        Discover detailed workout routines, expert tips, and tools to help you achieve your fitness goals.
                        Whether you're just starting out or looking to enhance your training, Muscle Map makes your fitness journey easy and effective.
                        Join us today and start your path to a stronger, healthier you!
                    </p>
                </div>
            </div>
            <div className='row mt-5 px-5'>
                <CardCarousel cards={cards} />
            </div>
        </div>
    );
}

export default Homepage;

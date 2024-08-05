import React from "react";
import { useLocation } from "react-router-dom";
import CustomPagingSlider from "../components/CustomPagingSlider";
import '../assets/style/exercisePage.css';

const ExercisePage = () => {
    const location = useLocation();
    const { title, imgUrl, muscles } = location.state;

    const images = [
        { id: 1, url: imgUrl },
        { id: 2, url: imgUrl },
        { id: 3, url: imgUrl },
        { id: 4, url: imgUrl },
        { id: 5, url: imgUrl },
        { id: 6, url: imgUrl },
        { id: 7, url: imgUrl },
        { id: 8, url: imgUrl },
        { id: 9, url: imgUrl },
        { id: 10, url: imgUrl },
        { id: 32, url: imgUrl },
        { id: 43, url: imgUrl },
        { id: 54, url: imgUrl },
        { id: 65, url: imgUrl },
        { id: 77, url: imgUrl },
        { id: 87, url: imgUrl },
    ];

    return (
        <div className="exercise-page">
            <h1>{title}</h1>
            <div className="row">
                <div className="col-12 col-md-6 px-5 mt-4">
                    <CustomPagingSlider images={images} />
                </div>
                <div className="col-12 col-md-6 px-5 mt-4">
                    <CustomPagingSlider images={images} />
                </div>
            </div>


            <p>{muscles}</p>
        </div>
    );
};

export default ExercisePage;

import React from "react";
import { useLocation } from "react-router-dom";
import CustomPagingSlider from "../components/CustomPagingSlider";
import logo from '../assets/images/logo_nobg.png';
import '../assets/style/exercisePage.css';
// {Title, Primary Muscle(image + name), Secondary Muscles(image + name), images, video, instructions}
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

    const secondaryMuscles = [
        { url: imgUrl, name: muscles },
        { url: imgUrl, name: muscles },
        { url: imgUrl, name: muscles },
    ];

    const primaryMuscle = { url: imgUrl, name: 'Primary' }

    const allMuscles = [primaryMuscle, ...secondaryMuscles];

    return (
        <div className="exercise-page">
            <h1 className="mt-3 mb-2">{title}</h1>
            <div className="row justify-content-center exercises-images-slider mb-5">
                <div className="col-12 col-md-4 px-5 mt-4 mx-5">
                    <CustomPagingSlider images={images} isMuscle={false} nbOfSlides={3}/>
                </div>
                <div className="col-12 col-md-4 px-5 mt-4 mx-5">
                     <CustomPagingSlider images={allMuscles} isMuscle={true} nbOfSlides={secondaryMuscles.length}/>
                </div>
            </div>
        </div>
    );
};

export default ExercisePage;

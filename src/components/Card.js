import React from "react";
import { useNavigate } from "react-router-dom";
import '../assets/style/card.css';

export const Card = ({ title, muscles, imgUrl }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/exercise/${title}`, {
            state: { title, muscles, imgUrl }
        });
    };
    return (
        <div className="proj-imgbx" onClick={handleClick}>
            <img src={imgUrl} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{muscles}</span>
            </div>
        </div>
    )
}
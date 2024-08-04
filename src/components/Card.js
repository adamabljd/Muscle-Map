import React from "react";
import '../assets/style/card.css';

export const Card = ({ title, muscles, imgUrl }) => {
    return (
        <div className="proj-imgbx p-0 m-3">
            <img src={imgUrl} />
            <div className="proj-txtx p-3">
                <h4>{title}</h4>
                <span>{muscles}</span>
            </div>
        </div>
    )
}
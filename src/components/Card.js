import React from "react";
import '../assets/style/card.css';

export const Card = ({ title, muscles, imgUrl }) => {
    return (
        <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{muscles}</span>
            </div>
        </div>
    )
}
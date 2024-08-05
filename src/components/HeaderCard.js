import React from 'react';
import '../assets/style/headerCard.css';

export const HeaderCard = ({ imgUrl, title }) => {
    return (
        <div className="my-card">
            <img src={imgUrl} alt={title} className="my-card-img" />
            <h2 className="my-card-title">{title}</h2>
            <button className="my-card-button">View all</button>
        </div>
    )
}
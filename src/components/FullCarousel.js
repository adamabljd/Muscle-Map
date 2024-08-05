import React from 'react';
import { HeaderCard } from './HeaderCard';
import CardCarousel from './CardCarousel';

export const FullCarousel = ({ muscle, muscleImg, cards }) => {

    return (
        <div>
            <div className='row mb-4 justify-content-center mx-3'>
                <HeaderCard title={muscle} imgUrl={muscleImg} />
            </div>
            <div className='row px-5'>
                <CardCarousel cards={cards} />
            </div>
        </div>
    )
};
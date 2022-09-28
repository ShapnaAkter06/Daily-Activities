import React from 'react';
import './SingleCard.css'

const SingleCard = ({card}) => {
    console.log(card)
    return (
        <div className='single-card'>
            <img className='card-image' src={card.image} alt="" />
            <div className="card-info">
                <h5>Name : {card.name} </h5>
                <p>Time: {card.time} min </p>
                <button className='added-btn'>Added To list</button>
            </div>
        </div>
    );
};

export default SingleCard;
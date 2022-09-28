import React from 'react';
import SingleCard from '../Single-Card/SingleCard';
import './AllCards.css'

const AllCards = ({cards}) => {
    return (
        <div className='cards-container'>
           {
            cards.map(card => <SingleCard card={card} key={card.id}></SingleCard>)
           }
        </div>
    );
};

export default AllCards;
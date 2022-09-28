import React from 'react';
import SingleCard from '../Single-Card/SingleCard';
import './AllCards.css'

const AllCards = ({cards, details, setDetails}) => {
    return (
        <div className='cards-container'>
           {
            cards.map(card => <SingleCard 
                card={card} 
                key={card.id}
                details={details}
                setDetails={setDetails}
                ></SingleCard>)
           }
        </div>
    );
};

export default AllCards;
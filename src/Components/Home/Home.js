import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
import AllCards from '../All-Cards/AllCards';
import MyInfo from '../MyInfo/MyInfo';
import BreakTime from '../BreakTime/BreakTime';
import ReadingDetails from '../ReadingDetails/ReadingDetails';
import { library } from '@fortawesome/fontawesome-svg-core';

const Home = () => {
    const [cards, setCards] = useState([]);
    const [details, setDetails] = useState([]);
    
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])
    return (
        <div>
            <div className="home-container">
                <div className="card-container">
                    <h1 className='heading'>
                        <FontAwesomeIcon className='icon' icon={faBookOpenReader}></FontAwesomeIcon>
                        Reading Books
                    </h1>
                    <AllCards 
                        cards={cards}
                        details={details}
                        setDetails={setDetails}
                    ></AllCards>
                </div>
                <div className="cards-info">
                    <div>
                        <MyInfo></MyInfo>
                    </div>
                    <div>
                        <BreakTime></BreakTime>
                    </div>
                    <div>
                        <ReadingDetails details={details}></ReadingDetails>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
import AllCards from '../All-Cards/AllCards';
import MyInfo from '../MyInfo/MyInfo';
import BreakTime from '../BreakTime/BreakTime';
import ReadingDetails from '../ReadingDetails/ReadingDetails';


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
            <div className="ques-ans">
                <div>
                    <strong>1. How does react work</strong>
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p> <br />
                    <strong>2. Difference between props and state?</strong>
                    <p>Props: Props are read only, It can be modified, Props Immutable <br />
                    State: State changes can be asynchronous. It can be modified using this.setState. State Mutuable.
                    </p>
                    <strong>3. What is the uses of UseEffect</strong>
                    <p>The useEffect Hook always perform as SideEffect. For example: <br />
                        Add an event listener for a button. <br />
                        Data fetching from API when component mounts. <br />
                        Perform an action when state or props change. <br />
                        Clean up event listeners when the component unmounts.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
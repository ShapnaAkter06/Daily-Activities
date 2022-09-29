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
    const [breakTime, setBreakTime] = useState('0');
    const [localData, setLocalData] = useState('')

    // load data from json file
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [cards])

    // calculation of total reading time
    const readingTime = details?.reduce((prevValue, currentValue)=> prevValue + currentValue, 0);

    // added break time in local storage
    const addBreakTime =(breakInfo) =>{
        setBreakTime(breakInfo.slice(0,2));
        localStorage.setItem('breakTime', JSON.stringify(breakInfo.slice(0,2)));
    }
    useEffect(()=> {
        const getBreakTime = localStorage.getItem('breakTime');
        if(getBreakTime){
            setLocalData(JSON.parse(getBreakTime))
        }
    }, [breakTime])

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
                        <BreakTime addBreakTime={addBreakTime}></BreakTime>
                    </div>
                    <div>
                        <ReadingDetails details={readingTime} localData={localData}></ReadingDetails>
                    </div>
                </div>
            </div>
            <div className="ques-ans">
                <div className='ques-container'>
                    <div>
                        <strong>1. How does react work</strong>
                        <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                    </div>
                    <div>
                        <strong>2. Difference between props and state?</strong>
                        <p>Props: Props are read only and immutable but it can be modified, <br />
                        State: State changes can be asynchronous and mutable. It can be modified using this.setState.
                        </p>
                    </div>
                    <div>
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
        </div>
    );
};

export default Home;
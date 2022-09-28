import React from 'react';
import './ReadingDetails.css'

const ReadingDetails = ({details}) => {
    return (
        <div>
           <h3>Reading Details</h3>
           <div className='reading-details'>
                <p>Reading Time:{details.map(t=> t.time)}</p>
                <p>Break Time: </p>
           </div>
           <button className='complete-btn'>Activity Completed</button>
        </div>
    );
};

export default ReadingDetails;
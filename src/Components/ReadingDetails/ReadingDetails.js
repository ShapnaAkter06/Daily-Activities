import React from 'react';
import './ReadingDetails.css'

const ReadingDetails = () => {
    return (
        <div>
           <h3>Reading Details</h3>
           <div className='reading-details'>
                <p>Reading Time: </p>
                <p>Break Time: </p>
           </div>
           <button className='complete-btn'>Activity Completed</button>
        </div>
    );
};

export default ReadingDetails;
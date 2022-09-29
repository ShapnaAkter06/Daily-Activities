import React from 'react';
import './ReadingDetails.css';
import Swal from 'sweetalert2'

const ReadingDetails = ({details}) => {

    const activityCompleted = () =>{
        Swal.fire(
            'Good job!',
            'You have completed!',
            'success'
          )          
    }
    return (
        <div>
           <h3>Reading Details</h3>
           <div className='reading-details'>
                <p>Reading Time:{details.map(t=> t.time)}</p>
                <p>Break Time: </p>
           </div>
           <button onClick={activityCompleted} className='complete-btn'>Activity Completed</button>
        </div>
    );
};

export default ReadingDetails;
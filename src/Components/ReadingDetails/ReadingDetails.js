import React from 'react';
import './ReadingDetails.css';
import Swal from 'sweetalert2'

const ReadingDetails = ({details, localData}) => {

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
                <p>Reading Time:{details}</p>
                <p>Break Time:{localData} </p>
           </div>
           <button onClick={activityCompleted} className='complete-btn'>Activity Completed</button>
        </div>
    );
};

export default ReadingDetails;
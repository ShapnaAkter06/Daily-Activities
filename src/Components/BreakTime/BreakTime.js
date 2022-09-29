import React from 'react';
import './BreakTime.css'

const BreakTime = ({addBreakTime}) => {
    return (
        <div>
            <h3>Add a Break</h3>
            <div className='break-btn'>
                <button onClick={(e)=>addBreakTime(e.target.innerText)}>10s</button>
                <button onClick={(e)=>addBreakTime(e.target.innerText)}>20s</button>
                <button onClick={(e)=>addBreakTime(e.target.innerText)}>30s</button>
                <button onClick={(e)=>addBreakTime(e.target.innerText)}>40s</button>
                <button onClick={(e)=>addBreakTime(e.target.innerText)}>50s</button>
            </div>
        </div>
    );
};

export default BreakTime;
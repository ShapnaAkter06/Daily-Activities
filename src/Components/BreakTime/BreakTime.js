import React from 'react';
import './BreakTime.css'

const BreakTime = () => {
    return (
        <div>
            <h3>Add a Break</h3>
            <div className='break-btn'>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
        </div>
    );
};

export default BreakTime;
import React from 'react';
import './Char.css'

const charComponent = (props) => {

    return (
        <div className="CharComponent" onClick={props.click}>
            <p>{props.char}</p>
        </div>
    )
};

export default charComponent;
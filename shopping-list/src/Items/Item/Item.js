import React from 'react';
import './Item.css';

const item = (props) => {
    return(
        <div className="Item">
            <div>
                <p>{props.name}</p>
                <button className="btn" onClick={props.click}><i className="fa fa-trash"> Delete</i></button>
            </div>
        </div>
    );
}

export default item;
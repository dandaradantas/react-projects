import React from 'react';

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>Username: {props.username}</p>
            <p>{props.content1}</p>
        </div>
    )
}

export default userOutput;
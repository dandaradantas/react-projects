import React from 'react';

const validation = (props) => {
    let validationMessage = <p>Text long enough</p>;

    if (props.textLength <= 5) {
        validationMessage = <p>Text too short</p>;
    }
    return (
        <div className="ValidationComponent">
            {validationMessage}
        </div>
    )
};

export default validation;
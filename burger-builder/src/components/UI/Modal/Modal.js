import React from 'react';

import classes from './Modal.module.css';

const modal = (props) => (
    
    <div 
        className={classes.Modal + ' ' + (props.show ?  '' : classes.HideModal)}
        >
        {props.children}
    </div>
);

export default modal;
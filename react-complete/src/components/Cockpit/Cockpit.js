import React, { useEffect, useref, useRef } from 'react';

import classes from './Cockpit.css'

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        // setTimeout(() => {
        //     alert('Saved date to cloud');
        // }, 1000);

        toggleBtnRef.current.click();

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(()=> {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        } 
    })
    
    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1> {props.title}</h1>
            <p className={assignedClasses.join(' ')}>I'm studying React</p>
            {/* This name 'myAlt' is up to you */}
            <button ref={toggleBtnRef}
            className={btnClass}
            onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default React.memo(cockpit);
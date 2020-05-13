import React from 'react';

import Book from './Book/Book';

const books = (props) => {
    return (
        props.booksList.map((element, index) => {
            return ( 
                <Book key={index} book={element}/> 
            )  
        })
    );
}

export default books; 
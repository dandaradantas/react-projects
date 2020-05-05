import React from 'react';
import Item from './Item/Item'

const items = (props) => {
    return(
        props.itemsList.map((item, index) => {
            return (
                <Item 
                    key={index}
                    click={() => props.delete(index)}
                    name={item} 
                />
            );
         })
    );
};

export default items;
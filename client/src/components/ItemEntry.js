import React from 'react';

const ItemEntry = (props) => {
    return (
        <div>
            <p>
                I am {props.item.item_name} 
                {props.item.image_url}
                Location: {props.item.location}
                Type: {props.item.type}
                Price: {props.item.price} 
                Description: {props.item.description}
            </p>
        </div>
    )
}

export default ItemEntry;
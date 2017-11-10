import React from 'react';

const ItemEntry = (props) => {
    return (
<<<<<<< HEAD
        <div>
            <p>
                I am {props.item.item_name} 
                {props.item.image_url}
                Location: {props.item.location}
                Type: {props.item.type}
                Price: {props.item.price} 
                Description: {props.item.description}
            </p>
=======
        <div className='item-wrapper'>
        <div>
            <h2 className='item-header'>{props.item.item_name}</h2>
            <div className='col-lg-6'>
                <img src={props.item.image_url} className='item-img'/>
            </div>
            <div className='col-lg-6'>
                <p><span className='item-location'>Location:</span> {props.item.location}</p>
                <p>{props.item.description}</p>
                <p>{props.item.price}</p>
                <p><span className='item-type'>Type:</span> {props.item.price}</p>
                <p>{props.item.owner_email}</p>
            </div>
            
        </div>
>>>>>>> Each item displaying all properties from DB on client
        </div>
    )
}

export default ItemEntry;
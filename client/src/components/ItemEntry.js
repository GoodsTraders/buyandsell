import React from 'react';

const ItemEntry = (props) => {
    console.log("ITEM PROPS", props.item.owner_lat);
    return (
<<<<<<< 5a29a9bc7c73ddfb41ea326f6529a47dd689a0fc
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
=======
        <div>
            I am {props.item.item_name} 
            <img src={props.item.image_url} width="30%" height="30%"/>
>>>>>>> Added new userStore which keeps track of user's name, photo, email globally
        </div>
    )
}

export default ItemEntry;
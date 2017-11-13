import React from 'react';
import Email from './Email.js';
import SingleEntry from './SingleEntry.js';
const FontAwesome = require('react-fontawesome');

const ItemEntry = (props) => {

    return (
        <div className='item-wrapper'>               
                <div>
                    <h2 className='item-header' onClick={ () => {props.select(props.item)} }>{props.item.item_name}</h2>
                    <div className='row items-wrapper'>
                        <div className='col-lg-4'>
                            <img src={props.item.image_url} className='item-img'/>
                        </div>
                        <div className='col-lg-8'>
                            <p className='item-location'>{props.item.location}</p>
                            <p className='item-description'>{props.item.description}</p>
                            <p><i className="fa fa-usd" aria-hidden="true"></i>{props.item.price}</p>
                            <p><span className='item-type'>Type:</span> {props.item.type}</p>
                            <p className='email-seller-header'>{props.item.owner_email}</p>
                        </div>
                    </div>
                </div>  
        </div>
    )
}

export default ItemEntry;
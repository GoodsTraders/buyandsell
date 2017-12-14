import React from 'react';
import Email from './Email.js';
const FontAwesome = require('react-fontawesome');

let singleEntry = (props) => {
  return(
    <div className='item-wrapper'>
      <div>
        <h2 className='item-header'>{props.item.item_name}</h2>
        <div className='row single-item-center'>
          <div className='col-lg-12'>
          <img src={props.item.image_url} className='item-img'/>
            <p className='item-location'> {props.item.location}</p>
              <p className='item-description'>{props.item.description}</p>
              <p><i className="fa fa-usd" aria-hidden="true"></i>{props.item.price}</p>
              <p className='item-type-wrapper'><span className='item-type'>Type:</span> {props.item.type}</p>
              <p>{props.item.owner_email}</p>
              <Email email={props.email} item={props.item} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default singleEntry;
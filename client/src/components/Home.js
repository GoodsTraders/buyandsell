import React from 'react';
import ItemList from '../components/ItemList.js';
import MapContainer from './MapContainer.js';

let home = (props) => {
  return (
    <div>
      <MapContainer items={props.items} />
      <ItemList items={props.items} />
    </div>
  )
}

export default home;
import React from 'react';
import ItemList from '../components/ItemList.js';
import MapContainer from './MapContainer.js';
import Search from './Search.js';

let home = (props) => {
  return (
    <div>
      <Search getItems={props.getItems}/>
      <MapContainer items={props.items} />
      <ItemList items={props.items} />
    </div>
  )
}

export default home;
import React from 'react';
import ItemList from '../containers/itemList.js';
import MapContainer from './MapContainer.js';

let home = (props) => {
  return (
    <div>
      <MapContainer />
      <ItemList />
    </div>
  )
}

export default home;
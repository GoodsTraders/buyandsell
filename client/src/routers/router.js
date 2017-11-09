import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddItem from '../components/AddItem.js';
import ItemList from '../components/ItemList.js';

let routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/add" component={AddItem} />
        <Route path="/list" component={ItemList} />
      </div>
    </Router>
  )
}

export default routes;
import React from 'react';
import ItemList from '../components/ItemList.js';
import MapContainer from './MapContainer.js';

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searched: '',
      filter: false,
      displayedItems: props.items
    }
    this.handleSearched = this.handleSearched.bind(this);
  }

  handleSearched (event) {
    var state = this;
    this.setState({
        searched: event.target.value
    }, function() {
        var display = this.props.items.filter(function(item) {
            if (item.item_name.toLowerCase().startsWith(state.state.searched.toLowerCase())) {
                return item
            }
        })
        this.setState({
            displayedItems: display
        }, function() {
            console.log(state.state.displayedItems);
        })
    });
  }

  selectItem (item) {
    let arr = [];
    arr.push(item);
    this.setState({
      displayedItems: arr
    })
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.searched} onChange={this.handleSearched} /> 
        {<MapContainer items={this.state.displayedItems} select={this.selectItem.bind(this)} />}
        <ItemList items={this.state.displayedItems} select={this.selectItem.bind(this)} />
      </div>
    )
  }
}

export default Home;
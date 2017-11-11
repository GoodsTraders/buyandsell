import React from 'react';
import ItemList from '../components/ItemList.js';
import MapContainer from './MapContainer.js';

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searched: '',
      filter: false,
      displayedItems: props.items,
      clicked: false
    }
    this.handleSearched = this.handleSearched.bind(this);
  }

  componentDidMount() {
    console.log('HELLOOO');
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
    this.setState({
      clicked: true
    })
    let arr = [];
    arr.push(item);
    this.setState({
      displayedItems: arr
    })
  }

  render() {
    return (
      <div>
        {<MapContainer items={this.state.displayedItems} select={this.selectItem.bind(this)} />}
        <div id='search-wrapper'>
          <div className='container'> 
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <h2>Search Items</h2>
                <input type='text' className='form-control' value={this.state.searched} onChange={this.handleSearched} placeholder='Search Items'/> 
              </div>
            </div>
          </div>
        </div>
        <ItemList items={this.state.displayedItems} select={this.selectItem.bind(this)} />
        <input type='text' value={this.state.searched} onChange={this.handleSearched} /> 
        <MapContainer items={this.state.displayedItems} select={this.selectItem.bind(this)} />
        <ItemList items={this.state.displayedItems} select={this.selectItem.bind(this)} clicked={this.state.clicked} email={this.props.email}/>
      </div>
    )
  }
}

export default Home;
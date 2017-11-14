import React from 'react';
import ItemList from '../components/ItemList.js';
import MapContainer from './MapContainer.js';
import SingleEntry from './SingleEntry.js';

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searched: '',
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

  render() {
    return (
      <div id='home-wrapper'>
        {(this.props.clicked === false ? (
          <div>
            <MapContainer items={this.state.displayedItems} select={this.props.selectItem} />
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
            <ItemList items={this.state.displayedItems} select={this.props.selectItem} clicked={this.props.clicked} email={this.props.email} fetch={this.props.fetch} />
          </div>
        ) :
        <div>
        <MapContainer items={[this.props.items]} select={this.props.selectItem} />
        <div id='search-wrapper'>
          <div className='container'> 
            <div className='row justify-content-center'>
              <div className='col-md-6'>
              </div>
            </div>
          </div>
        </div>
        <SingleEntry item={this.props.items} email={this.props.email}/>
      </div>
        )}
      </div>
    )
  }
}

export default Home;
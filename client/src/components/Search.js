import React from 'react';
import axios from 'axios';
class Search extends React.Component{
  constructor(props) {
    super(props) 
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var context = this;
    console.log(event.target.value);

  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
      </div>
    )
  }
}

export default Search;
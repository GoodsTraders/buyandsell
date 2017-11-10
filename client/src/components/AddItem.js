import React from 'react';
import axios from 'axios';
class AddItem extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      item_name: '',
      image_url: '',
      location: '',
      type: '',
      price: '',
      description: '',
      owner_email: ''
    }
    this.handleName = this.handleName.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.add = this.add.bind(this);
  }

  handleName(event) {
    this.setState({
      item_name: event.target.value
    })
  }
  handleImage(event) {
    this.setState({
      image_url: event.target.value
    })
  }
  handleLocation(event) {
    this.setState({
      location: event.target.value
    })
  }
  handleType(event) {
    this.setState({
      type: event.target.value
    })
  }
  handlePrice(event) {
    this.setState({
      price: event.target.value
    })
  }
  handleDescription(event) {
    this.setState({
      description: event.target.value
    })
  }
  handleEmail(event) {
    this.setState({
      owner_email: event.target.value
    })
  }

  add() {
    var context = this;
    axios.post('http://localhost:1337/add', {
      item_name: context.state.item_name,
      image_url: context.state.image_url,
      location: context.state.location,
      type: context.state.type,
      price: context.state.price,
      description: context.state.description,
      owner_email: context.state.owner_email
    })
    .then(function (response) {
      console.log('added to database');
    })
    .catch(function (error) {
        console.log('Error', error);
    })
  }

  render() {
    return(
      <div className='container'>
        <h1>Add an Item</h1>
        <form>
          <div className='form-group'>
            <label>Item Name:</label>
            <input type='text' className="form-control" value={this.state.item_name} onChange={this.handleName} placeholder='Item Name'/>
          </div>
          <div className='form-group'>
            <label>Image URL: </label><input type='text' className="form-control" value={this.state.image_url} onChange={this.handleImage} placeholder='https://www.imagelink.com/image/url'/>
          </div>
          <div className='form-group'>         
            <label>Location: </label><input type='text' className="form-control" value={this.state.location} onChange={this.handleLocation} placeholder='Location'/>
          </div>
          <div className='form-group'>
            <label>Type: </label><input type='text' className="form-control" value={this.state.type} onChange={this.handleType} placeholder='Type of Item'/>
          </div>
          <div className='form-group'>   
            <label>Price: </label><input type='text' className="form-control" value={this.state.price} onChange={this.handlePrice} placeholder='Price in USD'/>
          </div>
          <div className='form-group'>
            <label>Description: </label><input type ='text' className="form-control" value={this.state.description} onChange={this.handleDescription} placeholder='Item Description'/>
          </div>
          <div className='form-group'>
            <label>Email: </label><input type='text' className="form-control" value={this.state.owner_email} onChange={this.handleEmail} placeholder='Email' />
          </div>
          <button className="btn btn-primary" id='add-item-btn' onClick={this.add}>Add Item</button>
        </form>
      </div>
    )
  }
}

export default AddItem;
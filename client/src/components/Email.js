import React from 'react';
import axios from 'axios';

class Email extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  handleChange (event) {
    this.setState({
      text: event.target.value
    })
  }

  sendEmail () {
    var state = this;
    axios.post("http://localhost:1337/email", {
      owner_email: state.props.item.owner_email,
      user_email: state.props.email,
      text: state.state.text
    }).then(function(response) {
      console.log('sent to database')
      state.setState({
        text: ''
      })
    }).catch(function(error) {
      console.error('error');
    })
  }

  render() {
    return(
      <div>
        <div>
          <h4> Send an Email to the Seller! </h4>
          <input type='text' value={this.state.text} onChange={this.handleChange} />
          <button onClick={this.sendEmail}>Send</button>
        </div>
      </div>
    )
  }
}

export default Email;
import React from 'react';
import ItemEntry from './ItemEntry';
import axios from 'axios';


class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            myItems : []
        }
    }
    

    componentDidMount(){
        var context = this;
        var items = this.state.myItems.slice();
        //filter the items added by me
        var myItem = this.props.items.filter(function(item){
            return item.owner_email === context.props.email;
        })
        myItem.forEach(function(item){
            items.push(item);
        })
        context.setState({
            myItems:items
        })
        console.log('this is the item added by ', this.props.email)
        console.log('my item? ', myItem)
    }

    handleClick(item){
        var context = this;
        console.log('clicked this ', item)
        axios.post('deleteItem',{
            owner_email: context.props.email,
            item_name: item
        }).then(function (response) {
            console.log('deleted from database ', response);
          })
          .catch(function (error) {
              console.log('Error', error);
          })
    }

    render() {
       return(
           <div>
               <div className='profile-info'>
                    <h5 className='profile-name'>{this.props.name}</h5>
                    <img src={this.props.photo} className='profile-image' width="10%" height="10%"/>
                    <div className='profile-email'>{this.props.email}</div> 
                <div>Your items for sale: </div>
                </div>
                
                <div id='item-list-wrapper'>
                <div className='container'>
                    <div className='row'>
                        {this.state.myItems.map((item, index) => 
                            <div className='col-lg-4 custom-col' key={index}>
                                <ItemEntry item={item}/>
                                <button type="button" onClick={this.handleClick.bind(this,item.item_name)} >Mark as Sold </button>
                            </div>
                        )}
                        </div>
                        </div>
                        </div>

            </div>
       ) 
    }        

}

export default Profile;
import React from 'react';
import ItemEntry from './ItemEntry';


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

    render() {
       return(
           <div>
                <div>Hello... {this.props.name}</div>
                <img src={this.props.photo} width="10%" height="10%"/>
                <div>{this.props.email}</div> 
                <div>Your items for sale: </div>
                <div id='item-list-wrapper'>
                <div className='container'>
                    <div className='row'>
                        {this.state.myItems.map((item, index) => 
                            <div className='col-lg-4 custom-col' key={index}>
                                <ItemEntry item={item}/>
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
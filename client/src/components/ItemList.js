import React from 'react';
import ItemEntry from './ItemEntry';
import axios from 'axios';

class ItemList extends React.Component {

    componentDidMount() {
        var context = this;
        axios.get('http://localhost:1337/getDb')
        .then(function (response) {
            console.log('hello',response.data);
            context.props.getItems(response.data)
        })
        .catch(function (error) {
            console.log('Error', error);
        })
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        {this.props.items.map((item, index) => 
                            <div className='col-lg-4'>
                                <ItemEntry item={item} key={index} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemList;
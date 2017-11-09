import React from 'react';
import ItemEntry from './ItemEntry';
import axios from 'axios';

class ItemList extends React.Component {

    componentDidMount() {
        var context = this;
        axios.get('http://localhost:1337/getDb')
        .then(function (response) {
            console.log(response.data);
            context.props.getItems(response.data)
        })
        .catch(function (error) {
            console.log('Error', error);
        })
    }

    render() {
        return (
            <div>
                {this.props.items.map((item, index) => 
                    <ItemEntry item={item} key={index} />
                )}
            </div>
        );
    }
}

export default ItemList;
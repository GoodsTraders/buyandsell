import React from 'react';
import ItemEntry from './ItemEntry';

class ItemList extends React.Component {
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
import React from 'react';
import ItemEntry from './ItemEntry';

class ItemList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searched: '',
            filter: false,
            displayedItems: this.props.items
        }
        this.handleSearched = this.handleSearched.bind(this);
    }

    handleSearched (event) {
        var state = this;
        this.setState({
            searched: event.target.value
        }, function() {
            var display = this.props.items.filter(function(item) {
                if (item.item_name.startsWith(state.state.searched)) {
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
        console.log('this props', this.props)
        return (
            <div>
                <input type='text' value={this.state.searched} onChange={this.handleSearched} /> 
                <div id='item-list-wrapper'>
                    <div className='container'>
                        <div className='row' >
                            {this.state.displayedItems.map((item, index) => 
                                <div className='col-lg-4' key={index}>
                                    <ItemEntry item={item}  />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemList;
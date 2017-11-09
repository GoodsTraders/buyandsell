import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getItems} from '../actions/getItems';
import ItemList from '../components/ItemList';


function mapStateToProps(state) {
    return {
        items: state.itemStore.items
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({getItems: getItems}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ItemList);
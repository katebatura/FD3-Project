"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import { prod_filter } from "../../redux/prodFilterAC";

class Search extends React.Component {
          
    
    newProdFilterRef = '';

    setNewProdFilterRef = (ref) => {
        this.newProdFilterRef = ref
    }
    
    filterProds = () => {
        this.props.dispatch( prod_filter(this.newProdFilterRef.value) );
    }

    render() {

    return (
        <div>
          <button  onClick =  {this.filterProds} ><NavLink to = "/catalogue">Поиск</NavLink></button>
		  <input type="text" name="search" id="search" className="search-input"  ref = {this.setNewProdFilterRef}  />
        </div>
    );

  }

}

const mapStateToProps = function (state) {
    return {    
      products: state.products,
    };
  };
  
  export default connect(mapStateToProps)(Search);

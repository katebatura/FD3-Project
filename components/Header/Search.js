"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import { prod_filter } from "../../redux/prodFilterAC";

import '../../styles/Header/Search.css';

class Search extends React.Component {
          
    state = {
      failedProdFilter: false,
    }
    
    newProdFilterRef = '';

    setNewProdFilterRef = (ref) => {
        this.newProdFilterRef = ref
    }
    
    filterProds = (event) => {
      
      if (this.newProdFilterRef.value == ''){
        this.setState( {failedProdFilter: true} )
        event.preventDefault();
      }

      this.props.dispatch( prod_filter(this.newProdFilterRef.value) );
    }

    render() {

    return (
        <div className = "search">
          <input type="text" name="search" id="search" className="search-input"  ref = {this.setNewProdFilterRef}
            placeholder = {this.state.failedProdFilter ? "Введите название продукта" : null} />
       
            <NavLink to = "/catalogue"  onClick =  {this.filterProds} className = "search-button" >
              <i className="fas fa-search"></i>
            </NavLink>
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

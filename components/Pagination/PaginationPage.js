import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import { page_change } from "../../redux/pageAC";

import PaginationItem from './PaginationItem';
import Product from '../Catalogue/Product';

import './PaginationPage.css';

class PaginationPage extends React.PureComponent {
         
  static propTypes = {
    products: PropTypes.array.isRequired, //передан из родительского компонента
    startLink: PropTypes.string.isRequired, //передан из родительского компонента
    page: PropTypes.object.isRequired,
  };

  componentWillUnmount() {
    this.props.dispatch( page_change(1) );
  }
  
  render() {

    let prodData = [];
    let start = (this.props.page.page - 1) * 50; //по 50 продукта на странице
    let end = this.props.page.page * 50;
    for(let i = start; i < end; i++ ) {
        if(this.props.products[i])
          prodData.push(this.props.products[i]);
    }   
  
    let l = this.props.products.length;

    let pageArr = [];
    let pageQty = Math.ceil(l / 50);//по 50 продукта на странице
    for(let i = 1; i <= pageQty; i++) {        
        pageArr.push(<PaginationItem key = {i} num = {i} startLink = {this.props.startLink} />)
      }


    let productsArr = [];
    for(let i=0; i < prodData.length; i++) {
      let prod = prodData[i];
      productsArr.push(<Product key = {prod.id} info = {prod} page = {this.props.page.page} />)
    }

    return(
        <div className = "catalogue page">
        {pageArr.length > 1? 
          <ul className = "pagination">
              {pageArr}
          </ul>
          :null
        }
          <div className = "products-container">
            {productsArr}
          </div>        
            
        </div>
    );
  }

}
      
const mapStateToProps = function (state) {
  return {    
    page: state.page,
  };
};

export default connect(mapStateToProps)(PaginationPage);
"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import isoFetch from 'isomorphic-fetch';

import Product from '../components/Catalogue/Product';

import { productsLoadingAC, productsErrorAC, productsSetAC } from "../redux/productsAC";

class Page_Catalogue extends React.PureComponent {
  
  static propTypes = {
    products: PropTypes.object.isRequired,
  };

  
  componentDidMount() {
    if(!this.props.products.productsList){

      this.props.dispatch( productsLoadingAC() ); // переводим раздел products стора в состояние "загружается"

      isoFetch("../products.json")
          .then( (response) => { // response - HTTP-ответ
              if (!response.ok) {
                  let Err = new Error("fetch error " + response.status);
                  Err.userMessage = "Ошибка связи";
                  throw Err;
              }
              else
                  return response.json();
          })
          .then( (data) => {
              this.props.dispatch( productsSetAC(data) ); // переводим раздел products стора в состояние "данные загружены"
          })
          .catch( (error) => {
              console.error(error);
              this.props.dispatch( productsErrorAC() ); // переводим раздел products стора в состояние "ошибка"
            });
        }

  }


          
  render() {

    if ( this.props.products.status <= 1 )
      return "загрузка...";

    if ( this.props.products.status === 2 )
      return "ошибка загрузки данных";

    if ( this.props.products.status === 3 ) {
       

      let productsArr = [];
      let l = this.props.products.productsList.length;
      for(let i=0; i < l; i++) {
        let prod = this.props.products.productsList[i];
        productsArr.push(<Product key = {prod.id} info = {prod} />)
      }

      return (
        <div className = "catalogue page">
          {productsArr}
        </div>
      );

    }   
    
  }

}
   
const mapStateToProps = function (state) {
  return {    
    products: state.products,
  };
};

export default connect(mapStateToProps)(Page_Catalogue);
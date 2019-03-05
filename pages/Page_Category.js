import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import { productsLoadingAC, productsErrorAC, productsSetAC } from "../redux/productsAC";
import isoFetch from 'isomorphic-fetch';

import Product from '../components/Catalogue/Product'

class Page_Category extends React.PureComponent {
         
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

      let category = this.props.match.params.category;

      let prodData = this.props.products.productsList.filter( prod => prod.category == category );

      let productsArr = [];
      let l = prodData.length;
      for(let i=0; i < l; i++) {
        let prod = prodData[i];
        productsArr.push(<Product key = {prod.id} info = {prod} />)
      }

      return (
        <div className = "catalogue page">
          {l > 0 ? productsArr : <span>нет продуктов данной категории</span>}
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

export default connect(mapStateToProps)(Page_Category);
"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import { productsLoadingAC, productsErrorAC, productsSetAC } from "../redux/productsAC";
import { page_change } from "../redux/pageAC";

import GoTopButton from '../components/GoTopButton';
import {goTop} from '../services/GoTop';

import isoFetch from 'isomorphic-fetch';

import PaginationPage from '../components/Pagination/PaginationPage';

class Page_Catalogue extends React.PureComponent {
  
  static propTypes = {
    products: PropTypes.object.isRequired,
    prodFilter: PropTypes.object.isRequired,
    page: PropTypes.number,//from Controller
  };

  
  componentDidMount() {
            
    $(function() {
      $("#go-top").scrollToTop(); //import from goTop
      });
      
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

        if(this.props.page)//если page пришла из контроллера, заменим ее в редьюсере        
          this.props.dispatch( page_change(this.props.page) );//если нету, то по умолчанию оставим - 1

  }
          
  render() {

    if ( this.props.products.status <= 1 )
      return "загрузка...";

    if ( this.props.products.status === 2 )
      return "ошибка загрузки данных";

    if ( this.props.products.status === 3 ) {
           
      let filterProductsList = this.props.products.productsList.filter( v => v.name.indexOf(this.props.prodFilter.prodFilter) != -1 );
      
      return (
        <div>
          
          <div className = "breadcrumbs-container">
            <NavLink to="/" exact className="breadcrumbs">Главная </NavLink>
            <span className="breadcrumbs-arr" > &rarr; </span>
            <NavLink to="/catalogue" className="breadcrumbs">Каталог</NavLink>
          </div>
          <hr />

          {filterProductsList.length > 0 ?
            <PaginationPage products = {filterProductsList}  startLink = {'/catalogue'} />
            :<span>Поиск не дал результатов</span>
          }

          <GoTopButton />

        </div>
      );
    
      } 
    
  }

}
   
const mapStateToProps = function (state) {
  return {    
    products: state.products,
    prodFilter: state.prodFilter,
  };
};

export default connect(mapStateToProps)(Page_Catalogue);
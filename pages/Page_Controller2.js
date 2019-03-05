"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import Page_Product from './Page_Product';
import Page_Category from './Page_Category';

class Page_Controller extends React.PureComponent {
             
  render() {
    let param = this.props.match.params.param;
    let param2 = this.props.match.params.param2;
    
    if(param2 && param2.indexOf('page') > -1){
        return <Page_Category category = {param}  page = {parseInt(param2)} />
      }

    if(param2 && param2.indexOf('page') == -1){
        return <Page_Product prodId = {param2} />
    }

  }

}
 
export default Page_Controller;
"use strict";

import React from 'react';
import Page_Category from './Page_Category';
import Page_Catalogue from './Page_Catalogue';

class Page_Controller extends React.PureComponent {
             
  render() {
    
    let param = this.props.match.params.param;
    
    if(param && param.indexOf('page') == -1)
      return <Page_Category category = {param} />
       

    if(param && param.indexOf('page') > -1){
      return <Page_Catalogue page = {parseInt(param)}/>       
     }
    

  }

}
export default Page_Controller;
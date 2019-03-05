import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_Main from './Page_Main';
import Page_Catalogue from './Page_Catalogue';
import Page_About from './Page_About';
import Page_Contacts from './Page_Contacts';
import Page_Cart from './Page_Cart';
import Page_Controller from './Page_Controller';
import Page_Controller2 from './Page_Controller2';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={Page_Main} />
        <Route path="/catalogue" exact component={Page_Catalogue} />
        <Route path="/catalogue/:param" exact component={Page_Controller} />
        <Route path="/catalogue/:param/:param2" exact component={Page_Controller2} />
        <Route path="/about" component={Page_About} />
        <Route path="/contacts" component={Page_Contacts} />
        <Route path="/cart" component={Page_Cart} />
      </div>
    );
    
  }

}
    
export default PagesRouter;
    
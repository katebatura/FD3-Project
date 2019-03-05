import React from 'react';

class Cart_Empty extends React.PureComponent {
          
  render() {

    return (
        <div className = "cart-empty">
          <h3 className="page-subtitle">
            В вашей корзине пусто!
          </h3>
          <p>
          Для добавления деталей в корзину нажмите на ссылку с изображением корзины в таблице результатов поиска 
           <i className="fa fa-shopping-cart"></i>
          </p>
        </div>
        
    );
    
  }

}
    
export default Cart_Empty;
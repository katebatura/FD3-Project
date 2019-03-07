import React from 'react';

class Cart_Empty extends React.PureComponent {
          
  render() {

    return (
        <div className = "cart-empty">
          <h3 className="page-subtitle">
            В вашей корзине пусто!
          </h3>
          <p>
           Для добавления продуктов в корзину нажмите на кнопку с изображением корзины "<i className="fas fa-cart-arrow-down"></i> 
            " рядом с выбранным продуктом           
          </p>
        </div>
        
    );
    
  }

}
    
export default Cart_Empty;
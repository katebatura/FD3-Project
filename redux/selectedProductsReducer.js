import { SUM_QTY } from './cartAC';

const initState = {
    
    productsQTY: 0,
  
  }
  
  
  function selectedProductsReducer(state = initState, action) {
    switch (action.type) {

      case SUM_QTY: { 
        let newQTY = state.productsQTY + action.qty;
        let newState = {...state,
          productsQTY:  newQTY};
        return newState;
      }

      default:
        return state;
    }
  }
  
  export default selectedProductsReducer;
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCES,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCTS_CART,
} from './types';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  cart: {},
  total: 0,
};
const tiendaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCES:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_PRODUCTS_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.name]: action.payload.amount,
        },
        total: state.total + action.payload.total,
      };
    default:
      return state;
  }
};

export default tiendaReducer;

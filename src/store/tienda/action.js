import axiosShop from '../../configs/axiosConfig';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCES,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCTS_CART,
} from './types';

const fetchProductsAction = () => ({
  type: FETCH_PRODUCTS,
});
const fetchProductsSuccessAction = products => {
  return {
    type: FETCH_PRODUCTS_SUCCES,
    payload: products,
  };
};

const fetchProductsFailureAction = errorMsg => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: errorMsg,
  };
};

export const addProductsCart = (name, total, amount) => {
  return {
    type: ADD_PRODUCTS_CART,
    payload: {name, total, amount},
  };
};

export const fetchProducts = () => {
  return async dispatch => {
    dispatch(fetchProductsAction);
    axiosShop
      .get('/api/products')
      .then(res => {
        dispatch(fetchProductsSuccessAction(res.data.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchProductsFailureAction('Error al cargar los productos'));
      });
  };
};

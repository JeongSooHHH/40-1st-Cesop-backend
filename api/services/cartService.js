const { cartDao } = require("../models");

const addToCart = async (productName, quantity, price, totalPrice) => {  
  return await cartDao.addToCart(productName, quantity, price, totalPrice);
}; 

const getProductsFromCart = async cartId => {
  const cart = await cartDao.getProductsFromCart(cartId);
  return cart;
};

const updateCart = async cartId => {
  const cart = await cartDao.updateCart(cartId);
  return cart;
}; 

const deleteFromCart = async name => {
  const cart = await cartDao.deleteFromCart(name);
  return cart;
};

module.exports ={
  addToCart,
  getProductsFromCart,
  updateCart,
  deleteFromCart
};

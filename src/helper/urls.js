const ROOT_URL = "http://localhost:4000/api";

const URLS = {
  fetchproducts: (type) => ROOT_URL + `/products/${type}`,
  addProduct: () => ROOT_URL + "/products/addProduct",
  login: () => ROOT_URL + "/users/login",
  addTocart: (id, qty = 1) => ROOT_URL + `/cart/add?product=${id}&qty=${qty}`,
  removeFromCart: (id) => ROOT_URL + `/cart/remove?id=${id}`,
  increaseCount: (id) => ROOT_URL + `/cart/increaseItem?id=${id}`,
  decreaseCount: (id) => ROOT_URL + `/cart/decreaseItem?id=${id}`,
  signup: () => ROOT_URL + "/users/signup",
  editProfile: () => ROOT_URL + "/users/edit",
  fetchProfile: (id) => ROOT_URL + `/users/${id}`,
  fetchCart: () => ROOT_URL + `/cart/`,
};
export default URLS;

import axios from "axios";
export const getCartsRequest = () => axios.get("/cart");
export const createCartsRequest = (cart) => axios.post("/cart", cart);
export const deleteCartsRequest = (id) => axios.delete(`/cart/${id}`);

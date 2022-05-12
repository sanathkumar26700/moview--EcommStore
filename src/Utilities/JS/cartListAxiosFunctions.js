import axios from "axios";

const getCartList = async (token) => {
	return await axios.get("/api/user/cart", {
		headers: { authorization: token },
	});
};

const addToCartList = async (product, token) => {
	return await axios.post(
		"/api/user/cart/",
		{ ...product },
		{ headers: { authorization: token } }
	);
};

const cartListProductCounter = async (productId, token, type) => {
	return await axios.post(
		`/api/user/cart/${productId}`,
		{ action: { type } },
		{ headers: { authorization: token } }
	);
};

const removeFromCartList = async (productId, token) => {
	return await axios.delete(`/api/user/cart/${productId}`, {
		headers: { authorization: token },
	});
};

export {getCartList, addToCartList, cartListProductCounter, removeFromCartList}
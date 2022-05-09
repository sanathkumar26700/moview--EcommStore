import axios from "axios";

export const getWishlist = async (token) => {
	return await axios.get("/api/user/wishlist", {
		headers: { authorization: token },
	});
};

export const addToWishlist = async (product, token) => {
	return await axios.post(
		"/api/user/wishlist",
		{ product },
		{ headers: { authorization: token } }
	);
};

export const removeProductInWishlist = async (productId, token) => {
	return await axios.delete(`/api/user/wishlist/${productId}`, {
		headers: { authorization: token },
	});
};
import axios from "axios";

const getWishlist = async (token) => {
	return await axios.get("/api/user/wishlist", {
		headers: { authorization: token },
	});
};

const addToWishlist = async (product, token) => {
	return await axios.post(
		"/api/user/wishlist",
		{ product },
		{ headers: { authorization: token } }
	);
};

const removeFromWishlist = async (productId, token) => {
	return await axios.delete(`/api/user/wishlist/${productId}`, {
		headers: { authorization: token },
	});
};

export {getWishlist, addToWishlist, removeFromWishlist}
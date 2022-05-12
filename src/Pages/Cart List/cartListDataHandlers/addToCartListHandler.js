import {addToCartList} from '../../../Utilities/JS/cartListAxiosFunctions'
import { toast } from "react-toastify";

const addToCartListHandler = async(product, token, userDataDispatch, setFetchingCartList) => {
    setFetchingCartList(true)
        try {
            const response = await addToCartList(product, token);
            if (response.status === 201) {
                toast.success("Added to cart");
                userDataDispatch({type: "SET_CARTLIST", payload: response?.data.cart})
            }
            setFetchingCartList(false)
        } catch (error) {
            toast.error("Oops, something went wrong !");
        }
}

export default addToCartListHandler

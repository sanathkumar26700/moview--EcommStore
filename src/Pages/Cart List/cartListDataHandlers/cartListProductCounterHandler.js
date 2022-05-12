import {cartListProductCounter} from '../../../Utilities/JS/cartListAxiosFunctions'
import {removeFromCartList} from '../../../Utilities/JS/cartListAxiosFunctions'
import { toast } from "react-toastify";

const addToCartListHandler = async(id, token, operation,  quantity, userDataDispatch, setFetchingCartList) => {
    let response;
    setFetchingCartList(true)
        try {
                if((quantity === 1) && (operation === 'decrement')){
                    response = await removeFromCartList(id, token);
                }else{
                    response = await cartListProductCounter(id, token, operation);
            }
            if (response.status === 200) {
                toast.success("Updated your cart !");
                userDataDispatch({type: "SET_CARTLIST", payload: response?.data.cart})
            }
            setFetchingCartList(false)
        } catch (error) {
            console.log(error)
            toast.error("Oops, something went wrong !");
        }
}

export default addToCartListHandler
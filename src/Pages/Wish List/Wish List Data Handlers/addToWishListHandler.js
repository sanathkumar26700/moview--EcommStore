import { toast } from "react-toastify";
import {addToWishlist} from '../../../Utilities/JS/wishListAxiosFunctions'

const addToWishlistHandler = async(product, token, userDataDispatch, setFetchingWishList) => {
    setFetchingWishList(true)
    try{
        const response = await addToWishlist(product, token);
        if(response.status === 201){
            toast.success('Added to WishList !')
            userDataDispatch({
                type: "SET_WISHLIST", 
                payload: response.data.wishlist
            })
            setFetchingWishList(false)
        }
    }catch(error){
        console.log(error)
        toast.error('Oops! Something went wrong, try again later.')
    }
}

export default addToWishlistHandler
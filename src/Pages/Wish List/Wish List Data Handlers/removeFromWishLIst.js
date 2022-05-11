import { toast } from "react-toastify";
import { removeFromWishlist} from '../../../Utilities/JS/wishListAxiosFunctions'

const removeFromWishlistHandler = async(_id, token, userDataDispatch, setInWishList) => {
    try{
        const response = await removeFromWishlist(_id, token);
        console.log("removed");
        if(response.status === 200){
            toast.success('Removed from WishList !')
            userDataDispatch({
                type : "SET_WISHLIST", 
                payload : response.data.wishlist
            })
            setInWishList(false)
        }
    }catch(error){
        console.log(error)
        toast.error('Oops! Something went wrong, try again later.')
    }
}

export {removeFromWishlistHandler}
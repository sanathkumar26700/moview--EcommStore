import { createContext, useContext, useReducer, useState, useEffect} from 'react';
import userDataReducer from '../Reducers/userDataReducer'
import {getWishlist} from '../Utilities/JS/wishListAxiosFunctions'
import {getCartList} from '../Utilities/JS/cartListAxiosFunctions'
import {useAuth} from './authContext'
import { toast } from "react-toastify";

const userDataContext = createContext({})

function UserDataProvider({children}) {

    const {auth : {token, isAuthorized}} = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [userData, userDataDispatch] = useReducer(userDataReducer, {wishListData : [], cartListData : []})


    useEffect(() =>{
        if(isAuthorized){

            (async () =>{
                setIsLoading(true)
                try{
                    const response = await getCartList(token)
                    if(response.status === 200){
                        userDataDispatch({type: "SET_CARTLIST", payload: response?.data.cart})
                    }
                    setIsLoading(false)
                }catch(err){
                    toast.error("Oops! Something went wrong 😕")
                }
            })();

            (async () =>{
                setIsLoading(true)
                try{
                    const response = await getWishlist(token)
                    
                    if(response.status === 200){
                        userDataDispatch({type: "SET_WISHLIST", payload: response?.data.wishlist})
                    }
                    setIsLoading(false)
                }catch(err){
                    toast.error("Oops! Something went wrong 😕")
                }
            })();   
        }
    },[isAuthorized,token])

  return (
    <userDataContext.Provider value ={{userData, userDataDispatch, isLoading}}>
        {children}
    </userDataContext.Provider>
  )
}

const useUserData = () => useContext(userDataContext)

export {UserDataProvider, useUserData}
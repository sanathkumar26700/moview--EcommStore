import { createContext, useContext, useReducer } from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import {dataReducer} from '../Reducers/dataReducer'


const dataContext = createContext()

const DataContextProvider =({children}) =>{

    const [state, dispatch] =  useReducer(dataReducer,
         {  data : [],
            sortFrom : "",
            excludeOutOfStock: "",
            pricing : "",
            isLoading: true,
            categories : [],
            selectedCategories : [],
            rating : 5,
            reset : false,
            searchFor : ""
})
    
    useEffect(() =>{
        (async function(){
            try{
            let response = await axios.get('/api/products');
            dispatch({type : "GET_DATA"})
            const productList = response.data.products.map((product) =>{
                return {...product,  discountedPrice : (product.price - (product.price*(product.discount/100)))}
            })
            dispatch({type : "LOAD_DATA", payload : {isLoading : false, productList}})
            }catch(err){
                alert(err.message)
            }
        })();
    },[])

    useEffect(() =>{
        (async function(){
            try{
            let response = await axios.get('/api/categories');
            dispatch({type : "GET_DATA"})
            const categories = response.data.categories
            dispatch({type : "LOAD_DATA", payload : {isLoading : false, categories}})
            }catch(err){
                alert(err.message)
            }
        })();
    },[])

    
   return(<dataContext.Provider value={{state, dispatch}}>{children}</dataContext.Provider>)
}
const useDataContext = () => useContext(dataContext);

export {useDataContext, DataContextProvider}

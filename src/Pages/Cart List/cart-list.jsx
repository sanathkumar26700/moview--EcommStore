import React from 'react';
import SingleProduct from '../../Components/Single Product/single-product'
import { useUserData } from '../../Context/userDataContext';
import BillBox from './Components/billBox'
import './cart-list.css'


const CartList = () => {

    const {userData:{cartListData}, isLoading} = useUserData()

    return (
        <>
            {isLoading ? 
                <img className="loader--image" src="https://cutewallpaper.org/21/loading-gif-transparent-background/HopeWell.gif" alt="loader"/> 
            :
            <>
                <div className="page--heading">
                    <span>
                        My cart({cartListData.length})
                    </span>
                </div>                          
               { cartListData.length ?  
                    <section className="cart-list__section ">
                        <section className="card-list__container">
                            {cartListData.map((product) => <SingleProduct cardDirection={'horizontal'} product = {product} key={product._id}/>)}
                        </section>   
                            <BillBox/>
                    </section>
                :
                    <h1 className = "Product-list__empty--text">Your cart is empty 🙄</h1>}
            </>
            }
        </>
    );
};
export default CartList
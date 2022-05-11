import React from 'react';
import SingleProduct from '../../Components/Single Product/single-product'
import Footer from '../../Components/Footer/footer'
import {useUserData} from '../../Context/userDataContext'


const WishList = () => {

    const {userData:{wishListData}, isLoading} = useUserData()

    return (
        <>
        {isLoading ? 
            <img className="loader--image" src="https://cutewallpaper.org/21/loading-gif-transparent-background/HopeWell.gif" alt="loader"/> 
        :
        <>
            <div className="page--heading">
                <span>
                    My wishlist ({wishListData.length})
                </span>
            </div>
            {wishListData.length ?
            <section className="wish-list__container">
                <section className="product-list__section">
                    {wishListData.map(product => <SingleProduct product={product} key={product._id}/>)}
                </section>
            </section>
            :
            <h1 className = "Product-list__empty--text">Your wishlist is empty 🙄</h1>
            }
        </>
        }
        </>
    );
};

export default WishList;
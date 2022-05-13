import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from "react-router-dom";
import {useAuth} from '../../Context/authContext'
import {useUserData} from '../../Context/userDataContext'
import addToWishlistHandler from '../../Pages/Wish List/Wish List Data Handlers/addToWishListHandler'
import {removeFromWishlistHandler} from '../../Pages/Wish List/Wish List Data Handlers/removeFromWishLIst.js'
import addToCartListHandler from '../../Pages/Cart List/cartListDataHandlers/addToCartListHandler'
import removeFromCartListHandler from '../../Pages/Cart List/cartListDataHandlers/removeFromCartHandler'
import cartListProductCounterHandler from '../../Pages/Cart List/cartListDataHandlers/cartListProductCounterHandler'

import './single-product.css'

const SingleProduct = ({ product, cardDirection }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const { title, image, director, price, discount, category, rating, inStock, description, discountedPrice, _id }  = product
    const [inWishList, setInWishList] = useState(false)
    const [fetchingWishList, setFetchingWishList] = useState(false)
    const [inCartList, setInCartList] = useState(false)
    const [fetchingCartList, setFetchingCartList] = useState(false)

    const {auth : {token, isAuthorized}} = useAuth();
    const {userData:{wishListData, cartListData}, userDataDispatch} = useUserData()
    const quantity = cartListData?.find(item => item._id === _id)?.qty

useEffect(()=>{
    wishListData.find(item => item._id === _id) && setInWishList(true)
    cartListData.find(item => item._id === _id) && setInCartList(true)
},[_id, wishListData,cartListData])

    return (
        <div className = {`card ${cardDirection}`}>
            <div className="card__product--img ">
                <img className="img" src={image} alt={title} />
                <button 
                    className={inWishList ? 'card__btn-icon card__btn-fav in--wishlist ' : 'card__btn-icon card__btn-fav'}
                    disabled = {fetchingWishList}
                    onClick = { 
                        isAuthorized ?
                            inWishList ?
                                    () => removeFromWishlistHandler(_id, token, userDataDispatch, setInWishList)
                                :
                                    () => addToWishlistHandler(product, token, userDataDispatch, setFetchingWishList)
                        :
                            () => navigate('/login-page')    
                    }
                    >
                    <i className="fas fa-heart"></i>
                </button>
                <span className="badge--text badge--gray">{rating}<i className="fas fa-star"></i></span>
            </div>
            <div className="card__product--content">
                <span>{category}</span>
                <h2 className="card__product--title">{title}</h2>
                <h4 className="card__product--company">{director}</h4>
                <p className="card__product--description">{description}</p>
                {(location.pathname === '/cart-list') &&
                    <div className="card__product--quantity">
                        <button 
                            onClick={() => cartListProductCounterHandler(_id, token, 'decrement', quantity, userDataDispatch, setFetchingCartList)}
                            className = 'btn btn--animated card__btn--add-to-cart'>-</button>
                        {quantity}
                        <button 
                            onClick={() => cartListProductCounterHandler(_id, token, 'increment', quantity, userDataDispatch, setFetchingCartList)}
                            className = 'btn btn--animated card__btn--add-to-cart'>+</button>
                    </div>
                }
                <div className="card__product--details">
                    <div className="product__price">
                        <span className="product__price-selling">{`₹${discountedPrice}`}</span>
                        <span className="product__price-cost"> {discountedPrice === price ? "" : `₹ ${price}`}</span>
                        <span className="product__price-discount">{discount === 0 ? "" : `${discount}%`}</span>
                    </div>
                    <div className="card__btn--container">
                        {inStock ?
                            inCartList?
                                    (location.pathname === '/cart-list') ? 
                                            <button 
                                                onClick={() => removeFromCartListHandler(_id, token, userDataDispatch, setFetchingCartList)} 
                                                class="btn btn--animated card__btn--remove-from-cart"
                                                disabled={fetchingCartList}
                                                >
                                                Remove<i class=" fas fa-shopping-cart btn__icon-right " aria-hidden="true"></i>
                                            </button>
                                        :
                                            <Link  to='/cart-list'>   
                                                <button className="btn btn--animated card__btn--add-to-cart">
                                                    Go to cart<i className="fas fa-shopping-cart btn__icon-right"></i>
                                                </button>
                                            </Link>
                                :
                                    <button 
                                        onClick={
                                            isAuthorized ?
                                                    ()=>addToCartListHandler(product, token, userDataDispatch, setFetchingCartList)
                                                :
                                                    () => navigate('/login-page')
                                        }
                                        className="btn btn--animated card__btn--add-to-cart"
                                        disabled={fetchingCartList}
                                        >
                                            Add to cart<i className="fas fa-shopping-cart btn__icon-right"></i>                                        
                                    </button>
                                    
                            :
                                <button className="btn btn__disabled btn__secondary">Out of Stock</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
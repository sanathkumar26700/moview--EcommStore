import React from 'react';
import {useState, useEffect} from 'react';
import priceCalculator from '../../Utilities/JS/priceCalculator';
import axios from 'axios';
import Filter from '../../Components/Filter/filter';
import './product-list.css';

const ProductList = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)


    useEffect(() =>{
     (async function(){
         try{
            let res = await axios.get('/api/products')
            setData(res.data.products)
            setLoader(false)
         }catch(err){
             alert(err.message)
         }
        })();
    },[])

    return (
    <div >
        {loader ? 
        <img className="loader--image" src="https://cutewallpaper.org/21/loading-gif-transparent-background/HopeWell.gif" alt="loader"/> 
        :
        <>
        <section className="product-list__container">
            <Filter/>
            <section className="product-list__section ">
            {data.map(({_id, title, image, director, price, discount, category, rating, description}) => (
                <div key={_id} className="card vertical">
                    <div className="card__product--img ">
                            <img className="img" src={image} alt={title}/>
                        <span className="card__btn-icon card__btn-fav"><i className="fas fa-heart"></i></span>
                        <span className="badge--text badge--gray">{rating}<i class="fas fa-star"></i></span>
                    </div>
                    <div className="card__product--content">
                        <span>{category}</span>
                            <h2 className="card__product--title">{title}</h2>
                            <h4 className="card__product--company">{director}</h4>
                        <p className="card__product--description">{description}</p>
                        <div className="card__product--details">
                            <div className="product__price">
                                <span className="product__price-selling">{`₹ ${priceCalculator(price, discount)}`}</span>
                                <span className="product__price-cost"> {priceCalculator(price, discount) === price ? "" : `₹ ${priceCalculator(price, discount)}`}</span>
                                <span className="product__price-discount">{discount === 0 ? "" : `${discount}%`}</span>
                            </div>
                            <div className="card__btn--container">
                                <button className="btn btn--animated card__btn--add-to-cart">
											Add to cart<i className="fas fa-shopping-cart btn__icon-right"></i>
								</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </section>
        </section>
            </>
        }
    </div>
    );
};

export default ProductList;
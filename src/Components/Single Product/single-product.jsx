const SingleProduct = ({product : {title, image, director, price, discount, category, rating, inStock, description, discountedPrice}}) =>{
    return (  <div  className="card vertical">
                    <div className="card__product--img ">
                            <img className="img" src={image} alt={title}/>
                        <span className="card__btn-icon card__btn-fav"><i className="fas fa-heart"></i></span>
                        <span className="badge--text badge--gray">{rating}<i className="fas fa-star"></i></span>
                    </div>
                    <div className="card__product--content">
                        <span>{category}</span>
                            <h2 className="card__product--title">{title}</h2>
                            <h4 className="card__product--company">{director}</h4>
                        <p className="card__product--description">{description}</p>
                        <div className="card__product--details">
                            <div className="product__price">
                                <span className="product__price-selling">{`₹${discountedPrice}`}</span>
                                <span className="product__price-cost"> {discountedPrice === price ? "" : `₹ ${price}`}</span>
                                <span className="product__price-discount">{discount === 0 ? "" : `${discount}%`}</span>
                            </div>
                            <div className="card__btn--container">
                                {inStock?
                                <button className="btn btn--animated card__btn--add-to-cart">
											Add to cart<i className="fas fa-shopping-cart btn__icon-right"></i>
								</button>
                                :
                                <button className="btn btn__secondary">Out of Stock</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>)
}

export default SingleProduct;
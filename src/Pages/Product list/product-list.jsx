import {React} from 'react';
import SingleProduct from '../../Components/Single Product/single-product'
import Filter from '../../Components/Filter/filter';
import {useDataContext} from '../../Context/dataContext'
import {filterDataByExcludingOutOfStock, filterDataBySort, filterBySelectedCategories, filterDataByRating, filterDataByPricing, filterBySearch} from '../../Utilities/JS/filterFunctions'

import './product-list.css';

const ProductList = () => {

    const {state:{data, isLoading, sortFrom, excludeOutOfStock, pricing, selectedCategories, rating, searchFor}} = useDataContext()

    const filteredBySelectedCategories = filterBySelectedCategories(data, selectedCategories)
    const filteredDataBySort = filterDataBySort(filteredBySelectedCategories, sortFrom)
    const filteredDataByExcludingOutOfStock = filterDataByExcludingOutOfStock(filteredDataBySort, excludeOutOfStock)
    const filteredDataByPricing = filterDataByPricing(filteredDataByExcludingOutOfStock, pricing)
    const filteredDataByRating = filterDataByRating(filteredDataByPricing, rating)
    const finalData = filterBySearch(filteredDataByRating, searchFor)

    return (
    <section className="product-list__container">
            <Filter/>
        {isLoading ? 
        <img className="loader--image" src="https://cutewallpaper.org/21/loading-gif-transparent-background/HopeWell.gif" alt="loader"/> 
        :
        <>
            {finalData.length ?
                <section className="product-list__section ">
                    {finalData.map((product) => <SingleProduct product = {product} key={product._id}/>)}
                </section>
            : 
            <h1 className = "Product-list__empty--text">Products Unavailable 😣</h1>
            }
        </>
        }
    </section>
    );
};

export default ProductList;
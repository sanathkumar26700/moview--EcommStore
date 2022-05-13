import {useState} from 'react';
import SingleProduct from '../../Components/Single Product/single-product'
import Filter from '../../Components/Filter/filter';
import {useDataContext} from '../../Context/dataContext'
import {filterDataByExcludingOutOfStock, filterDataBySort, filterBySelectedCategories, filterDataByRating, filterDataByPricing, filterBySearch} from '../../Utilities/JS/filterFunctions'

import './product-list.css';

const ProductList = () => {

    const [display, setDisplay] = useState('')
    const {state:{data, isLoading, sortFrom, excludeOutOfStock, pricing, selectedCategories, rating, searchFor}} = useDataContext()

    const finalData = filterBySearch(filterDataByRating(filterDataByPricing(filterDataByExcludingOutOfStock(filterDataBySort(filterBySelectedCategories(data, selectedCategories), sortFrom), excludeOutOfStock), pricing), rating), searchFor)

    return (
        <>
        <div className="filter__action--container ">
        {((display === 'none') || (display === '')) &&
                <button onClick={() => setDisplay('block')} className="btn btn__underlined"><i className="fas fa-filter" aria-hidden="true"></i></button>}
        {(display === 'block') && 
                <button onClick={() => setDisplay('none')} className="btn btn__underlined"><i className="fas fa-times" aria-hidden="true"></i></button>}
        </div>
        <section className="product-list__container">
                <Filter display={display}/>
            {isLoading ? 
            <img className="loader--image" src="https://cutewallpaper.org/21/loading-gif-transparent-background/HopeWell.gif" alt="loader"/> 
            :
            <>
                {finalData.length ?
                    <section className="product-list__section ">
                        {finalData.map((product) => <SingleProduct cardDirection={'vertical'} product = {product} key={product._id}/>)}
                    </section>
                : 
                <h1 className = "Product-list__empty--text">Products Unavailable 😣</h1>
                }
            </>
            }
        </section>
        </>
    );
};

export default ProductList;
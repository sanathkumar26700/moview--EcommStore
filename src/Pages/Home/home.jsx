import React from 'react';
import {Link} from 'react-router-dom'
import {useDataContext} from '../../Context/dataContext'
import SingleProduct from '../../Components/Single Product/single-product'
import './Home.css'

const Home = () => {

    const {dispatch} = useDataContext()
    const {state:{data, selectedCategories}} = useDataContext()

    const categoryHandler = (categoryName) => {
        selectedCategories.length = 0;
        selectedCategories.push(categoryName);
        return selectedCategories
    }

    const trendingMovies = data.slice(0,5)

    return (
        <>
            <section class="hero__container">
                <div class="hero__text--container">
                    <h1 class="hero--text">Bring back the lost glory of CDs !</h1>
                    <Link  to='/product-list' class="btn btn__primary btn__primary--animated">shop now</Link>
                </div>
                <img src="https://moview-store.netlify.app/images/Compact_disc.svg.png" alt="compact-disk img" class="hero--img "/>
            </section>
            <section class="category__section">
                <div class="category__container">
                    <h1 class="category__title">Popular Categories</h1>
                    <Link to='/product-list'>
                        <figure 
                            onClick = {() =>  dispatch({type : "SORT_BY_CATEGORIES" , payload : categoryHandler("Blu-ray")})}
                            class="category--img">
                            <img src="https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Landing-page/blu-ray--logo.png?raw=true" alt="bluray--logo.jpg" />
                        </figure>
                    </Link>
                    <Link  to='/product-list'>
                        <figure 
                            onClick = {() =>  dispatch({type : "SORT_BY_CATEGORIES" , payload : categoryHandler("DVD")})}
                            class="category--img">
                            <img src="https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Landing-page/DVD--logo.png?raw=true" alt="DVD--logo.png"/>
                        </figure>
                    </Link>
                    <Link to='/product-list'>
                        <figure 
                            onClick = {() =>  dispatch({type : "SORT_BY_CATEGORIES" , payload : categoryHandler("VCD")})}
                            class="category--img">
                            <img src="https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/product-images/Landing-page/vcd--logo.png?raw=true" alt="VCD--logo.png "/>
                        </figure>
                    </Link>
                </div>
            </section>
            <section class="trending-list__container">
            <h1 class="product-list__title" id="product-list">Trending movies</h1>
                <section class="product-list__section">
                    {trendingMovies.map((product) => <SingleProduct cardDirection={'vertical'} product = {product} key={product._id}/>)}
                    <div class="vertical flex--center">
                        <Link  to='/product-list' class="btn btn__underlined btn__underlined--animated">
                            see more<i class="fas fa-chevron-right btn__icon-right"></i>
                        </Link>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Home;
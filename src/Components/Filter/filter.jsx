import React from 'react';
import {useDataContext} from '../../Context/dataContext'
import './filter.css';

function Filter({display}) {

    const {state:{sortFrom, excludeOutOfStock, categories, selectedCategories, pricing, rating}, dispatch} = useDataContext()

    const categoryHandler = (categoryName) => {
        if(selectedCategories.includes(categoryName)){
        return selectedCategories.filter(category => category !== categoryName)
           
        }else{
            selectedCategories.push(categoryName)
            return selectedCategories
        }
    }

    return (
        <div>
            <aside className="filter__section side-shadow"
                    style ={{display}}
            
            >
                <div className="filter--box">
                    <div className="filter--header">
                        <h1>filter</h1>
                        <span className="filter--reset badge--text badge--red"
                        onClick = {() => dispatch({type: "CLEAR"})}
                        >reset
                        </span>
                    </div>
                </div>
                <div className="filter--box">
                <div className="filter__container">
                    <h1>Category</h1>
                    {categories.map((category) =>{
                    return (<div>
                        <input 
                            className="category--input"  
                            type="checkbox" 
                            id={category._id}
                            value={category.categoryName}
                            checked = {selectedCategories.includes(category.categoryName)}
                            onChange = {(e) =>  dispatch({type : "SORT_BY_CATEGORIES" , payload : (categoryHandler(e.target.value))})}
                            />
                            <label className="category--label" key = {category._id} htmlFor={category._id}>{category.categoryName}</label>
                    </div>)}
                    )}
                </div>
                </div>
                <div className="filter--box">
                    <div className="filter__container">
                        <h1>Pricing</h1>                        
                            <div>
                                <input 
                                    className="category--input" 
                                    type="radio" 
                                    name="sortPrice"
                                    id= "HIGH_TO_LOW"
                                    onChange={()=>dispatch({type :"HIGH_TO_LOW"})}
                                    checked={sortFrom === "HIGH_TO_LOW"}/>
                                    <label htmlFor="HIGH_TO_LOW">High to Low</label>
                            </div>
                            <div>
                                <input 
                                    className="category--input" 
                                    type="radio" 
                                    name="sortPrice"
                                    id= "LOW_TO_HIGH"
                                    onChange={()=>dispatch({type :"LOW_TO_HIGH"})}
                                    checked={sortFrom === "LOW_TO_HIGH"}/>
                                <label htmlFor="LOW_TO_HIGH">Low to High</label>
                            </div>                       
                    </div>
                </div>
                <div className="filter--box">
                    <div className="filter__container">
                        <h1>Availability</h1>
                        <label >
                            <input className="category--input"  
                            type="checkbox"
                            onChange = {() => dispatch({type : "EXCLUDE_OUT_OF_STOCK"})}
                            checked={excludeOutOfStock === "EXCLUDE_OUT_OF_STOCK"} 
                            />                          
                            Exclude out of stock
                        </label>
                    </div>
                </div>
                <div className="filter--box">
                    <div className="filter__container">
                        <h1>Ratings</h1>
                        <div className="slide__container">
                            <div className="slider__label--container">
                                <label htmlFor="slider--range ">1</label>
                                <label htmlFor="slider--range ">2</label>
                                <label htmlFor="slider--range ">3</label>
                                <label htmlFor="slider--range ">4</label>
                                <label htmlFor="slider--range ">5</label>
                            </div>
                            <input style={{
							background: `linear-gradient(
                                            to right,
                                            var(--primary-color) ${((rating - 1) / 4) * 100}%,
                                            var(--primary-color-dark) ${((rating - 1) / 4) * 100}%
                                        )`}}
                                type="range"
                                min="1" 
                                max="5" 
                                step ="1"
                                value={rating}
                                className="slider" 
                                id="slider--range"
                                onChange = {(e) => dispatch({type : "RATING", payload : e.target.value})}
                             />
                        </div>
                    </div>
                </div>
                <div className="filter--box">
                    <div className="filter__container">
                        <h1>Pricing</h1>
                        
                            <div>
                            <input 
                                className="category--input" 
                                name="pricing" 
                                type="radio" 
                                id = "under ₹ 100"
                                checked = {pricing === "under ₹ 100"}
                                onChange={()=>dispatch({type :"PRICING", payload : "under ₹ 100" })}
                            />
                                <label htmlFor = "under ₹ 100" >under ₹ 100</label>
                            </div>
                            <div>
                            <input 
                                className="category--input" 
                                name="pricing" 
                                type="radio" 
                                id = "₹ 100 - ₹ 500"
                                checked = {pricing === "₹ 100 - ₹ 500"}
                                onChange={()=>dispatch({type :"PRICING", payload : "₹ 100 - ₹ 500" })}
                            />
                                <label htmlFor = "₹ 100 - ₹ 500">₹ 100 - ₹ 500</label>
                                </div>
                            <div>
                            <input 
                                className="category--input" 
                                name="pricing" 
                                type="radio"
                                id = "₹ 500 - ₹ 1000"
                                checked = {pricing === "₹ 500 - ₹ 1000"}
                                onChange={()=>dispatch({type :"PRICING", payload : "₹ 500 - ₹ 1000" })}
                                 />
                                <label htmlFor = "₹ 500 - ₹ 1000">₹ 500 - ₹ 1000</label>
                            </div>
                            <div>
                            <input 
                                className="category--input" 
                                name="pricing" 
                                type="radio"
                                id = "₹ 1000 - ₹ 5000"
                                checked = {pricing === "₹ 1000 - ₹ 5000"}
                                onChange={()=>dispatch({type :"PRICING", payload :"₹ 1000 - ₹ 5000" })} 
                            />
                                <label htmlFor = "₹ 1000 - ₹ 5000">₹ 1000 - ₹ 5000</label>
                            </div>
                            <div>
                            <input 
                                className="category--input" 
                                name="pricing" 
                                type="radio"
                                id = "over ₹ 5000"
                                checked = {pricing === "over ₹ 5000"}
                                onChange={()=>dispatch({type :"PRICING", payload : "over ₹ 5000" })}
                             />
                                <label htmlFor = "over ₹ 5000" >over ₹ 5000</label>
                            </div>                      
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Filter;
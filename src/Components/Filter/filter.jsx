import React from 'react';
import './filter.css';

function Filter() {
    return (
        <div>
            <aside className="filter__section side-shadow">
                <div className="filter--box">
                    <div className="filter--header">
                        <h1>filter</h1>
                        <span className="filter--reset badge--text badge--red">reset</span>
                    </div>
                </div>
                <div className="filter--box">
                    <h1>Category</h1>
                    <htmlForm>
                        <div><input className="category--input" type="checkbox" id="Blu-ray"/><label className="category--label" htmlFor="Blu-ray">Blu-ray</label></div>
                        <div><input className="category--input" type="checkbox" id="DVD"/><label className="category--label" htmlFor="DVD">DVD</label></div>
                        <div><input className="category--input" type="checkbox" id="VCD"/><label className="category--label" htmlFor="VCD">VCD</label></div>
                    </htmlForm>
                </div>
                <div className="filter--box">
                    <htmlForm>
                        <div><input className="category--input" type="checkbox" id="Movies"/><label className="category--label" htmlFor="Movies">Movies</label></div>
                        <div><input className="category--input" type="checkbox" id="TV shows"/><label className="category--label" htmlFor="TV shows">TV shows</label></div>
                        <div><input className="category--input" type="checkbox" id="Collections"/><label className="category--label" htmlFor="Collections">Collections</label></div>
                    </htmlForm>
                </div>
                <div className="filter--box">
                    <div className="filter__container">
                        <span className="filter--title">Ratings</span>
                        <div className="slide__container">
                            <div className="slider__label--container">
                                <label htmlFor="slider--range ">1</label>
                                <label htmlFor="slider--range ">2</label>
                                <label htmlFor="slider--range ">3</label>
                                <label htmlFor="slider--range ">4</label>
                                <label htmlFor="slider--range ">5</label>
                            </div>
                            <input type="range" min="1" max="100" value="0" className="slider" id="slider--range"/>
                        </div>
                    </div>
                    <div className="filter__container">
                        <span className="filter--title">Pricing</span>
                        <htmlForm className="pricing--container">
                        <div><input className="category--input" name="group1" type="radio" id="under ₹ 100"/><label htmlFor="under ₹ 100">under ₹ 100</label></div>
                        <div><input className="category--input" name="group1" type="radio" id="₹ 100 - ₹ 500"/><label htmlFor="₹ 100 - ₹ 500">₹ 100 - ₹ 500</label></div>
                        <div><input className="category--input" name="group1" type="radio" id="₹ 500 - ₹ 1000"/><label htmlFor="₹ 500 - ₹ 1000">₹ 500 - ₹ 1000</label></div>
                        <div><input className="category--input" name="group1" type="radio" id="₹ 1000 - ₹ 5000"/><label htmlFor="₹ 1000 - ₹ 5000">₹ 1000 - ₹ 5000</label></div>
                        <div><input className="category--input" name="group1" type="radio" id="over ₹ 5000"/><label htmlFor="over ₹ 5000">over ₹ 5000</label></div>
                        </htmlForm>
                    </div>

                    <div className="filter__container">
                        <span className="filter--title">Discounts</span>
                        <htmlForm className="pricing--container">
                        <div><input  className="category--input" name="group2" type="radio" id="25% off or more"/><label htmlFor ="25% off or more">25% off or more</label></div>
                        <div><input  className="category--input" name="group2" type="radio" id="50% off or more"/><label htmlFor ="50% off or more">50% off or more</label></div>
                        <div><input className="category--input" name="group2" type="radio" id="75% off or more"/><label htmlFor ="75% off or more">75% off or more</label></div>
                        <div><input className="category--input" name="group2" type="radio" id="90% off or more"/><label htmlFor ="90% off or more">90% off or more</label></div>
                        </htmlForm>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Filter;
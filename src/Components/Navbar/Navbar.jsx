import React from 'react'
import { Link } from 'react-router-dom';
import "../Navbar/Navbar.css";

function Navbar() {
  return (
        <nav className="nav__container bottom-shadow">
            <div className=" logo ">
                <Link to="/home" className="anchor-style--none " href="/index.html ">
                    <span className="logo--title logo--title-black "><span className="dot ">mo</span>view
                    <img src="https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/logo--eye.png?raw=true" alt=" eye--logo" className="logo--img img-responsive"/>
                    </span>
                </Link>
            </div>

            <div className="searchbar__container">
                <input className="input__field searchbar__input--field" type="search" placeholder="Search" id="search--bar"/> <label htmlFor="search--bar"><i className="fas fa-search icon btn"></i></label>
            </div>
            <nav className="nav__container--nav-list">
                <ul className="list-bulletless social-links">
                    <li>
                        <Link to="/product-list" className="nav-list--item">
                            <div className="nav-list--item__icon--wrapper">
                                <i className="fas icon fa-store"></i>
                                <span className="icon--text">store</span>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/wish-list" className="nav-list--item">
                            <div className="nav-list--item__icon--wrapper">
                                <span>
                                        <i className="fas icon fa-heart">
                                            <span className="status-badge notification-badge">6</span>
                                </i>
                                </span>
                                <span className="icon--text">wishlist</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart-list" className="nav-list--item">
                            <div className="nav-list--item__icon--wrapper">
                                <span>
                                <i className="fas icon fa-shopping-cart">
                                    <span className="status-badge notification-badge">5</span>
                                </i>
                                </span>
                                <span className="icon--text">cart</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login-page" className="nav-list--item" href="/screens/signin-signup/signin.html">
                            <div className="nav-list--item__icon--wrapper">
                                <span  className="nav-items btn btn__primary btn__primary--animated">Sign In</span>
                            </div>
                        </Link>
                    </li>
                    <li><i className="fas fa-adjust" id="mode--btn"></i></li>
                </ul>
            </nav>
        </nav>
  )
}

export default Navbar
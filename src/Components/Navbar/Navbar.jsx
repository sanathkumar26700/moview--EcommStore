import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../Navbar/Navbar.css";
import {useDataContext} from '../../Context/dataContext'
import {useAuth} from '../../Context/authContext'
import { toast } from "react-toastify";
import {useUserData} from '../../Context/userDataContext'
import DarkModeButton from '../../Utilities/JS/darkMode'


function Navbar() {
    
    const navigate = useNavigate()
    const {auth:{isAuthorized}, setAuth} = useAuth()
    const {userData:{wishListData, cartListData}} = useUserData()


    const handleLogout = () =>{
        localStorage.removeItem('token')
        setAuth({
            token : '',
            isAuthenticated : false
        })
        toast.success('Logged out successfully !')
    }

    const {state:{searchFor}, dispatch} = useDataContext()
  return (
        <nav className="nav__container bottom-shadow">
            <div className=" logo ">
                <Link to="/home" className="anchor-style--none">
                    <span className="logo--title logo--title-black "><span className="dot ">mo</span>view
                    <img src="https://github.com/sanathkumar26700/moview__EcomStore--ui/blob/development/images/logo--eye.png?raw=true" alt=" eye--logo" className="logo--img img-responsive"/>
                    </span>
                </Link>
            </div>

            <div className="searchbar__container">
                <input 
                    className="input__field searchbar__input--field" 
                    type="search" 
                    placeholder="Search for a movie..." 
                    id="search--bar"
                    value = {searchFor}
                    onChange={(e) =>{
                        navigate("/product-list")
                        dispatch({type : "SEARCH", payload : e.target.value})}}
                    /> 
                    <label htmlFor="search--bar">
                        {searchFor === "" ? <i className="fas fa-search icon btn"></i> : null}
                    </label>
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
                                            {isAuthorized  && <span className="status-badge notification-badge">{wishListData.length}</span>}
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
                                    {isAuthorized  && <span className="status-badge notification-badge">{cartListData.length}</span>}
                                  </i>
                                </span>
                                <span className="icon--text">cart</span>
                            </div>
                        </Link>
                    </li>
                    {isAuthorized ? 
                    (<li>
                        <div onClick = {handleLogout} className="nav-list--item__icon--wrapper">
                            <span  className="nav-items btn btn__primary btn__primary--animated">Log Out</span>
                        </div>
                    </li>)
                    :
                    (<li>
                        <Link to="/login-page" className="nav-list--item">
                            <div className="nav-list--item__icon--wrapper">
                                <span  className="nav-items btn btn__primary btn__primary--animated">Login</span>
                            </div>
                        </Link>
                    </li>)}
                    <li>
                        <DarkModeButton/>
                    </li>
                </ul>
            </nav>
        </nav>
  )
}

export default Navbar
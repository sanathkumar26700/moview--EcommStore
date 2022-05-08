import {Routes, Route} from "react-router-dom"; 
import Home from "../Pages/Home/home";
import ProductList from "../Pages/Product list/product-list";
import CartList from "../Pages/Cart List/cart-list";
import WishList from "../Pages/Wish List/wish-list";
import Login from "../Pages/Authentication/login-page";
import SignUp from "../Pages/Authentication/sign-up";
import MockAPI from "../Components/Mockman/mock-man";
import AuthorizedRoutes from "../Routes/authorized-routes"

function NavBarRoutes() {
    return (
    <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/home" element={<Home/>}/>
        <Route path = "/product-list" element={<ProductList/>}/>
        <Route path = "/login-page" element={<Login/>}/>
        <Route path = "/signup-page" element={<SignUp/>}/>

        <Route element = {<AuthorizedRoutes/>}>
            <Route path = "/cart-list" element={<CartList/>}/>
            <Route path = "/wish-list" element={<WishList/>}/>
        </Route>

        <Route path = "/mockman-api" element={<MockAPI/>}/>
    </Routes>
    );
}

export default NavBarRoutes;
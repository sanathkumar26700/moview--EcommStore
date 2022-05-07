import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import NavBarRoutes from "./Routes/navbar-routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




function App() {
    return ( 
    <div className = "App" >
    <Navbar/>
    <NavBarRoutes/>
    <ToastContainer 
        className="toastify"
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
    );
}

export default App;
import "./styles.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";
import { Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container">
                <Link to='/'><img className="logo" src={logo} alt="logo" /></Link>
            <nav className="navbar">
                <Link to='/category/Jerseys'><button className="boton">Jerseys</button></Link>
                <Link to='/category/Shorts'><button className="boton">Shorts</button></Link>
                <Link to='/category/Hoodies'><button className="boton">Hoodies</button></Link>
            </nav>
                    <div className="cart">
                            <CartWidget/>
                    </div>
                
        </div>
);
};

export default Navbar;

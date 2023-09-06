import "./styles.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <div className="container">
                <a href="#"><img className="logo" src={logo} alt="logo" /></a>
            <nav className="navbar">
                <button className="boton">Jerseys</button>
                <button className="boton">Shorts</button>
                <button className="boton">Hoodies</button>
            </nav>
                <div className="cart">
                    <CartWidget />
                </div>
        </div>
);
};

export default Navbar;

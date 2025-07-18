import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-shop-concern">
                <NavLink>Shop</NavLink>

                <NavLink>Shop By Concern</NavLink>
            </div>
            <div className="nav-logo">
                <NavLink to="/">
                    <img
                        src="https://ik.imagekit.io/vinaykalirawna/Screenshot_2025-07-17_at_7.16.31_PM-removebg-preview.png?updatedAt=1752760027603"
                        alt="Hyphen Logo"
                    />
                </NavLink>
            </div>

            <div className="nav-login-cart">
                <NavLink>Login</NavLink>
                <NavLink>Cart</NavLink>
            </div>
        </div>
    );
};

export default Navbar;

import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-logo">
                <NavLink to="/">
                    <img
                        src="https://res.cloudinary.com/dphhbdytb/image/upload/v1752853728/Screenshot_2025-07-18_at_9.17.06_PM_j2vix7.png"
                        alt="Hyphen Logo"
                    />
                </NavLink>
            </div>
            <div className="nav-shop-concern">
                <NavLink>SHOP</NavLink>

                <NavLink>SHOP BY CONCERN</NavLink>
            </div>

            <div className="nav-login-cart">
                <div>
                    <NavLink>
                        <img
                            src="https://ik.imagekit.io/vinaykalirawna/next.png?updatedAt=1752857560443"
                            alt="login-btn"
                        />
                    </NavLink>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9ibDLvkZHWLp7wv-firAhNxDHwVavdNoG8X1Tb0fHdLkgtKO7okUJPblbnCj4DsMcT0&usqp=CAU"
                        alt="vertical-bar"
                    />
                    <NavLink>
                        <img
                            src="https://ik.imagekit.io/vinaykalirawna/add-button.png?updatedAt=1752857530618"
                            alt="cart-btn"
                        />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

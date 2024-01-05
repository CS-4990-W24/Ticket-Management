import { NavLink } from "react-router-dom";
import "@/styles/navbar.css";

function Navbar() {
    return (
        <nav>
            <NavLink to="/"> Home</NavLink>
            <br />
            <NavLink to="/upload"> Ticket Upload</NavLink>
            <br />
            <NavLink to="/admin"> Admin</NavLink>
            <br />
            <NavLink to="/checkout"> Checkout</NavLink>
        </nav>
    );
}

export default Navbar;

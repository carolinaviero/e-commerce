import React from "react"
import { Link } from "react-router-dom";

export const Navbar = ({ total }) => {
    return (
        <React.Fragment>
            <div className="routes">
                <Link to="/">
                    <h2>Home</h2>
                </Link>
                <Link to="/favorites">
                    <h2>Favorites</h2>
                </Link>
            </div>
            <div className="total">
                <Link to="/cart">
                    <h2>Cart: ${total}</h2>
                </Link>
            </div>
        </React.Fragment>
    )
}
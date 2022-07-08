import React, { useState } from "react";
import "./styles.css";
import CartWidget from "../CartWidget/index";
import logoDS from "../.././assets/logoDS.jpg"
import { Link } from 'react-router-dom';

const categories = [
    { id: 1, path: '/', name: 'Home',},
    { id: 2, path: '/category/sacos', name: 'Sacos',},
    { id: 3, path: '/category/polleras', name: 'Polleras',},
    { id: 4, path: '/category/camisas', name: 'Camisas',},
    { id: 5, path: '/category/pantalones', name: 'Pantalones',},
    { id: 6, path: '/category/chalecos', name: 'Chalecos',},
    { id: 7, path: '/category/camperas', name: 'Camperas',},
    { id: 8, path: '/category/corbatas', name: 'Corbatas',},
];

const NavBar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="nav">
            <img className="nav-logo" src={logoDS} alt="logoDS" />
            <div className={`nav-items ${isOpen ? "open" : ""}`.trim()}>
               {categories.map((category) => (
                    <Link to={category.path} key={category.id} className="nav-item">{category.name}</Link>
                ))}
            </div>
            <div className="cart">
                <Link to="cart">
                    <CartWidget />
                </Link>
            </div>
            <div className="nav-mobile">
                <div className="cart-mobile">
                    <CartWidget />
                </div>
                <div className={`nav-toggle ${isOpen ? "open" : ""}`.trim()} onClick={() => setIsOpen((isOpen) => !isOpen)}>
                <div className="bar"></div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
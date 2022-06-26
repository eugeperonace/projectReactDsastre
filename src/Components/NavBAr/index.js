import React, { useState } from "react";
import "./styles.css";
import CartWidget from "../CartWidget/index";
import logoDS from "../.././assets/logoDS.jpg"

const menuItems = [
    {
        id: 1,
        label: "SACOS",
    },
    {
        id: 2,
        label: "CAMISAS",
    },
    {
        id: 3,
        label: "PANTALONES",
    },
    {   
        id: 4,
        label: "POLLERAS",
    },
    {
        id: 5,
        label: "CHALECOS",
    },
    {
        id: 6,
        label: "CAMPERAS",
    },
    {
        id: 7,
        label: "CORBATAS",
    },
];

const NavBar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="nav">
            <img className="nav-logo" src={logoDS} alt="logoDS" />
            <div className={`nav-items ${isOpen ? "open" : ""}`.trim()}>
               {menuItems.map((item) => (
                    <a href="/" className="nav-item" key={item.id}>
                        {item.label}
                    </a>
                ))}
            </div>
            <div className="cart">
                <CartWidget />
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
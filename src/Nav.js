import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faShoppingBasket, faUtensils } from '@fortawesome/free-solid-svg-icons'
import {Link } from "react-router-dom";


const Nav = ({countNextToShoppingBasket}) => {

    return (
        <div>
                        
            <h1 style={{position: "absolute", color: "orange", fontFamily:"monospace", fontSize: "40px", left:"40%"}}>donout shop</h1>
            
            <nav>
            <Link to="/" style={{position: "absolute", color: "#F6C7FC", left: "14%", top:"15%", fontSize:"24px", textDecoration:"none", fontWeight: "bold"}}> <FontAwesomeIcon icon={faUsers} style={{color: "grey"}} /> About Us </Link>
            <Link to="/shop" style={{position: "absolute", color: "#F6C7FC", left: "46%", top:"15%", fontSize:"24px", textDecoration:"none", fontWeight: "bold"}}><FontAwesomeIcon icon={faUtensils} style={{color: "grey"}} /> Menu </Link>
            <Link to="/checkout" style={{position: "absolute", color: "#F6C7FC", left: "70%", top:"15%", fontSize:"24px", textDecoration:"none", fontWeight: "bold"}}><FontAwesomeIcon icon={faShoppingBasket} style={{color: "grey"}} /> Shopping Basket {countNextToShoppingBasket}</Link>
            </nav>
        </div>
    )

}

export default Nav;
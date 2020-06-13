import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
import { useAuth } from '../useAuth';
import { Link } from 'react-router-dom';


const Header = () => {
   const auth = useAuth();
 
   
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/manage">Manage Inventory</a>
                {
                    auth.user && <span style={{color:'yellow'}}>{auth.user.name}</span>
                }
                {
                    auth.user ? <a href="/login">Sign out</a>
                    : <a href="/login">Sign in</a>
                }
            </nav>
        </div>
    );
};

export default Header;
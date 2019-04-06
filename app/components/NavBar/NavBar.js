import React from 'react';
import './NavBar.scss';
import Logo from '../../images/logo.png';

function NavBar() {
    return (
        <div className="nav--bar">
            <div className="nav--bar__logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="nav--bar__menu">
                <div className="nav--bar__menu__item">
                    <a className="nav--bar__menu__item__purchase" href="/">Purchase</a>
                </div>
                <div className="nav--bar__menu__item">
                    <a className="nav--bar__menu__item__my--orders" href="/">My Orders</a>
                </div>
                <div className="nav--bar__menu__item">
                    <a className="nav--bar__menu__item__sell" href="/">Sell</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;

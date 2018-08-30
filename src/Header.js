import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <header>
                <nav className="nav-container">
                    <div className="dropdown-menu">
                        <button className="dropbtn"><i className="fa fa-bars"></i></button>
                        <ul className="nav-list">
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/Types">beer</Link></li>
                            <li><Link to="/PartnersList">partners</Link></li>
                            <li><Link to="/Contact">contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;

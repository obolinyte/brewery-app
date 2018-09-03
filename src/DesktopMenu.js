import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class DesktopMenu extends Component {
    render() {
        return (
                <nav className="nav-container">
                    <div className="dropdown-menu">
                        <ul className="nav-list">
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/Types">beer</Link></li>
                            <li><Link to="/PartnersList">partners</Link></li>
                            <li><Link to="/Contact">contact</Link></li>
                        </ul>
                    </div>
                </nav>
        );
    }
}

export default DesktopMenu;
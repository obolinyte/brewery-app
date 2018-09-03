import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class DesktopMenu extends Component {
    render() {
        let activeHomeClass=this.props.activePage ==="/" ? "active" : "";
        let activeTypesClass=this.props.activePage ==="/Types" ? "active" : "";
        let activePartnersClass=this.props.activePage==="/PartnersList" ? "active" : "";
        return (
                <nav className="nav-container">
                    <div className="dropdown-menu">
                        <ul className="nav-list">
                            <li><Link to="/" className={activeHomeClass}>home</Link></li>
                            <li><Link to="/Types" className={activeTypesClass}>beer</Link></li>
                            <li><Link to="/PartnersList" className={activePartnersClass}>partners</Link></li>
                            <li><Link to="/Contact">contact</Link></li>
                        </ul>
                    </div>
                </nav>
        );
    }
}

export default DesktopMenu;
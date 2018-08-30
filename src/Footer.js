import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-nav">
                <nav className="nav-container">
                <span className="footer-company-title">SHO SHO</span>
                        <ul className="nav-list">
                            <li><Link to="#">Facebook</Link></li>
                            <li><Link to="#">Instagram</Link></li>
                            <li><Link to="#">Pinterest</Link></li>
                            <li><Link to="#">Twitter</Link></li>
                        </ul>
                    </nav>
                    <nav className="nav-container">
                        <span>Beer</span>
                        <ul className="nav-list">
                            <li><Link to="/Types">Whippet Stout</Link></li>
                            <li><Link to="/Types">Cavalier King Charles Lager</Link></li>
                            <li><Link to="/Types">Italian Greyhound Pilsner</Link></li>
                        </ul>
                    </nav>
                    <nav className="nav-container">
                        <span>Company</span>
                        <ul className="nav-list">
                            <li><Link to="#">About us</Link></li>
                            <li><Link to="#">Career</Link></li>
                            <li><Link to="#">Partnership</Link></li>
                            <li><Link to="#">Terms & Conditions</Link></li>
                        </ul>
                    </nav>
                </div>
                <p className="copyright">© 2018 <span className="footer-company-title">SHO SHO</span>. Powered by good mood.</p>
            </footer>
        );
    }
}

export default Footer;

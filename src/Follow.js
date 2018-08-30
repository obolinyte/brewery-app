import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class Follow extends Component {
    render() {
        return (
            <div className="follow-container">
                <p>
                    Follow <span>SHO SHO:</span>
                </p>
                <div className="socials-container">
                    <Link to="#"><i className="fa fa-facebook-square"></i></Link>
                    <Link to="#"><i className="fa fa-instagram"></i></Link>
                    <Link to="#"><i className="fa fa-pinterest-square"></i></Link>
                    <Link to="#"><i className="fa fa-twitter-square"></i></Link>
                </div>

            </div>
        );
    }
}

export default Follow;
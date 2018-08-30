import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class Partner extends Component {
    render() {
        return (
            <div className="partner-container">
                <div className="partner-logo"><img src={this.props.logoSrc}></img></div>
                <div className="partner-description">
                  <h2>{this.props.title}</h2>  
                  <p><span>Address: </span>{this.props.address}</p>
                  <div>
                  <Link to={this.props.link}>{this.props.linkTitle} <i className="fa fa-angle-right"></i></Link>
                  </div>
                </div>
            </div>
        );
    }
}

export default Partner;
import React, { Component } from 'react';
import './App.css';




class SectionContainer extends Component {
  render() {
    return (
        <div className="section-container">
        {this.props.children}
        </div>
    );
  }
}

export default SectionContainer;

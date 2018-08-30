import React, { Component } from 'react';
import './App.css';



class ImageSection extends Component {
  render() {
    return (
        <section className="img-based-section">
            <div className="img-wrapper">
                <img src={this.props.src}></img>
            </div>
        </section>
    );
  }
}

export default ImageSection;

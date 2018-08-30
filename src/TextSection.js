import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';



class TextSection extends Component {
  render() {
      var title = null;
      if (this.props.title) {
          title = <h1>{this.props.title}</h1>
      }
    return (
        <section className="txt-based-section">
        {title}
        <p>{this.props.description}</p>
        <p>{this.props.details}</p>
        <div>
        <Link to="/PartnersList">Taste our beer <i className="fa fa-angle-right"></i></Link>
        </div>
        </section>
    );
  }
}

export default TextSection;

import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Partner from './Partner.js';
import Footer from './Footer.js';



class PartnersList extends Component {
    render() {
        return (
            <div className="wrapper">
                < Header activePage={this.props.location.pathname}/>
               
                <main>
                <hr />
                    <Partner 
                    logoSrc="./cat-cafe.svg"
                    title="Cat Cafe"
                    address="J. Jasinskonio st. 100, Vilnius 01111"
                    link="#"
                    linkTitle="Visit our partner"
                    />
                    <Partner 
                    logoSrc="./burger.svg"
                    title="Burger Lovers"
                    address="Kazimier Vazimier st. 2, Vilnius 010202"
                    link="#"
                    linkTitle="Visit our partner"
                    />
                    <Partner 
                    logoSrc="./noodles.svg"
                    title="Noodles everythere"
                    address="Debesu st. 100, Vilnius 01111"
                    link="#"
                    linkTitle="Visit our partner"
                    />
                </main>
                <Footer />
            </div>
        );
    }
}

export default PartnersList;

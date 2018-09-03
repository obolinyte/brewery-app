import React, { Component } from 'react';
import './App.css';
import DesktopMenu from './DesktopMenu.js';
import MobileMenu from './MobileMenu.js';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isDesktop: false
        };
    
        this.updatePredicate = this.updatePredicate.bind(this);
      }
      componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
      }
    
      updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 650 });
      }
    render() {
        const isDesktop = this.state.isDesktop;
        return (
            <header>
                {isDesktop ? (
          <DesktopMenu />
        ) : (
          <MobileMenu />
        )}
            </header>
        );
    }
}

export default Header;

import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import SectionContainer from './SectionContainer.js';
import TextSection from './TextSection.js';
import ImageSection from './ImageSection.js';
import Follow from './Follow.js';
import Footer from './Footer.js';


class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                < Header activePage={this.props.location.pathname} />
                <main>
                    <SectionContainer>
                        <TextSection title="SHO SHO brewery" description="'You can't buy happiness but you can buy beer and that's kind of the same thing!'" />
                        <ImageSection src="./cheers.svg" />
                    </SectionContainer>
                    <Follow />
                </main>
                <Footer />
            </div>
        );
    }
}

export default Home;

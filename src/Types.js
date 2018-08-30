import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import SectionContainer from './SectionContainer.js';
import TextSection from './TextSection.js';
import ImageSection from './ImageSection.js';
import Footer from './Footer.js';

class Types extends Component {
    render() {
        return (
            <div className="wrapper">
                < Header />
                <main>
                    <div className="beer-types-container">
                    <hr />
                    <h2>Whippet Stout</h2>
                    <SectionContainer>
                        <TextSection 
                        description="Very dark beers characterized by dark chocolate malt flavours/scents and rather aggressive hop bitterness."
                        details="Alcohol: 7%"/>
                        <ImageSection src="./whippet.svg" />
                    </SectionContainer>
                    <h2>Cavalier King Charles Lager</h2>
                    <SectionContainer>
                        <TextSection 
                        description="In this beer you can feel gentle combination of malt and hops, it is lightly carbonized. Excellent harmony of malt aroma and mild hop bitterness. Colour – clear amber." 
                        details="Alcohol: 4%" />
                        <ImageSection src="./charles.svg" />
                    </SectionContainer>
                    <h2>Italian Greyhound Pilsner</h2>
                    <SectionContainer>
                        <TextSection 
                        description="Strong advertising hop aroma and bitterness are mandatory for this type. Strong malt flavour is notable in the aroma and taste, and the taste is characterized by richness." 
                        details="Alcohol: 5%" />
                        <ImageSection src="./italian.svg" />
                    </SectionContainer>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Types;

import React from "react";
import Header from '../../Components/Header';
import Section from '../../Components/Section';
import Main from '../../Components/Main';
import Footer from '../../Components/Footer';

export default function Home() {
    document.title = 'Home';

    return (
        <React.Fragment>
            <Header text='Minha primeira página com React' />
            <Section />
            <Main />
            <Footer title="Contato" />
        </React.Fragment>
    )
}
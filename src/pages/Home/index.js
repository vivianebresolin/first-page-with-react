import React from "react";
import Header from '../../Components/Header';
import Section from '../../Components/Section';

export default function Home() {
    document.title = 'Home';

    return (
        <React.Fragment>
            <Header />
            <Section />
        </React.Fragment>
    )
}
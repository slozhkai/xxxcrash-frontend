import React, { useState } from "react";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Bit from "./components/Main/Bit/Bit.jsx";
import './font.css';
import Kf from "./components/Main/Kf/Kf.jsx";

function App() {

    return (
        <div className={'container'}>
            <Header/>
            <main>
                <div className={'main__top'}>
                    <Bit/>
                    <Kf/>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
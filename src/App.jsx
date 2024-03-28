import React, { useState } from "react";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Bit from "./components/Main/Bit/Bit.jsx";
import './font.css'
import Deposit from "./components/Main/Deposit/Deposit.jsx";
import Kf from "./components/Main/Kf/Kf.jsx";
import GameHistory from "./components/Main/GameHistory/GameHistory.jsx";
import {TrueAuthModal} from "./components/TrueModal/TrueAuthModal/TrueAuthModal.jsx";

import './App.css'

function App() {
    const [balance, setBalance] = useState(500);
    const [betAmount, setBetAmount] = useState(0);
    const [coefficient, setCoefficient] = useState(1);

    const updateBalance = (amount) => {
        setBalance(prevBalance => prevBalance + amount);
    }

    return (
        <div className={'container'}>
            <Header/>
            <main className={'main'}>
                <div className={'main__left'}>
                    <Bit balance={balance} setBetAmount={setBetAmount} coefficient={coefficient} />
                    <Deposit updateBalance={updateBalance}/>
                </div>
                <div className={'main__right'}>
                    <Kf betAmount={betAmount} setCoefficient={setCoefficient}/>
                    <GameHistory/>
                </div>

                <TrueAuthModal/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
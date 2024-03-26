import React, { useState } from "react";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Bit from "./components/Main/Bit/Bit.jsx";
import './font.css'
import Deposit from "./components/Main/Deposit/Deposit.jsx";
import Kf from "./components/Main/Kf/Kf.jsx";

import './App.css'

function App() {
    const [balance, setBalance] = useState(500);
    const [betAmount, setBetAmount] = useState(0);
    const [coefficient, setCoefficient] = useState(1); // Добавляем состояние для коэффициента

    const updateBalance = (amount) => {
        setBalance(prevBalance => prevBalance + amount);
    }

    return (
        <div className={'container'}>
            <Header/>
            <main className={'main'}>
                <div className={'main__left'}>
                    <Bit balance={balance} setBetAmount={setBetAmount} coefficient={coefficient} /> {/* Передаем коэффициент */}
                    <Deposit updateBalance={updateBalance}/>
                </div>
                <div className={'main__right'}>
                    <Kf betAmount={betAmount} setCoefficient={setCoefficient}/> {/* Передаем функцию установки коэффициента */}
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
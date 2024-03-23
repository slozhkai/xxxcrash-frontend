import React, { useState } from "react";
import './Bit.css';
import C4 from '../../../img/bit/c4.png';
import Balance from '../../../img/bit/wallet.png';
import Gamepad from '../../../img/bit/gamepad.png';
import Anonymus from '../../../img/bit/mask.png';

function Bit({ balance, setBetAmount }) {
    const [activeButton, setActiveButton] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const changeButtonStyle = (index) => {
        setActiveButton(index === activeButton ? null : index);
    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (!isNaN(value)) {
            setInputValue(value);
        }
    }

    const handleBet = () => {
        if (!isNaN(inputValue)) {
            setBetAmount(parseFloat(inputValue));
            // Другие действия, если нужно
        }
    }

    // Определяем класс для кнопки bit__gamepad
    const gamepadClassName = inputValue > balance ? 'bit__gamepad_another' : 'bit__gamepad';

    return (
        <div className={'bit__content'}>
            <div className={'bit_cash'}>
                <img src={C4} alt={'C4'} className={'bit__image'} />
                <a>Crash</a>
            </div>
            <div className={'bit__balance'}>
                <img src={Balance} />
                <a>$ {balance.toFixed(2)}</a>
            </div>
            <div className={'bit__auto'}>
                <a>Автовывод</a>
                <div className={'bit__kf'}>
                    <div>
                        {['1.1', '1.5', '2.0', '5.0'].map((multiplier, index) => (
                            <button
                                key={multiplier}
                                className={index === activeButton ? 'kf__button_another' : 'kf__button'}
                                onClick={() => changeButtonStyle(index)}
                            >
                                x{multiplier}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className={'bit__input'}>
                <div className="bit__dollar-sign">$</div>
                <input
                    className={'bit__input_real'}
                    placeholder={'0'}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
            <div className={'bit_buttons'}  onClick={handleBet}>
                <div className={gamepadClassName}>
                    <div className={'kaka'}>
                        <img src={Gamepad} alt={'Gamepad'} />
                        <a className={'bit__button_text'}>СДЕЛАТЬ СТАВКУ</a>
                    </div>
                    <a className={'bit__button_text'}>{inputValue ? inputValue + '$' : '0.00$'}</a>
                </div>
                {activeButton !== null && (
                    <div className={'bit__anon'}>
                        <img src={Anonymus} alt={'Anonymus'} />
                        <a className={'bit__button_text'}>АВТОВЫВОД</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Bit;

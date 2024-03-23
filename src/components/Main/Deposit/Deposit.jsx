import React, { useState } from "react";
import './Deposit.css';
import Deposite from '../../../img/deposite.png';

function Deposit({ updateBalance }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (!isNaN(value)) {
            setInputValue(value);
        }
    }

    const handleDeposit = () => {
        const amount = parseFloat(inputValue);
        if (!isNaN(amount)) {
            updateBalance(amount); // вызываем функцию для обновления баланса
            setInputValue(''); // очищаем значение ввода
        }
    }

    return (
        <div className={'deposit__content'}>
            <div className={'deposit__title'}>
                <img src={Deposite} alt={'deposit_image'} className={'deposit__img'} />
                <a className={'deposit__title'}>Пополнение</a>
            </div>
            <div className={'deposit__place'}>
                <a className={'deposit__text'}>Введите сумму</a>
                <div className={'bit__input'}>
                    <div className="bit__dollar-sign">$</div>
                    <input
                        className={'bit__input_real'}
                        placeholder={'0'}
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <button className={'deposit__button'} onClick={handleDeposit}>Взять в долг</button> {/* обработчик события нажатия на кнопку */}
        </div>
    )
}

export default Deposit;

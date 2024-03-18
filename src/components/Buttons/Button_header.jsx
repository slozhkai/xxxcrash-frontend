import React from "react";
import Lock from "../../img/lock.png";
import './Button_header.css'

function Button_header ({onClick}) {
    const handleButtonClick = () => {
        onClick(); // Вызов функции обратного вызова, если необходимо
    };

    return (
        <div>
            <div className={'button_reg'} onClick={handleButtonClick}>
                <a className={'text'}>АВТОРИЗАЦИЯ</a>
                <img src={Lock} alt={'lock'} className={'header__lock'} />
            </div>
        </div>
    );
}

export default Button_header;
import Lock from "../../img/lock.png";
import React from "react";

function Button_header () {
        return(
            <div className={'button_reg'}>
                <a>АВТОРИЗАЦИЯ</a>
                <img src={Lock} alt={'lock'} className={'header__lock'} />
            </div>
        )
}

export default Button_header;

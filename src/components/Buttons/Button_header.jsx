import Lock from "../../img/lock.png";
import React from "react";
import './Button_header.css'

function Button_header ({onClick}) {
    const handleButtonClick = () => {
      console.log('Button pressed')
    }

    return(
        <div className={'button_reg'} onClick={onClick}>
            <a className={'text'}>АВТОРИЗАЦИЯ</a>
            <img src={Lock} alt={'lock'} className={'header__lock'} />
        </div>
    )
}

export default Button_header;

import React, { useState } from "react";
import Lock from "../../img/lock.png";
import './Button_header.css'

// function Button_header ({onClick}) {
//     const [modalOpen, setModalOpen] = useState(false);
//
//     const handleButtonClick = () => {
//         setModalOpen(true);
//         onClick(); // Вызов функции обратного вызова, если необходимо
//     };
//
//     const closeModal = () => {
//         setModalOpen(false);
//     };
//
//     return (
//         <div>
//             <div className={'button_reg'} onClick={handleButtonClick}>
//                 <a className={'text'}>АВТОРИЗАЦИЯ</a>
//                 <img src={Lock} alt={'lock'} className={'header__lock'} />
//             </div>
//             {modalOpen && (
//                 <div className="modal">
//                     <p>Модальное окно</p>
//                     <button onClick={closeModal}>Закрыть</button>
//                 </div>
//             )}
//         </div>
//     );
// }
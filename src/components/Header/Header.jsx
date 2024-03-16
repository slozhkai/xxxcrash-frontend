import './Header.css';
import React, { useState, useEffect } from 'react';

import Logo from '../../img/logo.png';
import Volume_on from '../../img/volume/volume_on.png';
import Volume_off from '../../img/volume/volume_off.png';
import Lock from '../../img/lock.png';

function Header() {
    const [isVolumeOn, setIsVolumeOn] = useState(true);
    // const [audio] = useState(new Audio('../audio/sound.mp3'));
    //
    // useEffect(() => {
    //     const loadedDataHandler = () => {
    //         console.log('Аудио загружено');
    //     };
    //
    //     const errorHandler = () => {
    //         console.error('Ошибка загрузки аудио');
    //     };
    //
    //     audio.addEventListener('loadeddata', loadedDataHandler);
    //     audio.addEventListener('error', errorHandler);
    //
    //     return () => {
    //         audio.removeEventListener('loadeddata', loadedDataHandler);
    //         audio.removeEventListener('error', errorHandler);
    //     };
    // }, [audio]);

    const toggleVolume = () => {
        // if (isVolumeOn) {
        //     audio.pause();
        // } else {
        //     audio.play();
        // }
        setIsVolumeOn(!isVolumeOn);
    };

    return (
        <div className={'header'}>
            <img src={Logo} alt={'logo'} className={'logo'} />
            <div className={'header__buttons'}>
                <img className={'volume'}
                     src={isVolumeOn ? Volume_on : Volume_off}
                     alt={isVolumeOn ? 'volume on' : 'volume off'}
                     onClick={toggleVolume}
                />
                <div className={'button_reg'}>
                    <a>АВТОРИЗАЦИЯ</a>
                    <img src={Lock} alt={'lock'} className={'header__lock'} />
                </div>
            </div>
        </div>
    );
}

export default Header;

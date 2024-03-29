import React, { useState, useEffect } from 'react';
import AuthModal from '../Modal/AuthModal/AuthModal.jsx'; // Импорт компонента AuthModal

import Logo from '../../img/logo.png';
import Volume_on from '../../img/volume/volume_on.png';
import Volume_off from '../../img/volume/volume_off.png';
import soundFile from '../../audio/sound.mp3';
import '../Header/Header.css'

function Header() {

    const [isVolumeOn, setIsVolumeOn] = useState(true);
    const [audio] = useState(new Audio(soundFile));

    const toggleVolume = () => {
        if (isVolumeOn) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsVolumeOn(!isVolumeOn);
    };

    return (
        <div className={'header'}>
            <img src={Logo} alt={'logo'} className={'logo'} />
            <div className={'header__buttons'}>
                <img
                    className={'volume'}
                    src={isVolumeOn ? Volume_on : Volume_off}
                    alt={isVolumeOn ? 'volume on' : 'volume off'}
                    onClick={toggleVolume}
                />
            </div>
        </div>
    );
}

export default Header;
import React, { useState, useEffect } from 'react';
import AuthModal from '../Modal/AuthModal/AuthModal.jsx'; // Импорт компонента AuthModal
import Button_header from "../Buttons/Button_header.jsx";

import Logo from '../../img/logo.png';
import Volume_on from '../../img/volume/volume_on.png';
import Volume_off from '../../img/volume/volume_off.png';
import soundFile from '../../audio/sound.mp3';
import '../Header/Header.css'
import {TrueAuthModal} from "../TrueModal/TrueAuthModal/TrueAuthModal.jsx";

function Header() {

    const [modalInfoIsOpen, setModalInfo] = useState(false);

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
                <Button_header onClick={() => setModalInfo(true)}/>

                <TrueAuthModal
                isOpen={modalInfoIsOpen}
                onClose={() => setModalInfo(false)}
                />
            </div>
        </div>
    );
}

export default Header;
// Header.jsx
import React, { useState } from 'react';
import Button_header from '../Buttons/Button_header.jsx';
import { TrueAuthModal } from '../TrueModal/TrueAuthModal/TrueAuthModal.jsx';

import Logo from '../../img/logo.png';
import Volume_on from '../../img/volume/volume_on.png';
import Volume_off from '../../img/volume/volume_off.png';
import soundFile from '../../audio/sound.mp3';
import '../Header/Header.css'

function Header() {
    const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false); // Создаем состояние для отслеживания видимости модального окна

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

    const openModal = () => {
        setModalInfoIsOpen(true); // Устанавливаем состояние, чтобы открыть модальное окно
    };

    const closeModal = () => {
        setModalInfoIsOpen(false); // Устанавливаем состояние, чтобы закрыть модальное окно
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
                <Button_header onClick={openModal} />
                {modalInfoIsOpen && <TrueAuthModal onClose={closeModal} />}
            </div>
        </div>
    );
}

export default Header;

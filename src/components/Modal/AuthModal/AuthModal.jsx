import React, { Component } from 'react';
import './AuthModal.css'; // Импортируем CSS стили
import Button_header from '../../Buttons/Button_header.jsx';
import AuthButton from "../../Buttons/AuthButton/AuthButton.jsx";
import RegModal from '../RegModal/RegModal.jsx'; // Импортируем компонент RegModal

class AuthModal extends Component {
    state = {
        modalOpen: false,
        regModalOpen: false // Добавляем состояние для модального окна регистрации
    }

    handleOpen = () => {
        this.setState({ modalOpen: true });
        document.body.classList.add('modal-open'); // Добавляем класс для запрета прокрутки страницы
    }

    handleClose = () => {
        this.setState({ modalOpen: false });
        document.body.classList.remove('modal-open'); // Удаляем класс для разрешения прокрутки страницы
    }

    handleRegModalOpen = () => {
        this.setState({ regModalOpen: true }); // Открываем модальное окно регистрации
    }

    handleModalClick = (e) => {
        e.stopPropagation();
    }

    render() {
        return (
            <div>
                {this.state.modalOpen && <div className="modal-overlay" onClick={this.handleClose}></div>} {/* Затемнение всего экрана */}
                <Button_header onClick={this.handleOpen} /> {/* Кнопка открывает модальное окно */}
                {this.state.modalOpen && (
                    <div className="modal" onClick={this.handleModalClick}>
                        <div className={'content'}>
                            <p>Вход</p>
                            <div input__content>
                                <div className={'email'}>
                                    <p className={'input__text'}>Email</p>
                                    <input type={"email"} placeholder='Введите ваш Email...' />
                                </div>
                                <div className={'password'}>
                                    <p className={'input__text'}>Пароль</p>
                                    <input type={"password"} placeholder='Введите ваш Пароль...' />
                                </div>
                                <a className={'idk'} onClick={this.handleRegModalOpen}>У меня нет аккаунта</a> {/* Добавляем обработчик для открытия модального окна регистрации */}
                            </div>
                            <AuthButton/>
                        </div>
                    </div>
                )}
                {this.state.regModalOpen && <RegModal onClose={() => this.setState({ regModalOpen: false })} />} {/* Отображаем модальное окно регистрации */}
            </div>
        );
    }
}

export default AuthModal;
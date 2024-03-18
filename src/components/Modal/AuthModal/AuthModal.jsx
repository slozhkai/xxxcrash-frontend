import React, { Component } from 'react';
import './AuthModal.css'; // Импортируем CSS стили
import Button_header from '../../Buttons/Button_header.jsx';
import AuthButton from "../../Buttons/AuthButton/AuthButton.jsx";// Импортируем компонент RegModal

class AuthModal extends Component {
    state = {
        modalOpen: false // Добавляем состояние для модального окна регистрации
    }

    handleOpen = () => {
        this.setState({ modalOpen: true });
        document.body.classList.add('modal-open'); // Добавляем класс для запрета прокрутки страницы
    }

    handleClose = () => {
        this.setState({ modalOpen: false });
        document.body.classList.remove('modal-open'); // Удаляем класс для разрешения прокрутки страницы
    }

    handleModalClick = (e) => {
        e.stopPropagation();
    }

    render() {
        return (
            <>
                {this.state.modalOpen && <div className="modal-overlay" onClick={this.handleClose}></div>}
                <Button_header onClick={this.handleOpen} />
                {this.state.modalOpen && (
                    <div className="modal" onClick={this.handleModalClick}>
                        <div className={'content'}>
                            <p>Вход</p>
                            <div className="input__content">
                                <div className="email">
                                    <p className="input__text">Email</p>
                                    <input type="email" placeholder='Введите ваш Email...' />
                                </div>
                                <div className="password">
                                    <p className="input__text">Пароль</p>
                                    <input type="password" placeholder='Введите ваш Пароль...' className={'input'}/>
                                </div>
                                <a className="idk">У меня нет аккаунта</a>
                            </div>
                            <AuthButton />
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default AuthModal;
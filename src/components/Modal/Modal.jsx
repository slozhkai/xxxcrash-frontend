import React, { Component } from 'react';
import './Modal.css'; // Импортируем CSS стили
import Button_header from '../Buttons/Button_header.jsx';

class Modal extends Component {
    state = { modalOpen: false }

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
            <div>
                {this.state.modalOpen && <div className="modal-overlay" onClick={this.handleClose}></div>} {/* Затемнение всего экрана */}
                <Button_header onClick={this.handleOpen} /> {/* Кнопка открывает модальное окно */}
                {this.state.modalOpen && (
                    <div className="modal" onClick={this.handleModalClick}>
                        <div className={'content'}>
                            <p>Вход</p>
                            <div input__content>
                                <div className={'email'}>
                                    <p></p>
                                    <input></input>
                                </div>
                                <div className={'password'}>
                                    <p></p>
                                    <input></input>
                                </div>
                                <a>У меня нет аккаунта</a>
                            </div>
                            <button></button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Modal;
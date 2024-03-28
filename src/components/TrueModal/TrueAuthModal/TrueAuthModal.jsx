import './TrueAuthModal.css'

export const TrueAuthModal = ()  => {
    return (
        <>[
        <div className={'auth__modal_content'}>
            <div className={'auth__modal_wrapper'}>
                <div className={'auth__modal__content'}>
                    <a className={'auth__modal_maintext'}>Вход</a>
                    <div className={'auth__input_block'}>
                        <a className={'auth__input_modal_text'}>Email</a>
                        <input className={'auth__input_modal'} type="email" placeholder={'Введите Ваш Email...'}/>
                    </div>
                    <div className={'auth__input_block'}>
                        <a className={'auth__input_modal_text'}>Пароль</a>
                        <input className={'auth__input_modal'} type="password" placeholder={'Введите Ваш пароль...'}/>
                        <a className={'auth__trans_reg'}>У меня нет аккаунта</a>
                    </div>
                    <button className={'auth__modal__button'}>Войти</button>
                </div>
            </div>
        </div>]
        </>
    )
}
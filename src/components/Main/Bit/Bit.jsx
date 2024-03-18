import './Bit.css'
import C4 from '../../../img/bit/c4.png'
import Balance from '../../../img/bit/wallet.png'
import Gamepad from '../../../img/bit/gamepad.png'
import Anonymus from '../../../img/bit/mask.png'

function Bit() {

    return(
        <div className={'bit__content'}>
            <div className={'bit_cash'}>
                <img src={C4} alt={'C4'} className={'bit__image'} />
                <a>Crash</a>
            </div>
            <div className={'bit__balance'}>
                <img src={Balance}/>
                <a>$ 0.00</a>
            </div>
            <div className={'bit__auto'}>
                <a>Автовывод</a>
                <div className={'bit__kf'}>
                    <div>
                        <button className={'kf__button'}>x1.1</button>
                        <button className={'kf__button'}>x1.2</button>
                        <button className={'kf__button'}>x1.5</button>
                        <button className={'kf__button'}>x2.0</button>
                        <button className={'kf__button'}>x5.0</button>
                    </div>
                </div>
            </div>
            <div className={'bit__input'}>
                <input className={'bit__input_real'} placeholder={'$ 0'}/>
            </div>
            <div className={'bit_buttons'}>
                <div className={'bit__gamepad'}>
                    <div className={'kaka'}>
                        <img src={Gamepad} alt={'Gamepad'}/>
                        <a className={'bit__button_text'}>СДЕЛАТЬ СТАВКУ</a>
                    </div>
                    <a className={'bit__button_text'}>0.00$</a>
                </div>
                <div className={'bit__anon'}>
                    <img src={Anonymus} alt={'Anonymus'}/>
                    <a className={'bit__button_text'}>АВТОВЫВОД</a>
                </div>
            </div>
        </div>
    )
}

export default Bit;
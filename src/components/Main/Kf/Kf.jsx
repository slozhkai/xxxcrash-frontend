// Kf.jsx
import './Kf.css'

import begun from '../../../img/gif/begun.gif'
import perdun from '../../../img/gif/perdun.gif'

function Kf({ betAmount }) {
    return(
        <div className={'kf__content'}>
            <div className={'kf__about'}>
                <div className={'kf__about_block'}>
                    <a className={'kf__about__text'}>Банк</a>
                    <a className={'bank__count'}>{betAmount.toFixed(2)} $</a>
                </div>
                <div className={'kf__about_block'}>
                    <a className={'kf__about__text'}>Раунд</a>
                    <a className={'round__count'}>1</a>
                </div>
            </div>

            <div className={'kf__count'}>00.00 X</div>

            <img src={begun} alt={'Runner'} className={'kf__runner'}/>
        </div>
    )
}

export default Kf;

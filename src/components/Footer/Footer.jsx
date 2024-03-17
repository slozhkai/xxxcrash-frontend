import './Footer.css'
import Telegramm from '../../img/links/telegram.png'
import GitHub from '../../img/links/github.png'


function Footer() {
    return (
        <div className={'footer'}>
            <a>© XXXCrush 2024</a>
            <div className={'links'}>
                <img src={Telegramm}/>
                <img src={GitHub}/>
            </div>
        </div>
    )
}

export default Footer;
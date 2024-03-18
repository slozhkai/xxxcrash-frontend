import './Footer.css'
import Telegramm from '../../img/links/telegram.png'
import GitHub from '../../img/links/github.png'


function Footer() {
    return (
        <div className={'footer'}>
            <a>© XXXCrush 2024</a>
            <div className={'links'}>
                <a href={'https://t.me/wtf2004android'}>
                    <img src={Telegramm}/>
                </a>
                <a href={'https://github.com/slozhkai'}>
                    <img src={GitHub}/>
                </a>
            </div>
        </div>
    )
}

export default Footer;
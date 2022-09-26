import './styles/Footer.css';
import footerLogo from './imgs/somactive-logo-small.png';

const Footer = props => {
    return (
        <footer>
            <div>
                <div id="disclaimer">
                    <a href="/"><img src={footerLogo} alt="somactive logo"/></a>
                    <p className='disclaimer'>DISCLAIMER: It's strongly recommended that you talk to your doctor before starting our exercises and to stop immediately if you start to feel any kind of pain or dizziness. As a result, SomActive isn't legally liable if you weren't healthy enough to exercise in the first place or if you get sick or injured while exercising. Any statements regarding dietary supplements are to be used at your discretion and are not intended to diagnose, treat, cure or prevent any disease. If you tried to take us to court, we would argue that you knew all about the risks and proceeded anyway.</p><br/>
                </div>
                <div className="socmed-icons">
                    <a target="_blank" href="https://www.facebook.com/christianjunel.moriones.9" className="fa fa-facebook fa-lg" rel="noopener noreferrer"> </a>
                    <a target="_blank" href="https://twitter.com/juneldaexplorer" className="fa fa-twitter fa-lg" rel="noopener noreferrer"> </a>
                    <a target="_blank" href="https://www.instagram.com/cjmoriones/" className="fa fa-linkedin fa-lg" rel="noopener noreferrer"> </a>
                    <a target="_blank" href="https://www.linkedin.com/in/christianjunelmoriones/" className="fa fa-instagram fa-lg" rel="noopener noreferrer"> </a>
                    <a target="_blank" href="mailto:christianjunelm@gmail.com?subject=Inquiry Via Website&body=Hi there, I find your services interesting. Let's hop on a call?" className="fa fa-envelope fa-lg" rel="noopener noreferrer"> </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
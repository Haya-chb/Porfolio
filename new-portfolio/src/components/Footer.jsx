import {Link} from 'react-router-dom';
import '../styles/Footer.css' 

export const Footer = () =>{
    return(
        <>
        <footer>
        <h2 className="h2-pink">Travaillons ensemble</h2>
        <span>
        <section className="footer__section footer__section--left">
            <h3>Navigation</h3>
            <ul>
                    <li>
                        <Link to="/projects" className="footer__link">Mes projets</Link>
                    </li>

                    <li>
                        <Link to="/contact" className="footer__link">Me contacter</Link>
                    </li>

                    <li>
                        <Link to="/ " className="footer__link">Plan du site</Link>
                    </li>

                    <li>
                        <Link to="/  "className="footer__link">Mentions légales</Link>
                    </li>
            </ul>
        </section>

        <section className="footer__section footer__section--right">
            <h3>Contact</h3>
            <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/haya-chaibi/" className="footer__link">Linkedin</a>
                    </li>

                    <li>
                        <a href="https://github.com/Haya-chb" className="footer__link">GitHub</a>
                    </li>

                    <li>
                        <a href="mailto:haya.chaibi@hotmail.com" className="footer__link">Mail</a>
                    </li>

            </ul>
        </section>
</span>

        </footer>
        </>

        
    )
}
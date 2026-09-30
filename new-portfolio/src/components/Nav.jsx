import {Link} from 'react-router-dom';
import '../styles/Nav.css' 
export const Nav = () => {
    return(
        <> 

<nav>
    <ul>
        <li><Link to="/projects" className="nav__link">Mes projets</Link></li>
        <li><Link to="/contact" className="nav__link">Me contacter</Link></li>
    </ul>
</nav>
    

        </> 

    )

}
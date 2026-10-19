import {Footer} from "../components/Footer";
import {Nav} from "../components/Nav";
import { Link, useLocation } from "react-router-dom";
import "../styles/SiteMap.css"
export const SiteMap = () => {

    return (
        <>

<header>
    <Nav />

    <h1 className="h1-pink">Plan du site</h1>
</header>


<ul className="sitemap__container">
    <li className="sitemap__bloc">
        
        <Link to="/" className="sitemap__link"> Acceuil </Link>
        <Link to="/#projects" className="sitemap__link"> Mes projets </Link>

            < ul className = "project__container">
                <li className="sitemap__bloc">
                    <Link to="/projects/1" className="sitemap__link">La Gamelle</Link>
                    <Link to="/projects/2" className="sitemap__link">Yonsekai</Link>
                    <Link to="/projects/4" className="sitemap__link">DataKill</Link>
                    <Link to="/projects/3"className="sitemap__link">BrainWords</Link>
                    
                </li>
            </ul>
        <Link to="/contact" className="sitemap__link">Me contacter</Link>
       
    
    </li>
</ul>

<Footer/>

</>
    )

    }
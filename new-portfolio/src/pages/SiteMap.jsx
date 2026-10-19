import {Footer} from "../components/Footer";
import {Nav} from "../components/Nav";
import { Link, useLocation } from "react-router-dom";

export const SiteMap = () => {

    return (
        <>

<header>
    <Nav />

    <h1>Plan du site</h1>
</header>


<ul>
    <li>
        
        <Link to="/"> Acceuil </Link>
        <Link to="/#projects"> Mes projets </Link>

            <ul>
                <li>
                    <Link to="/projects/1">La Gamelle</Link>
                    <Link to="/projects/2">Yonsekai</Link>
                    <Link to="/projects/4">DataKill</Link>
                    <Link to="/projects/3">BrainWords</Link>
                    
                </li>
            </ul>
        <Link to="/contact">Me contacter</Link>
        <Link to="">Mentions Légales</Link> 
    
    </li>
</ul>



</>
    )

    }
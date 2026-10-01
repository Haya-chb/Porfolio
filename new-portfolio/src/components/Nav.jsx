
import '../styles/Nav.css' 

import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Nav = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#projects") {
      const element = document.getElementById("projects");

      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location]);


    return(
        <> 

<nav>
    <ul>
        <li><Link to="/#projects" className="nav__link">Mes projets</Link></li>
        <li><Link to="/contact" className="nav__link">Me contacter</Link></li>
    </ul>
</nav>
    

        </> 

    )

}
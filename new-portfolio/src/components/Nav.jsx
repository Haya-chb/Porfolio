
import '../styles/Nav.css' 

import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Nav = ({theme = "pink"}) => {
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
        <li><Link to="/#projects" className={`nav__link nav__link-${theme}`}>Mes projets</Link></li>
        <li><Link to="/contact" className={`nav__link nav__link-${theme}`}>Me contacter</Link></li>
    </ul>
</nav>
    

        </> 

    )

}



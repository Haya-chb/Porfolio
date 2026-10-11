import projets from "../assets/data/projets.json";
import {Nav} from "../components/Nav";
import {Footer} from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/Project.css";
export const Project = () =>{

   const { id } = useParams();

  const projet = projets.projet.find(
    (projet) => projet.id === Number(id)
  );


    return(
        <>
      <header className ="header-pink">
        <Nav theme="white"/>
      <section>
        
        <h1 className="h1-white">{projet.name}</h1>
        <p className="text-white">{projet.description}</p>
        
      </section>

  <aside>

    {projet.words.map((word) => (    
      <span 
          className ="word__span"
          key={word.text}
          style={{
            transform: `rotate(${word.rotation}deg)`,
            left: `${word.x}px`,
            top: `${word.y}px`
          }}
      >
        {word.text}
      </span>
    ))}    
  </aside>


  </header>
        

  <section className="project__section">

    <h2 className = "h2-pink">Galerie</h2>

    <div className="galerie__grid">
    {projet.images.map((image) => (    
      <img className ="card__image"
          key={image.src}
          src={image.src}
          alt={image.alt}
      />
    ))}  

    </div>

  </section>

  <section className ="other__section">

    <h2 className = "h2-white"> Mes autres projets</h2>
    
    <div className="other__div"> 
     {projets.projet
      .filter((projet) => projet.id !== Number(id))
      .map((projet) => (

         <article key={projet.id} className="project__card ">

        <Link to={`/projects/${projet.id}`}>

        <img src={projet.images[0].src} alt={projet.images[0].alt} className='card__link'/>

        </Link>

         </article>
       ))}

      </div>

  </section>

  <Footer />
  
      </>
    )
}
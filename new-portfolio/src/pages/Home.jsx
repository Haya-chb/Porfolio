import {Footer} from "../components/Footer";
import {Nav} from "../components/Nav";
import projets from "../assets/data/projets.json";
import presentation from "../assets/data/presentation.json";
import { Link, useLocation } from "react-router-dom";
import Alternance from "../components/Alternance";

export const Home = () =>{


    return(
        <>
        <header className="header-heigth">
      
 
      <Nav />

<section className = "header__section header-space">

  <div className="header__text">
      <h1 className="h1-pink">Haya Chaibi</h1>
      <p className="texte-black">Développeuse full stack et UX/UI Designer</p>
  </div>
  
<aside className="presentation__words">
  {presentation.words.map((word, index) => (
    <span
      className="word word--white word__span radius-medium word-big " 
      key={word.text}
      style={{
        transform: `rotate(${word.rotation}deg)`,
        left: `${word.x}px`,
        top: `${word.y}%`,
        "--final-top": `${word.y}%`,
        backgroundColor: `var(--${word.color})`,
        animationDelay: `${index * 100}ms`,
      }}
    >
      {word.text}
    </span>
  ))}
</aside>

</section>
      
        </header>
      


      <section className="cv__section">

      <p className = "text-white text-medium">Depuis la création du Web, et à travers de nombreuses autres innovations, l’idée a toujours été de créer des espaces ouverts à tous, où chacun peut explorer, s’amuser et laisser libre cours à son imagination. <br />

Aujourd’hui, j’ai parfois l’impression que cette vision se perd au profit de sites de plus en plus uniformisés. Pour moi, un site web doit être une expérience à part entière. À travers les interactions, les animations et une direction artistique cohérente avec le projet, j’aime imaginer des expériences qui donnent envie d’être explorées, qui surprennent, intriguent et plongent l’utilisateur dans un univers. <br />

Mais cette expérience ne doit jamais se faire au détriment de l’accessibilité : le Web doit rester un espace ouvert à tous, sans exclure personne. <br />

J’ai encore beaucoup à apprendre pour me rapprocher de cette vision. C’est pourquoi je suis à la recherche d’une alternance ou d’un stage de six mois, afin de continuer à progresser, d’expérimenter et de contribuer à la création d’expériences web singulières. </p>

      <a href="" className="button button-blue radius-small" >Découvrir mon CV</a>

      </section>

    

      <section className="projects__section" id ="projects">

      <h2 className="h2-pink">Mes projets</h2>

      <div className ="project__div">

       {projets.projet.map((projet) => (

         <article key={projet.id} className="project__card ">

        <Link to={`/projects/${projet.id}`}>

        <img src={projet.images[0].src} alt={projet.images[0].alt} className='card__link radius-small'/>

        </Link>

         </article>
       ))}
      
      </div>

      </section>

       <Alternance />

        <Footer />

      </>
    )
}
import {Footer} from "../components/Footer";
import {Nav} from "../components/Nav";

export const Home = () =>{
    return(
        <>
        <header>
        <Nav />

      <h1 className="h1-pink">Haya Chaibi</h1>
      <p className="texte-black">Développeuse full stack et UX/UI Designer</p>
        </header>
      


      <section className="cv__section">

      <p> </p>

      <a href="" className="button button-blue" >Découvrir mon CV</a>

      </section>

    

      <section className="projects__section" id ="projects">

      <h2 className="h2-pink">Mes projets</h2>


      </section>


      <section className="apprentiship__section">

      <h2 className="h2-white">Alternance</h2>
    
      <p>Souhaitez-vous me prendre en alternance ?</p>

      <div>
      <a href="/contact" className="button button-pink">Oui</a>
      <a href="" className="button button-pink">Non</a>
      </div>
  </section>

        <Footer />

      </>
    )
}
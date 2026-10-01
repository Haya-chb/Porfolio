import {Nav} from "../components/Nav";
import {Form} from "../components/Form";
import {Footer} from "../components/Footer";
import '../styles/Contact.css';

export const Contact = () =>{
    return(
        <>
        <header className="contact__header">
        <Nav />
        <h1 className="h1-pink">Me contacter</h1>
        </header>

        <section className="form__section">
        <Form />
        </section>

        <Footer />
      </>
    )
}
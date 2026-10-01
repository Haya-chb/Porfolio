import { useSearchParams } from "react-router-dom";

import { Nav } from "../components/Nav";
import { Form } from "../components/Form";
import { Footer } from "../components/Footer";

import "../styles/Contact.css";

export const Contact = () => {

    const [searchParams] = useSearchParams();
    const status = searchParams.get("status");

    return (
        <>
            <header className="contact__header">
                <Nav />
                <h1 className="h1-pink">Me contacter</h1>
            </header>

            <section className="form__section">

                {status === "success" && (
                    <p className="form__success">
                        Votre message a bien été envoyé !
                    </p>
                )}

                {status === "error" && (
                    <p className="form__error">
                        Une erreur est survenue lors de l'envoi.
                    </p>
                )}

                {status === "invalid" && (
                    <p className="form__error">
                        Veuillez vérifier les informations renseignées.
                    </p>
                )}

                <Form />

            </section>

            <Footer />
        </>
    );
};
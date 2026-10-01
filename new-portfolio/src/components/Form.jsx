
import "../styles/Form.css"

export const Form = () =>{

return(
    <>
    
<form action="contact.php" method="post">

<div className="form__field">
<label htmlFor="nom">*Nom </label>
<br />
<input type="text" id="nom" name="nom" className="form__input" required />
</div>
 
<div className="form__field">
 <label htmlFor="prenom">*Prénom </label>
 <br />
 <input type="text" id="prenom" name="prenom" className="form__input" required />
</div>

<div className="form__field">
 <label htmlFor="mail">*Email</label>
 <br />
 <input type="email" id="mail" name="email" className="form__input" required /> 
</div>

<div className="form__field">
 <label htmlFor="entreprise">Nom de l'entreprise</label>
 <br />
 <input type="text" id="entreprise" name="entreprise" className="form__input" />
</div>

<div className="form__field">
 <label htmlFor="message">Message</label>
 <br />
 <textarea name="message" id="message" rows="6" className="form__textarea" required></textarea>
</div>

<input className="button button-blue " type="submit" value="Envoyer ce mail" />

</form>
    
    </>
)



}
import "../styles/Form.css"

export const Form = () =>{

return(
    <>
    
<form action="Contact.jsx" method="post">

<div>
<label htmlFor="nom">*Nom </label>
<br />
<input type="text" id="nom" name="nom" required />
</div>
 
<div>
 <label for="prenom">*Prénom </label>
 <br />
 <input type="text" id="prenom" name="prenom" required />
</div>

<div>
 <label for="mail">*Email</label>
 <br />
 <input type="email" id="mail" name="email" required /> 
</div>

<div>
 <label for="entreprise">Nom de l'entreprise</label>
 <br />
 <input type="text" id="entreprise" name="entreprise" />
</div>

<div>
<label for="message">Message</label>
<br />
<textarea name="message" id="message" rows="6" required></textarea>
</div>

<input className="button button-blue " type="submit" value="Envoyer ce mail" />

</form>
    
    </>
)
}
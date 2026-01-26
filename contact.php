<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style-contact.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton+SC&family=Neonderthaw&display=swap" rel="stylesheet">
    <title>Contact-Portfolio Haya</title>
</head>

<body>


    <header>
       

<nav>
    <ul>
        <li><a href="index.html">Acceuil</a></li>
        <li><a href="galerie.html">Galerie</a></li>
        <li><a href="contact.php" class="page">Contact</a></li>
    </ul>
</nav>

        

    </header>

<main>

<section>

<h1>Me contacter</h1>


<form action="contact.php" method="post">

<div>
<label for="nom">*Nom </label>
<br>
<input type="text" id="nom" name="nom" required>
</div>
 
<div>
 <label for="prenom">*Prénom </label>
 <br>
 <input type="text" id="prenom" name="prenom"required> 
</div>

<div>
 <label for="mail">*Email</label>
 <br>
 <input type="email" id="mail" name="email" required> 
</div>

<div>
 <label for="entreprise">Nom de l'entreprise</label>
 <br>
 <input type="text" id="entreprise" name="entreprise">
</div>

<div>
<label for="message">Message</label>
<br>
<textarea name="message" id="message" rows="6" required></textarea>
</div>

<input class="bouton" type="submit">

</form>
    
 <?php
if (!empty($_POST['email']) && !empty($_POST['message']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

    $prenom = htmlspecialchars($_POST['prenom']);
    $nom = htmlspecialchars($_POST['nom']);
    $entreprise = htmlspecialchars($_POST['entreprise']);
    $email = $_POST['email'];
    $msg = nl2br(htmlspecialchars($_POST['message']));

    $entete  = "MIME-Version: 1.0\r\n";
    $entete .= "Content-type: text/html; charset=utf-8\r\n";
    $entete .= "From: Portfolio Haya <haya.chaibi@hotmail.com>\r\n";
    $entete .= "Reply-To: $email\r\n";

    $message = "
    <h2>Message depuis le portfolio</h2>
    <p><b>Nom :</b> $prenom $nom</p>
    <p><b>Entreprise :</b> $entreprise</p>
    <p><b>Email :</b> $email</p>
    <p><b>Message :</b><br>$msg</p>
    ";

    if(mail("destinataire@free.fr", "Nouveau message - Portfolio", $message, $entete)){
        echo "<p style='color:lightgreen'>Votre message a bien été envoyé.</p>";
    } else {
        echo "<p style='color:red'>Erreur lors de l'envoi.</p>";
    }
}
?>
















<aside>

<h2>Mes réseaux :</h2>
<a href="https://github.com/Haya-chb"><img src="img/autres/github.webp" alt="Github"></a>
<a href="https://www.linkedin.com/in/haya-chaibi/"><img src="img/autres/linkedin.webp" alt="Linkedin"></a>

</aside>




</main>


<footer>
    <section class="footer-group">
        <p>Me contacter</p>
        <ul>
            <li><a href="img/CV.pdf" title="Télécharger mon CV">Mon CV</a></li>
            <li><a class="lien" href="mailto:haya.chaibi@hotmail.com">Mail</a></li>
            <li><a class="lien" href="https://www.linkedin.com/in/haya-chaibi/">LinkedIn</a></li>
            <li><a class="lien" href="https://github.com/Haya-chb">GitHub</a></li>
        </ul>
    </section>

    <section class="footer-group">
        <p>Navigation</p>
        <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="galerie.html">Projets</a></li>
            <li><a href="contact.php" class="page">Contact</a></li>
        </ul>
    </section>
</footer>




</body>

</html>
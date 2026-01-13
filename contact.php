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
        <li><a href="galerie.html">Projets</a></li>
        <li><a href="contact.php" class="page">Contact</a></li>
    </ul>
</nav>

        

    </header>

<main>

<section>

<h1>Me contacter</h1>


<form action="contact.html" method="post">

<div>
<label for="nom">*Nom </label>
<br>
<input type="text" id="nom" required>
</div>
 
<div>
 <label for="prenom">*Prénom </label>
 <br>
 <input type="text" id="prenom" required> 
</div>

<div>
 <label for="mail">*Email</label>
 <br>
 <input type="email" id="mail" required> 
</div>

<div>
 <label for="entreprise">Nom de l'entreprise</label>
 <br>
 <input type="text" id="entreprise" >
</div>

<div>
<label for="message">Message</label>
<br>
<textarea name="" id="message" rows="6" required></textarea>
</div>

<input class="bouton" type="submit">

</form>
    
        

<aside>

<h2>Mes réseaux :</h2>
<a href=""><img src="img/autres/github.webp" alt="Github"></a>
<a href=""><img src="img/autres/linkedin.webp" alt="Linkedin"></a>
    
</aside>




</main>


<footer>
    <section class="footer-group">
        <p>Me contacter</p>
        <ul>
            <li><a href="CV.pdf" title="Télécharger mon CV">Mon CV</a></li>
            <li><a class="lien" href="mailto:haya.chaibi@hotmail.com">Mail</a></li>
            <li><a class="lien" href="https://linkedin.com">LinkedIn</a></li>
            <li><a class="lien" href="https://github.com">GitHub</a></li>
        </ul>
    </section>

    <section class="footer-group">
        <p>Navigation</p>
        <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="galerie.html">Projets</a></li>
            <li><a href="contact.php">Contact</a></li>
        </ul>
    </section>
</footer>




</body>

</html>
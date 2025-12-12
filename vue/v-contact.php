<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style-contact.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton+SC&family=Neonderthaw&display=swap" rel="stylesheet">
    <title>Contact-Portfolio Haya</title>
</head>

<body>


    <header>
       

<nav>
    <ul>
        <li><a href="../index.html">Acceuil</a></li>
        <li><a href="projets.html">Projets</a></li>
        <li><a href="jeux.html">Jeux</a></li>
        <li><a href="v-contact.php" class="page">Contact</a></li>
    </ul>
</nav>

        

    </header>

<main>

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
    
        
    </main>

<footer>


    <section>
        <ul>
            <li><a class="lien" href="mailto:hchaibi10@hotmail.com">hchaibi10@hotmail.com</a></li>
            <li> +33 7 84 59 55 57 </li> 
        </ul>
    </section>

    <section>
        <ul>
            <li><a class="lien"href="https://www.linkedin.com/in/haya-chaibi-8472b1337/">Haya Chaibi</a></li>
            <li><span><a class="lien" href="https://github.com/Haya-chb">Haya-chb</a></li>
            <li><a href="">Mon CV</a></li>
        </ul>
    </section>

    <section>
    <p>Navigation</p>
    <ul>
        <li><a href="../index.html">Acceuil</a></li>
        <li><a href="projets.html">Projets</a></li>
        <li><a href="jeux.html">Jeux</a></li>
        <li><a href="v-contact.php">Contact</a></li>
    </ul>

   </section>


</footer>






</body>

</html>
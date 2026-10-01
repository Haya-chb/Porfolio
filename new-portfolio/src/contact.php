<?php

if (
    !empty($_POST['email']) &&
    !empty($_POST['message']) &&
    filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)
) {

    $prenom = htmlspecialchars($_POST['prenom']);
    $nom = htmlspecialchars($_POST['nom']);
    $entreprise = htmlspecialchars($_POST['entreprise']);
    $email = htmlspecialchars($_POST['email']);
    $msg = nl2br(htmlspecialchars($_POST['message']));

    $entete  = "MIME-Version: 1.0\r\n";
    $entete .= "Content-type: text/html; charset=utf-8\r\n";
    $entete .= "From: Portfolio Haya <portfolio@haya-chaibi.fr>\r\n";
    

    $message = "
        <h2>Message depuis le portfolio</h2>
        <p><b>Nom :</b> $prenom $nom</p>
        <p><b>Entreprise :</b> $entreprise</p>
        <p><b>Email :</b> $email</p>
        <p><b>Message :</b><br>$msg</p>
    ";

    if (mail(
        "haya.chaibi@hotmail.com",
        "Nouveau message - Portfolio",
        $message,
        $entete
    )) {

        header("Location: /contact?status=success");
        exit;

    } else {

        header("Location: /contact?status=error");
        exit;
    }

} else {

    header("Location: /contact?status=invalid");
    exit;
}
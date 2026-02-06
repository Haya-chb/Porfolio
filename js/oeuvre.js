const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id")); 

fetch("js/projets.json") 
  .then(res => {
    if (!res.ok) throw new Error("Fichier JSON introuvable");
    return res.json();
  })
  .then(data => {
    const projet = data.projet.find(p => p.id === id);

    if (!projet) {
      window.location.href = "galerie.html";
      return;
    }

    document.querySelector("h1").innerHTML = projet.nom;
    
    const image = document.querySelector("figure img");
    image.src = projet.image;
    image.alt = projet.nom;


  document.getElementById("description").innerHTML= projet.description;


  document.getElementById("caracteristique").innerHTML= projet.caracteristiques;

    const lienBouton = document.getElementById('url');
    if (id === 2) {
        lienBouton.style.display = "none";
    } else {
        lienBouton.href = projet.url;
    }

  })
  .catch(err => {
    console.error(err);
    window.location.href = "galerie.html";
  });


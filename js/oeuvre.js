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

 
    document.querySelector("h1").textContent = projet.nom;
    
    const image = document.querySelector("figure img");
    image.src = projet.image;
    image.alt = projet.nom;

  
    document.querySelector("#information p").textContent = projet.description;

     
    document.getElementById('url').href = projet.url



    afficherTexte(projet);
  })
  .catch(err => {
    console.error(err);
    window.location.href = "galerie.html";
  });


function afficherTexte(projet) {
  const infoParagraphe = document.querySelector("#information p");

  document.getElementById("description").addEventListener("click", () => {
    infoParagraphe.textContent = projet.description;
  });

  document.getElementById("caracteristique").addEventListener("click", () => {
    infoParagraphe.textContent = projet.caracteristiques;
  });
}
fetch("js/projets.json") 
  .then(res => {
    if (!res.ok) throw new Error("Fichier JSON introuvable");
    return res.json();
  })
  .then(data => {

    const gallery = document.getElementById("gallery");

    data.projet.forEach(projet => {

      const card = document.createElement("a");
      card.href = `oeuvre.html?id=${projet.id}`;

      card.innerHTML = `
        <figure class="container-img">
          <img src="${projet.image}" alt="${projet.nom}">
          <figcaption>${projet.nom}</figcaption>
        </figure>
      `;

      gallery.appendChild(card);
    });

  });


 
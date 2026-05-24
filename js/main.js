const grillePerso = document.getElementById("grille-perso");
const grillePro = document.getElementById("grille-pro");
const modal = document.getElementById("modal");

games.forEach(function (game) {
    const carte = document.createElement("div");
    carte.className = "projet";
    carte.innerHTML = `
        <img src="${game.image}" alt="${game.name}">
        <h4>${game.name}</h4>
    `;

    carte.addEventListener("click", function () {
        ouvrirModal(game);
    });

    if (game.categorie === "scolaire") {
        grillePro.appendChild(carte);
    } else {
        grillePerso.appendChild(carte);
    }
});

function ouvrirModal(game) {
    document.getElementById("modal-image").src = game.image;
    document.getElementById("modal-nom").textContent = game.name;
    document.getElementById("modal-des").textContent = game.des;
    document.getElementById("modal-lien").href = game.link;
    modal.classList.add("ouvert");
}

function fermerModal() {
    modal.classList.remove("ouvert");
}

document.getElementById("modal-fermer").addEventListener("click", fermerModal);

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        fermerModal();
    }
});
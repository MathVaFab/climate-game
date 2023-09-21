// Utiliser une convention de nommage cohérente pour les variables et les fonctions
const dataIndex = new Map();
dataIndex.set("facadesblanches", 10);
dataIndex.set("traffic", 20);
dataIndex.set("trocacouvert", 25);
dataIndex.set("parisousbois", 30);
dataIndex.set("haussmansousbois", 40);
dataIndex.set("popdensite", 100);
dataIndex.set("charbon", 1000);
dataIndex.set("pub", 21);

function createImage(varName, status) {
  const container = document.getElementById("chartjs-container");

  // Créer un nouvel élément img
  const img = document.createElement("img");

  // Définir les attributs pour l'élément img
  img.src = `images/game/${varName}.png`;
  img.alt = varName;
  img.classList.add("background-game");
  console.log(varName, status);
  // Utiliser le zIndex de la variable passée plutôt que d'une valeur fixe
  img.style.zIndex = status ?? 0; // Si varName n'existe pas dans dataIndex, utiliser 0 comme valeur par défaut
  img.id = varName;

  // Ajouter l'élément img dans le div
  container.appendChild(img);
}

function deleteId(id) {
  // Trouver l'élément
  const element = document.getElementById(id);

  // Supprimer l'élément
  if (element) {
    element.remove();
  } else {
    console.warn(`Élément avec l'ID ${id} non trouvé.`);
  }
}

function ajouterBanner() {
  // Le code HTML à ajouter
  var html = `
    <div class="background">
      <div class="banner">
        <img class="character" src="./images/character/speaking.png" alt="Image de bannière">
        <div class="text">
          <div class="bubble grow left"></div>
        </div>
      </div>
    </div>
  `;

  // Trouver la balise <body> et y ajouter le code HTML
  document.body.insertAdjacentHTML("beforeend", html);
}

function afficherTexte(texte) {
  // Le texte que vous voulez afficher
  var monTexte = texte; // Texte passé en paramètre
  var i = 0;

  // Notez ici que nous utilisons getElementsByClassName et sélectionnons le premier élément
  var elements = document.getElementsByClassName("bubble grow left");
  var element;
  if (elements.length > 0) {
    element = elements[0];

    // Utilisation de setInterval pour ajouter un caractère toutes les 100 millisecondes
    var interval = setInterval(function () {
      if (i < monTexte.length) {
        element.innerHTML += monTexte.charAt(i);
        i++;
      } else {
        clearInterval(interval); // Arrête le setInterval quand tout le texte est affiché
        element.insertAdjacentHTML(
          "beforeend",
          '<a href="javascript:void(0)" onclick="supprimerBackground()" class="eightbit-btn">Continue</a>'
        );
      }
    }, 100); // 100 millisecondes entre chaque caractère
  } else {
    console.log(
      "Aucun élément avec la classe 'bubble grow left' n'a été trouvé."
    );
  }
}

function supprimerBackground() {
  // Rechercher tous les éléments avec la classe 'background'
  var elements = document.getElementsByClassName("background");

  // Parcourir le tableau et supprimer chaque élément
  while (elements.length > 0) {
    elements[0].remove();
  }
}

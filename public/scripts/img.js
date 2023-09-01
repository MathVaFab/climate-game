// Utiliser une convention de nommage cohérente pour les variables et les fonctions
const dataIndex = new Map();
dataIndex.set('facadesblanches', 10);
dataIndex.set('traffic', 20);
dataIndex.set('trocacouvert', 25);
dataIndex.set('parisousbois', 30);
dataIndex.set('haussmansousbois', 40);
dataIndex.set('popdensite', 100);
dataIndex.set('charbon', 1000);

function createImage(varName, status) {
    const container = document.getElementById("chartjs-container");

    // Créer un nouvel élément img
    const img = document.createElement("img");

    // Définir les attributs pour l'élément img
    img.src = `images/game/${varName}${status}.png`;
    img.alt = varName;
    img.width = '400';
    img.style.position = "absolute";

    // Utiliser le zIndex de la variable passée plutôt que d'une valeur fixe
    img.style.zIndex = dataIndex.get(varName) || 0;  // Si varName n'existe pas dans dataIndex, utiliser 0 comme valeur par défaut
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
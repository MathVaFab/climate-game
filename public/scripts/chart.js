function facadesblanches(param){
    const container = document.getElementById("chartjs-container");
    // Crée un nouvel élément img
    const img = document.createElement("img");

    if (param === 1) {
        // Définit les attributs pour l'élément img
        img.src = "images/facadesblanches/facade1.jpg";
        img.alt = "FacadesBlanches";
        img.width = 300;
        img.height = 200;
        img.style.position = "absolute";
        img.style.zIndex = "1";
        // Ajoute l'élément img dans le div
        container.appendChild(img);
    } else {
        // Définit les attributs pour l'élément img
        img.src = "images/facadesblanches/facade2.jpg";
        img.alt = "FacadesBlanches";
        img.width = 300;
        img.height = 200;
        img.style.position = "absolute";
        img.style.zIndex = "1";
        // Ajoute l'élément img dans le div
        container.appendChild(img);
    }
}
function charbon(param){
    const container = document.getElementById("chartjs-container");
    // Crée un nouvel élément img
    const img = document.createElement("img");

    if (param === 1) {
        // Définit les attributs pour l'élément img
        img.src = "images/charbon/charbon1.png";
        img.alt = "FacadesBlanches";
        img.width = 300;
        img.height = 200;
        img.style.position = "absolute";
        img.style.zIndex = "1";
        // Ajoute l'élément img dans le div
        container.appendChild(img);
    } else if (param === 2) {
        // Définit les attributs pour l'élément img
        img.src = "images/charbon/charbon2.png";
        img.alt = "FacadesBlanches";
        img.width = 300;
        img.height = 200;
        img.style.position = "absolute";
        img.style.zIndex = "1";
        // Ajoute l'élément img dans le div
        container.appendChild(img);
    }else {
        // Définit les attributs pour l'élément img
        img.src = "images/charbon/charbon3.png";
        img.alt = "FacadesBlanches";
        img.width = 300;
        img.height = 200;
        img.style.position = "absolute";
        img.style.zIndex = "1";
        // Ajoute l'élément img dans le div
        container.appendChild(img);
    }
}
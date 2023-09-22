/**
 * Function that is called by the bot
 */
// eslint-disable-next-line no-unused-vars
function updateChart(landbotData) {
  // eslint-disable-next-line no-undef
  updateChartData(landbotData);
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id") || "H-1686691-RWC0LLC535N1YA7V";
// Create and connect to the Landbot
// eslint-disable-next-line no-new, no-undef
new Landbot.Container({
  container: ".landbot",
  configUrl: `https://landbot.pro/v3/${id}/index.json`,
});

window.onload = () => {
  const anim1 = document.querySelector(".anim-1");
  if (!anim1) throw new Error("Element not found");
  anim1.style.backgroundImage = `conic-gradient(red 100%, red  0)`;

  const anim2 = document.querySelector(".anim-2");
  if (!anim2) throw new Error("Element not found");
  anim2.style.backgroundImage = `conic-gradient(black 100%, black  0)`;
};

function updateGauge(type, progress) {
  // Vérifier si la valeur de progression est entre 0 et 100
  if (progress < 0 || progress > 100)
    throw new Error("La valeur de progression doit être entre 0 et 100.");

  // Mettre à jour le texte de la valeur de progression
  const innerElement = document.querySelector(".inner-" + type);
  if (!innerElement) throw new Error("Element not found");
  innerElement.innerText = `${progress}%`;

  // Appliquer le degré de rotation à la barre de progression
  innerElement.parentElement.parentElement.style.backgroundImage = `conic-gradient(${
    type === "impact" ? "black" : "red"
  } ${progress}%, ${type === "impact" ? "yellowgreen" : "black"}  0)`;
}

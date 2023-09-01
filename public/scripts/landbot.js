/**
 * Function that is called by the bot
 */
// eslint-disable-next-line no-unused-vars
function updateChart (landbotData) {
  // eslint-disable-next-line no-undef
  updateChartData(landbotData)
}

const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id') || 'H-1686691-RWC0LLC535N1YA7V'
// Create and connect to the Landbot
// eslint-disable-next-line no-new, no-undef
new Landbot.Container({
  container: '.landbot',
  configUrl: `https://landbot.pro/v3/${id}/index.json`
})

function updateGauge(type,progress) {
  // Vérifier si la valeur de progression est entre 0 et 100
  if (progress < 0 || progress > 100) {
    console.error("La valeur de progression doit être entre 0 et 100.");
    return;
  }

  // Mettre à jour le texte de la valeur de progression
  document.querySelector(".inner-"+type).innerText = `${progress}%`;

  // Appliquer le degré de rotation à la barre de progression
  const circle = document.querySelector('.circle-'+type);
  circle.style.backgroundImage = 'conic-gradient(#B5838D ' + progress + '%, #FFCDB2 0)';
}
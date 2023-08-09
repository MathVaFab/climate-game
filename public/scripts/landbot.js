/**
 * Function that is called by the bot
 */
// eslint-disable-next-line no-unused-vars
function updateChart (landbotData) {
  // eslint-disable-next-line no-undef
  updateChartData(landbotData)
}

/*
 Function to download the canvas as .png image, called by landbot
*/
// eslint-disable-next-line no-unused-vars
function downloadChart (projectName) {
  const link = document.createElement('a')
  link.download = projectName + '_valuewheel.png'
  link.href = document.querySelector('#chartjs').toDataURL('image/png')
  link.click()
}

const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id') || 'H-918478-FZBUA78S346I7FNF'
// Create and connect to the Landbot
// eslint-disable-next-line no-new, no-undef
new Landbot.Container({
  container: '.landbot',
  configUrl: `https://chats.landbot.io/v3/${id}/index.json`
})

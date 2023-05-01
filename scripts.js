const g = document.getElementById.bind(document)
const q = document.querySelectorAll.bind(document)

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=1b976595787f48288932b65d3981e3ae&ip=${data.ip}`)
      .then(response => response.json())
      .then(data => {
        g('location').textContent = data.city
        renderMap([data.longitude, data.latitude])
      })
      .catch(error => renderMap([-118.47, 33.99]))
  })

const renderMap = coordsArray => {
  mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGJvcm4iLCJhIjoiY2w1Ym0wbHZwMDh3eTNlbnh1aW51cm0ydyJ9.Z5h4Vkk8zqjf6JydrOGXGA'
  const map = new mapboxgl.Map({
    center: coordsArray,
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-day-v1',
    zoom: 14,
  })
  map.addControl(new mapboxgl.NavigationControl())
}

q('[data-page]').forEach(button =>
  button.addEventListener('click', e => {
    q('[data-page]').forEach(a => a.classList.remove('active'))
    q('.page, #map').forEach(page => {
      page.style.display = 'none'
    })
    const t = button.dataset.page
    g(t).style.display = 'flex'
    q(`[data-page=${t}]`).forEach(a => a.classList.add('active'))
  }),
)
q('.nav-button')[2].click()

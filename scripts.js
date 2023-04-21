const g = document.getElementById.bind(document)
const q = document.querySelectorAll.bind(document)

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

mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGJvcm4iLCJhIjoiY2w1Ym0wbHZwMDh3eTNlbnh1aW51cm0ydyJ9.Z5h4Vkk8zqjf6JydrOGXGA'
const map = new mapboxgl.Map({
  center: [-118.47, 33.99],
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  zoom: 14,
})
map.addControl(new mapboxgl.NavigationControl())

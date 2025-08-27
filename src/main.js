import './style.scss'

const app = document.querySelector('#app')
app.innerHTML = `
  <main class="container">
    <section id="playlist-section">
      <h1>Плейлист</h1>
      <ol id="playlist"></ol>
    </section>

    <section id="modal-section">
      <h2>Модальне вікно</h2>
      <button id="openModalBtn" class="btn">Відкрити</button>
      <div id="modal" class="modal is-hidden" aria-hidden="true" role="dialog" aria-modal="true">
        <div class="modal__backdrop" data-close></div>
        <div class="modal__content" role="document">
          <p>Це модальне вікно.</p>
          <button id="closeModalBtn" class="btn btn--secondary" data-close>Закрити</button>
        </div>
      </div>
    </section>

    <section id="traffic-section">
      <h2>Світлофор</h2>
      <div class="traffic-light" aria-label="Світлофор">
        <span class="light light--red" data-color="red" aria-hidden="true"></span>
        <span class="light light--yellow" data-color="yellow" aria-hidden="true"></span>
        <span class="light light--green" data-color="green" aria-hidden="true"></span>
      </div>
      <button id="nextLightBtn" class="btn">Наступний колір</button>
    </section>
  </main>
`

const playList = [
    {author: 'LED ZEPPELIN', song: 'STAIRWAY TO HEAVEN'},
    {author: 'QUEEN', song: 'BOHEMIAN RHAPSODY'},
    {author: 'LYNYRD SKYNYRD', song: 'FREE BIRD'},
    {author: 'DEEP PURPLE', song: 'SMOKE ON THE WATER'},
    {author: 'JIMI HENDRIX', song: 'ALL ALONG THE WATCHTOWER'},
    {author: 'AC/DC', song: 'BACK IN BLACK'},
    {author: 'QUEEN', song: 'WE WILL ROCK YOU'},
    {author: 'METALLICA', song: 'ENTER SANDMAN'}
]

const playlistEl = document.getElementById('playlist')
playList.forEach(({author, song}) => {
    const li = document.createElement('li')
    li.textContent = `${author} — ${song}`
    playlistEl.appendChild(li)
})

const modal = document.getElementById('modal')
const openBtn = document.getElementById('openModalBtn')

function openModal() {
    modal.classList.remove('is-hidden')
    modal.setAttribute('aria-hidden', 'false')
}

function closeModal() {
    modal.classList.add('is-hidden')
    modal.setAttribute('aria-hidden', 'true')
}

openBtn.addEventListener('click', openModal)
modal.addEventListener('click', (event) => {
    const target = event.target
    if (target && target.hasAttribute('data-close')) {
        closeModal()
    }
})
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal()
    }
})

const lights = Array.from(document.querySelectorAll('.light'))
let currentLightIndex = 0

function updateLights() {
    lights.forEach((light, index) => {
        light.classList.toggle('is-on', index === currentLightIndex)
    })
}

updateLights()
const nextLightBtn = document.getElementById('nextLightBtn')
nextLightBtn.addEventListener('click', () => {
    currentLightIndex = (currentLightIndex + 1) % lights.length
    updateLights()
})

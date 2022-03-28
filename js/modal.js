const modal = document.querySelector('.modal')
const modalBtns = document.querySelectorAll('.modal-form-btn')
const closeBtn = document.querySelector('.modal__close')
const body = document.querySelector('body')

const array = [...modalBtns, closeBtn]
array.forEach(elem => {
  elem.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    body.classList.toggle('noscroll')
  })
})

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.toggle('hidden')
    body.classList.toggle('noscroll')
  }
})

modal.addEventListener('click', (event) => {
  if (!event.target.closest('.modal__inner')) {
    modal.classList.toggle('hidden')
    body.classList.toggle('noscroll')
  }
})
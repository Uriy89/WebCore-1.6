import './swiper.js'
import '../scss/style.scss'

const moreButtons = document.querySelectorAll('.btn-more')
const closeButtons = document.querySelectorAll('.img-burger-close')

const btnReadMore = document.querySelector('.box__read-more')
const boxText = document.querySelector('.box__text')

const menu = document.querySelector('.pop-menu')

const requestCall = document.querySelector('.request-call')
const feedback = document.querySelector('.feedback')

let flagReadMore = false

const formName = document.getElementById('form__name')
const phone = document.getElementById('request-call__phone')

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.btn')

  function handleButtonClick(event) {
    const buttonId = event.target.id

    switch (buttonId) {
      case 'header-burger':
        menu.classList.toggle('pop-menu--open')
        break
      case 'pop-menu__img-call':
        requestCall.classList.toggle('request-call--open')
        break
      case 'pop-menu__img-chat':
        feedback.classList.toggle('feedback--open')
        break
      case 'header-img-call':
        requestCall.classList.toggle('request-call--open')
        break
      case 'header-img-chat':
        feedback.classList.toggle('feedback--open')
        break
    }
  }
  buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick)
  })
})

// Close

closeButtons.forEach((elem) => {
  elem.addEventListener('click', () => {
    requestCall.classList.remove('request-call--open')
    feedback.classList.remove('feedback--open')
    menu.classList.remove('pop-menu--open')
  })
})

document.getElementById('request-call').onclick = function () {
  requestCall.classList.remove('request-call--open')
}

document.getElementById('pop-menu').onclick = function () {
  menu.classList.remove('pop-menu--open')
}

document.getElementById('feedback').onclick = function () {
  feedback.classList.remove('feedback--open')
}

// Показать все

moreButtons.forEach((elem) => {
  elem.addEventListener('click', () => {
    elem.parentNode
      .querySelector('.slider__wrapper')
      .classList.toggle('swiper-wrapper--all')
    elem.parentNode
      .querySelector('.btn-more')
      .classList.toggle('btn-more--open')
    elem.parentNode.querySelector('.btn-more').textContent =
      elem.parentNode.querySelector('.btn-more').textContent === 'Показать все'
        ? 'Скрыть'
        : 'Показать все'
  })
})

//Читать далее

btnReadMore.addEventListener('click', function () {
  if (!flagReadMore) {
    boxText.classList.add('box__text--open')
    btnReadMore.classList.add('box__read-more--open')
    btnReadMore.textContent = 'Скрыть'
    flagReadMore = true
  } else {
    boxText.classList.remove('box__text--open')
    btnReadMore.classList.remove('box__read-more--open')
    btnReadMore.textContent = 'Читать далее'
    flagReadMore = false
  }
})

// автофокус для input
document.addEventListener('click', function () {
  formName.focus()
  phone.focus()
})

import './swiper.js'
import '../scss/style.scss'

const moreButtons = document.querySelectorAll('.btn-more')
const btnReadMore = document.querySelector('.box__read-more')
const boxText = document.querySelector('.box__text')

const wrapper = document.querySelector('.wrapper')
const menu = document.querySelector('.pop-menu')

const requestCall = document.querySelector('.request-call')
const feedback = document.querySelector('.feedback')

let flagReadMore = false

const formName = document.getElementById('form__name')
const phone = document.getElementById('request-call__phone')

let screenWidth = window.innerWidth
const breakPoint = 1119

;(function width() {
  window.addEventListener('resize', function () {
    screenWidth = document.body.clientWidth
  })
})()

// автофокус для input
document.addEventListener('click', function () {
  formName.focus()
  phone.focus()
})

function withOutBox() {
  document.addEventListener('mousedown', (e) => {
    const clickMenu = e.composedPath().includes(menu)
    const clickRequestCall = e.composedPath().includes(requestCall)
    const clickFeedback = e.composedPath().includes(feedback)
    if (!clickMenu && !clickRequestCall && !clickFeedback) {
      menu.classList.remove('pop-menu--open')
      requestCall.classList.remove('request-call--open')
      feedback.classList.remove('feedback--open')
      wrapper.classList.remove('wrapper--hidden')
      menu.style.display = 'block'
    }
  })
}

document.addEventListener('click', () => {
  if (wrapper.classList.contains('wrapper--hidden')) {
    withOutBox()
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.btn')

  function handleButtonClick(event) {
    const buttonId = event.target.id

    switch (buttonId) {
      case 'header-burger':
        menu.classList.toggle('pop-menu--open')
        wrapper.classList.toggle('wrapper--hidden')
        console.log('pressed: ' + buttonId)
        break
      case 'pop-menu__btn-close':
        menu.classList.toggle('pop-menu--open')
        wrapper.classList.toggle('wrapper--hidden')
        break
      case 'pop-menu__img-call':
        requestCall.classList.toggle('request-call--open')
        menu.classList.toggle('pop-menu--open')
        if (screenWidth > breakPoint) {
          wrapper.classList.add('wrapper--hidden')
          menu.style.display = 'none'
        }
        break
      case 'pop-menu__img-chat':
        feedback.classList.toggle('feedback--open')
        menu.classList.toggle('pop-menu--open')
        if (screenWidth > breakPoint) {
          wrapper.classList.add('wrapper--hidden')
          menu.style.display = 'none'
        }
        break
      case 'request-call__btn-close':
        requestCall.classList.toggle('request-call--open')
        wrapper.classList.remove('wrapper--hidden')
        if (screenWidth > breakPoint) {
          menu.style.display = 'block'
        }
        break
      case 'feedback__btn-close':
        feedback.classList.toggle('feedback--open')
        wrapper.classList.remove('wrapper--hidden')
        if (screenWidth > breakPoint) {
          menu.style.display = 'block'
        }
        break
      case 'header-img-call':
        requestCall.classList.toggle('request-call--open')
        wrapper.classList.toggle('wrapper--hidden')
        break
      case 'header-img-chat':
        feedback.classList.toggle('feedback--open')
        wrapper.classList.toggle('wrapper--hidden')

        break
    }
  }

  buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick)
  })
})

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

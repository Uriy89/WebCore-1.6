import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

Swiper.use([Pagination])
let screenWidth = window.onload
const breakPoint = 320
let mySwiper

;(function width() {
  window.addEventListener('resize', function () {
    screenWidth = document.body.clientWidth
  })
})()

if (screenWidth > breakPoint) {
  if (mySwiper) {
    mySwiper.destroy()
    mySwiper = undefined
  }
} else {
  if (!mySwiper) {
    mySwiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
}

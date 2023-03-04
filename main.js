import './src/index'
import './style.css'
import { gsap } from 'gsap'

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual'
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0)
  }
}

var swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
})

const section = document.getElementById('details')
const discover = document.getElementsByClassName('discover')
const sectionTitle = document.getElementsByClassName('section-title')
const sectionTitleDivider = document.getElementsByClassName(
  'section-title-divider'
)
const sectionBody = document.getElementsByClassName('section-body')
const download = document.getElementsByClassName('download')
const swiperContainer = document.getElementsByClassName('swiper-container')

console.log(discover.item(0))

const handleIntersection = (entries) => {
  const timeline = gsap.timeline({
    defaults: {
      duration: 0.75,
      ease: 'power2.out',
    },
  })

  timeline
    .fromTo(discover, { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(sectionTitle, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5')
    .fromTo(
      sectionTitleDivider,
      { width: 0, opacity: 1 },
      { width: 100, opacity: 1 },
      '-=0.5'
    )
    .fromTo(sectionBody, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5')
    .fromTo(download, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5')
    .fromTo(
      swiperContainer,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1 },
      '-=0.5'
    )

  entries.map((entry) => {
    if (entry.isIntersecting) {
      discover.item(0).classList.remove('hidden')
      sectionTitle.item(0).classList.remove('hidden')
      sectionTitleDivider.item(0).classList.remove('hidden')
      sectionBody.item(0).classList.remove('hidden')
      download.item(0).classList.remove('hidden')
      swiperContainer.item(0).classList.remove('hidden')
      timeline.play()
      observer.unobserve(section)
    }
  })
}

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5,
})

observer.observe(section)

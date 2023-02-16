import { gsap } from 'gsap'

const heroTitle = 'Transform HR Management with Our Innovative Platform'
const heroSlogan =
  "Revolutionize the Way Your HR Team Operates with Office HR's Cutting-Edge HR Management System."

const heroLayout = document.createElement('heroLayout')
const laptopView = `
    <div class="h-screen hidden md:flex justify-center items-center gap-8 mb-6">
        <div class="overlay z-40 absolute w-full h-[40vh] bg-black origin-bottom"></div>
        <div class="hero-section content flex flex-col w-full items-start gap-10">
            <div class="overflow-hidden w-full h-full">
                <h1 class="hero-title lg:text-5xl text-4xl font-bold lg:leading-[3.5rem] leading-[2.5rem] tracking-wider">
                    ${heroTitle}
                </h1>
            </div>
            <p class="lg:text-lg font-light leading-[2rem] tracking-widest">
                ${heroSlogan}
            </p>
            <div class="flex gap-14 justify-center items-center">
                <button type="button" class="font-bold rounded-full px-8 py-3 bg-blue-500 text-white hover:bg-blue-600">
                    Get Started
                </button>
            </div>
        </div>
        <div class="hero-section image w-full h-[40vh] bg-custom-black"></div>
    </div>
`

const mobileView = `
    <div class="mt-20 h-full md:hidden flex flex-col md:flex-row gap-6">
        <div class="overlay-mobile z-40 absolute w-full h-[80vh] bg-black origin-bottom"></div>
        <div class="hero-section image w-full h-[40vh] bg-custom-black"></div>
        <div class="hero-section content flex flex-col w-full items-start gap-6">
            <h1 class="text-4xl font-bold leading-[3rem]">
                ${heroTitle}
            </h1>
            <p class="font-light leading-8 tracking-wide text-justify">
                ${heroSlogan}
            </p>
            <button type="button" class="font-bold text-sm rounded-full px-6 py-4 bg-blue-500 text-white hover:bg-blue-600">
                Try our app for free
            </button>
        </div>
    </div>
`

heroLayout.innerHTML = `
    <style>
        @import url('../../../style.css');
    </style>
    ${laptopView}
    ${mobileView}
`

class HeroLayout extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(heroLayout)

    const overlay = shadow.querySelector('.overlay')
    const overlayMobile = shadow.querySelector('.overlay-mobile')
    const heroSection = shadow.querySelectorAll('.hero-section')

    gsap.fromTo(
      overlay,
      { scaleY: 1 },
      { duration: 1, scaleY: 0, ease: 'forward.easeOut', delay: 3 }
    )

    gsap.fromTo(
      heroSection,
      { scale: 0.4 },
      { scale: 1, duration: 1, ease: 'forward.easeOut', delay: 3 }
    )

    gsap.fromTo(
      overlayMobile,
      { scaleY: 1 },
      { duration: 1, scaleY: 0, ease: 'forward.easeOut', delay: 3 }
    )
  }
}

customElements.define('hero-section', HeroLayout)

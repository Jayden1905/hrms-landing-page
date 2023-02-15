import { gsap } from 'gsap'

const menuList = [
  { name: 'Home', link: 'home' },
  { name: 'Features', link: 'features' },
  { name: 'Pricing', link: 'pricing' },
  { name: 'Try it Free', link: 'tryitfree' },
]

const socialList = [
  { name: 'Facebook', link: 'facebook' },
  { name: 'Twitter', link: 'twitter' },
  { name: 'Instagram', link: 'instagram' },
]

window.data = {
  menu: false,
}

const laptopMenuListLayout = `
      <div id="menu-items" class="hidden md:flex gap-10 justify-center items-center">
        ${menuList
          .map((item) => {
            return `
                  <li class="cursor-pointer ${
                    item.name === 'Try it Free'
                      ? 'rounded-full px-6 py-2 bg-blue-500 !text-white hover:bg-blue-500'
                      : ''
                  }hover:opacity-70 text-white font-bold transition-all duration-300 ease-out">
                      <a href="#${item.link}">${item.name}</a>
                  </li>
                `
          })
          .join('')}
      </div>
`

const mobileMenuListLayout = `
      <div id="menu-items" class="flex flex-col gap-10 px-4">
        ${menuList
          .map((item) => {
            return `
                  <div class="w-full h-full overflow-hidden">
                    <li class="menu-item cursor-pointer text-3xl hover:opacity-70 text-white transition-all duration-300 ease-out">
                        <a href="#${item.link}">${item.name}</a>
                    </li>
                  </div>
                `
          })
          .join('')}
      </div>
`

const navBarLayout = document.createElement('menu')
navBarLayout.innerHTML = `
    <style>
        @import url('../../style.css');
    </style>
    <div class="fixed backdrop-blur-md left-0 right-0 z-50 pt-6 pb-6">
      <ul class="header text-white flex justify-between items-center mx-auto max-w-7xl px-4">
          <div>
              <h1 class="text-3xl font-bold">Logo</h1>
          </div>

          ${laptopMenuListLayout}
          <div class="flex md:hidden">
            <div class="z-50">
              <button id="menu-btn" class="focus:outline-none flex flex-col gap-[5px] p-2">
                <div class="bar bar-1 w-7 h-[2px] bg-white transition-all duration-300 ease-out delay-700"></div>
                <div class="bar bar-2 w-7 h-[2px] bg-white transition-all duration-300 ease-out delay-700"></div>
                <div class="bar bar-3 w-7 h-[2px] bg-white transition-all duration-300 ease-out delay-700"></div>
              </button>
            </div>
          </div>
      </ul>
    </div>
    <div id="hamburger" class="open fixed pt-36 hidden md:hidden transition-all duration-500 ease-out w-full inset-0 h-screen bg-[#191b1d] z-40">
        <div class="flex flex-col w-full h-full">
          <div class="flex justify-start items-start">
            ${mobileMenuListLayout}
          </div>
          <ul class="mt-auto mb-10 flex flex-col px-4 justify-start items-start">
            ${socialList.map((item) => {
              return `
                    <div class="w-full h-full overflow-hidden">
                      <li class="menu-item font-light cursor-pointer hover:opacity-70 text-white opacity-50 transition-all duration-300 ease-out">
                          <a href="#${item.link}">${item.name}</a>
                      </li>
                    </div>
                  `
            })}
          </ul>
        </div>
    </div>
`

class MenuLayout extends HTMLDivElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(navBarLayout)

    const button = shadow.getElementById('menu-btn')
    const hamburger = shadow.getElementById('hamburger')
    const header = shadow.querySelector('.header')
    const menuItem = shadow.querySelectorAll('.menu-item')
    const links = hamburger.querySelectorAll('li')
    const bars = button.querySelectorAll('.bar')

    gsap.from(header, {
      duration: 1,
      y: '-100%',
      opacity: 0,
      delay: 3,
      ease: 'power2.out',
    })

    const scrollDisable = () => {
      hamburger.classList.toggle('open')
      if (hamburger.classList.contains('open')) {
        document.querySelector('body').style.overflow = 'auto'
      } else {
        document.querySelector('body').style.overflow = 'hidden'
      }
    }

    const navBarChange = () => {
      bars[1].classList.toggle('opacity-0')
      bars[0].classList.toggle('rotate-45')
      bars[2].classList.toggle('-rotate-45')
      bars[0].classList.toggle('translate-y-[14px]')
    }

    const timeline = gsap.timeline({
      defaults: { duration: 0.3 },
    })

    timeline
      .fromTo(
        Array.prototype.slice.call(links).reverse(),
        { y: 0 },
        { y: 30, stagger: 0.1 }
      )
      .to(hamburger, { x: '-100%' })

    menuItem.forEach((item) => {
      item.addEventListener('click', function () {
        hamburger.classList.remove('hidden')
        timeline.reversed(!timeline.reversed())

        scrollDisable()
        navBarChange()
      })
    })

    button.addEventListener('click', function () {
      hamburger.classList.remove('hidden')
      timeline.reversed(!timeline.reversed())

      scrollDisable()
      navBarChange()
    })
  }
}

customElements.define('menu-layout', MenuLayout, { extends: 'div' })

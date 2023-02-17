import { gsap } from 'gsap'

const plans = [
  {
    duration: 'Three Months Billing',
    price: '30000',
    features: ['All the features included', 'Minimum 20 employees'],
  },
  {
    duration: 'Six Months Billing',
    price: '60000',
    features: ['All the features included', 'Customization of the system'],
  },
  {
    duration: 'One Year Billing',
    price: '120000',
    features: ['All the features included', 'Plus 3 extra months'],
  },
]

const pricing = document.createElement('pricing')
pricing.innerHTML = `
    <style>
        @import url('/style.css');
        @import url('/style.css');
        @import url('/fontawesome-free-6.3.0-web/css/all.css');
    </style>
    <div class="pricing-section w-full h-full lg:h-screen mt-36 lg:mt-0 flex flex-col justify-center gap-14">
        <h1
            class="section-title hidden text-4xl md:text-6xl lg:text-7xl font-bold leading-[3rem] md:leading-[4rem] tracking-wide text-center w-full">
            Pricing plans for users
        </h1>
        <p class="section-body hidden text-center text-lg sm:text-xl font-light leading-8 tracking-wide">
            Our advanced HR HRIS system is designed to meet the needs of any organization, with easy customizations to accommodate different countries. If you need further information, please feel free to book a demo meeting with us for further clarifications.
        </p>
        <div class="card-container hidden mt-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            ${plans
              .map(
                (plan) =>
                  `
                    <div class="card w-full flex flex-col p-6 h-full bg-custom-black rounded-xl">
                        <h1 class="text-2xl text-center font-extrabold tracking-wider">${
                          plan.duration
                        }</h1>
                        <p class="mt-6 text-center text-lg opacity-70 tracking-widest">Including all features with</p>
                        <div class="mt-16 flex mx-auto items-end gap-1">
                            <h1 class="text-4xl font-bold">
                                ${plan.price}
                            </h1>
                            <span class="font-bold text-xl opacity-70">MMK</span>
                        </div>
                        <div class="w-full h-[2px] bg-white opacity-20 mt-14"></div>
                        <div class="flex flex-col gap-4 mt-10 mb-4">
                            ${plan.features
                              .map(
                                (feature) =>
                                  `
                                    <p>
                                        <i class="fa-solid fa-check p-[6px] mr-2 rounded-full bg-blue-500"></i>
                                        ${feature}
                                    </p>
                                `
                              )
                              .join('')}
                        </div>
                    </div>
                `
              )
              .join('')}
        </div>
    </div>
`

class Pricing extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(pricing)

    const section = shadow.querySelector('.pricing-section')
    const cards = shadow.querySelectorAll('.card')
    const title = shadow.querySelector('.section-title')
    const body = shadow.querySelector('.section-body')
    const cardContainer = shadow.querySelector('.card-container')

    const handleObserver = (entries) => {
      const timeline = gsap.timeline({
        defaults: { duration: 0.75, ease: 'power2.out' },
      })

      timeline
        .fromTo(
          title,
          {
            y: 150,
            opacity: 0,
          },
          { y: 0, opacity: 1 }
        )
        .fromTo(
          body,
          {
            y: 100,
            opacity: 0,
          },
          { y: 0, opacity: 1 },
          '-=0.5'
        )
        .fromTo(
          cards,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.2 },
          '-=0.5'
        )

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          title.classList.remove('hidden')
          body.classList.remove('hidden')
          cardContainer.classList.remove('hidden')
          cardContainer.classList.add('grid')
          timeline.play()
          cards.forEach((card) => {
            card.classList.add('animate__animated', 'animate__fadeInUp')
          })
          observer.unobserve(section)
        }
      })
    }

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.5,
    })

    observer.observe(section)
  }
}

customElements.define('pricing-section', Pricing)

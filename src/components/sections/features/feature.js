import { gsap } from 'gsap'

const features = [
  {
    title: 'Increased Efficiency',
    image: '/attendance.png',
    body: 'Automates repetitive and time-consuming tasks and focus on strategic initiatives.',
    link: '#',
    icon: 'fa-solid fa-arrow-up-right-from-square',
  },
  {
    title: 'Increased Accuracy',
    image: '/accuracy.png',
    body: 'Reduces the likelihood of errors and inaccuracies in HR-related data.',
    link: '#',
    icon: 'fa-solid fa-arrow-up-right-from-square',
  },
  {
    title: 'Better Employee Experience',
    image: '/employee.png',
    body: 'Provides employees with a better experience and a more positive view of the company.',
    link: '#',
    icon: 'fa-solid fa-arrow-up-right-from-square',
  },
]

const feature = document.createElement('feature')
feature.innerHTML = `
    <style>
        @import url('/style.css');
        @import url('/fontawesome-free-6.3.0-web/css/all.css');
    </style>
    <div class="feature-section w-full h-full lg:h-screen flex flex-col gap-6 md:gap-12 justify-center items-center">
        <h1
            class="hidden section-title text-4xl md:text-6xl lg:text-7xl font-bold leading-[3rem] md:leading-[4rem] tracking-wide text-center w-full md:w-[75%] lg:w-[60%]">
            Build and customize your own system
        </h1>
        <p class="hidden tracking-widest section-body w-full md:w-[75%] lg:w-[55%] text-center leading-8 text-lg font-light">
            Streamline your HR management with our all-in-one HRMS system.
            Our easy-to-use platform provides a complete solution for your HR needs,
            enabling you to manage your workforce with ease.
        </p>
        <div class="grid-container hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-14">
           ${features
             .map(
               (feature) =>
                 `
                    <div class="feature-item text-center w-full flex flex-col gap-3 justify-center items-center">
                        <div class="image w-20 h-20 mb-2">
                            <img src="${feature.image}" alt="${feature.title}" class="w-full h-full object-cover object-center">
                        </div>
                        <div class="title font-bold text-xl">${feature.title}</div>
                        <div class="body">
                            ${feature.body}
                        </div>
                        <a href="#" class="text-blue-500 flex justify-center items-center gap-2">
                            <p>Learn More</p>
                            <i class="${feature.icon}"></i>
                        </a>
                    </div>
                `
             )
             .join('')}
        </div>
    </div>
`

class Feature extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(feature)

    const section = shadow.querySelector('.feature-section')
    const title = shadow.querySelector('.section-title')
    const body = shadow.querySelector('.section-body')
    const featureItems = shadow.querySelectorAll('.feature-item')
    const gridContainer = shadow.querySelector('.grid-container')

    const handleIntersection = (entries) => {
      const timeline = gsap.timeline({
        defaults: {
          duration: 0.75,
          ease: 'power2.out',
        },
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
          featureItems,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.2 },
          '-=0.5'
        )

      entries.map((entry) => {
        if (entry.isIntersecting) {
          title.classList.remove('hidden')
          body.classList.remove('hidden')
          gridContainer.classList.add('grid')
          gridContainer.classList.remove('hidden')
          timeline.play()
          observer.unobserve(section)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    })

    observer.observe(section)
  }
}

customElements.define('feature-section', Feature)

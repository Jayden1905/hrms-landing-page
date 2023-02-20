import gsap from 'gsap'

const loader = document.createElement('loader')
loader.innerHTML = `
    <style>
        @import url('/style.css');
        .loader .blinder-container {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100vh;
            display: flex;
        }
        .loader .blinder-container .blinder {
            background: #f3f4f6;
            height: 100vh;
            flex: 1;
            transform-origin: bottom;
        }
        .loader svg {
            position: absolute;
            margin: auto;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        .drip-loader {
            animation: animateDrips 1s infinite;
        }

        @keyframes animateDrips {
            to {
            transform: translateY(100px);
            }
        }
    </style>
    <div class="loader h-screen w-full fixed inset-0 z-50">
        <div class="blinder-container">
            <div class="blinder"></div>
            <div class="blinder"></div>
            <div class="blinder"></div>
            <div class="blinder"></div>
            <div class="blinder"></div>
        </div>

        <svg viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-16 sm:w-20">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>

            <mask id="mask0_1_32" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="86" height="86">
                <circle cx="43" cy="43.1161" r="42.4299" fill="black"/>
            </mask>

            <g mask="url(#mask0_1_32)" filter="url(#goo)">
                <circle cx="43" cy="43.1161" r="40.4299" stroke="black" stroke-width="4"/>
                <circle cx="43" cy="-25.3367" r="45.8453" fill="black"/>
                <path class="drip-loader" d="M43.9141 -15.413C43.5625 -16.2057 42.4375 -16.2057 42.0859 -15.413L34.2829 2.17821C33.4045 3.67557 32.9009 5.41937 32.9009 7.28079C32.9009 12.8584 37.4224 17.3799 43 17.3799C48.5776 17.3799 53.0991 12.8584 53.0991 7.28079C53.0991 5.41928 52.5954 3.6754 51.717 2.17799L43.9141 -15.413Z" fill="black"/>
            </g>
        </svg>
    </div>
`

class Loader extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(loader)

    const svg = shadow.querySelector('svg')
    const blinders = shadow.querySelectorAll('.blinder')

    const timeline = gsap.timeline({ duration: 0.5 })
    timeline
      .to(svg, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        delay: 1.5,
        ease: 'power2.out',
      })
      .to(blinders, {
        scaleY: 0,
        duration: 0.75,
        stagger: 0.2,
        ease: 'power2.out',
      })
  }
  connectedCallback() {
    document.querySelector('body').style.overflow = 'hidden'

    setTimeout(() => {
      loader.remove()
      document.querySelector('body').style.overflow = 'auto'
    }, 3600)
  }
}

customElements.define('loader-component', Loader)

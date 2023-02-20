const brandLogos = [
  {
    name: 'Google',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Microsoft',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Facebook',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Google',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Microsoft',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Facebook',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Google',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Microsoft',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Facebook',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Google',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Microsoft',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Facebook',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Google',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Microsoft',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Facebook',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Google',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Microsoft',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Facebook',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Google',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Microsoft',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Facebook',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Google',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Microsoft',
    imgUrl: '',
    url: '',
  },
  {
    name: 'Facebook',
    imgUrl: '',
    url: '',
  },
]

const brand = document.createElement('brand')
brand.innerHTML = `
    <style>
        @import url('/style.css');
        @import url('/fontawesome-free-6.3.0-web/css/all.css');
        h1 {
            overflow: hidden;
            text-align: center;
          }

          h1:before,
          h1:after {
            background-color: black;
            content: "";
            display: inline-block;
            height: 1px;
            position: relative;
            vertical-align: middle;
            width: 50%;
            opacity: 0.5;
          }

          h1:before {
            right: 2rem;
            margin-left: -50%;
          }

          h1:after {
            left: 2rem;
            margin-right: -50%;
          }

          @media screen and (max-width: 600px) {
            h1:after {
                width: 0;
            }
            h1:before{
                width: 0;
            }
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-250px * 7));
            }
          }

          .slider .slide-track {
            animation: scroll 40s linear infinite;
            width: calc(250px * 14);
          }

          .divider {
            background: black;
          }
    </style>
    <div class="w-full h-full my-36 lg:mt-0">
        <h1 class="header text-lg">
          Businesses that trust us around the world
        </h1>
        <div class="brand-section my-10">
            <div class="slider m-auto overflow-hidden relative w-auto">
                <div class="slide-track flex">
                    ${brandLogos
                      .map(
                        (logo) =>
                          `
                            <div class="slide w-full h-full">
                                <p>${logo.name}</p>
                            </div>
                        `
                      )
                      .join('')}
                </div>
            </div>
        </div>
        <div class="divider opacity-100 border-[1px] w-full md:w-[60%] mx-auto"></div>
    </div>
`

class Brands extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(brand)
  }
}

customElements.define('brands-section', Brands)

const featureDetails = document.createElement('feature-details')
featureDetails.innerHTML = `
    <style>
        @import url('/style.css');
        @import url('/fontawesome-free-6.3.0-web/css/all.css');
        
        .swiper {
          width: 100%;
          height: 100%;
          background: red;
        }

        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .swiper-pagination-bullet {
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          font-size: 12px;
          color: #000;
          opacity: 1;
          background: rgba(0, 0, 0, 0.2);
        }

        .swiper-pagination-bullet-active {
          color: #fff;
          background: #007aff;
        }
    </style>
    <div class='w-full h-full lg:h-screen flex flex-col gap-6 md:gap-12 justify-center items-center mt-36 lg:mt-0'> 
        <h1
            class="section-title text-4xl md:text-6xl lg:text-7xl font-bold leading-[3rem] md:leading-[4rem] tracking-wide text-center w-full">
            Office hr hrms features  
        </h1>
        <p class='text-center text-lg sm:text-xl font-light leading-8 tracking-wide'>
            Transform your organization's HR operations with Office HR's all-in-one human resource solution. Set up the HRIS system on your PC once and manage day-to-day tasks from your mobile device. Enjoy exclusive features with the Better HR mobile app and experience unparalleled efficiency. Request a free trial today.
        </p>
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
    </div>
`

class FeatureDetails extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(featureDetails)
  }
}

customElements.define('details-section', FeatureDetails)

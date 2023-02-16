const features = [
  {
    title: 'Attendance Management',
    image: '/public/attendance.png',
    body: 'Analyze the employees real-time attendance status with our attendance feature.',
    link: '#',
    icon: 'fa-solid fa-arrow-up-right-from-square',
  },
  {
    title: 'Leave Management',
    image: '/public/leave.png',
    body: 'Observe the leave history of each employee in your company easily.',
    link: '#',
    icon: 'fa-solid fa-arrow-up-right-from-square',
  },
  {
    title: 'Employee Management',
    image: '/public/employee.png',
    body: "Manage and update your employees' individual profiles within minutes.",
    link: '#',
    icon: 'fa-solid fa-arrow-up-right-from-square',
  },
]

const feature = document.createElement('feature')
feature.innerHTML = `
    <style>
        @import url('../../../style.css');
        @import url('/fontawesome-free-6.3.0-web/css/all.css');
    </style>
    <div id="features" class="mt-16 sm:mt-0 mb-16 w-full h-full sm:h-screen flex flex-col gap-6 md:gap-12 justify-center items-center">
        <h1
            class="text-4xl md:text-6xl lg:text-7xl font-bold leading-[3rem] md:leading-[4rem] tracking-wide text-center w-full md:w-[75%] lg:w-[60%]">
            Build and customize your own system
        </h1>
        <p class="w-full md:w-[75%] lg:w-[55%] text-center leading-10 text-lg font-light">
            Streamline your HR management with our all-in-one HRMS system.
            Our easy-to-use platform provides a complete solution for your HR needs,
            enabling you to manage your workforce with ease.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-14">
           ${features
             .map(
               (feature) =>
                 `
                    <div class="text-center w-full flex flex-col gap-3 justify-center items-center">
                        <div class="image w-20 h-20 mb-2">
                            <img src="${feature.image}" alt="${feature.title}" class="w-full h-full object-cover object-center">
                        </div>
                        <div class="title font-bold text-xl">${feature.title}</div>
                        <div class="body font-light">
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
  }
}

customElements.define('feature-section', Feature)

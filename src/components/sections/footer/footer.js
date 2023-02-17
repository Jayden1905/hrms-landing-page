import { menuList } from '../../menu/menu.js'

const footer = document.createElement('footer')
footer.innerHTML = `
    <style>
        @import url('/style.css');
        @import url('/fontawesome-free-6.3.0-web/css/all.css');
    </style>
    <footer class="p-4 text-lg bg-black rounded-lg text-center shadow md:flex md:items-center md:justify-between md:p-6">
        <span class="text-gray-500 text-center dark:text-gray-400">
            © 2023
            <a href="#" class="hover:underline">
                Office HR
            </a>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center justify-center mt-3 text-gray-500 dark:text-gray-400 sm:mt-0">
            ${menuList
              .map(
                (item) =>
                  `
                    <li>
                        <a href="#${item.link}" class="mr-4 hover:underline md:mr-6 ">${item.name}</a>
                    </li>
                `
              )
              .join('')}
        </ul>
    </footer>

`

class Footer extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(footer)
  }
}

customElements.define('footer-section', Footer)

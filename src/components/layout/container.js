export const appContainer = document.createElement('rootLayout')
appContainer.innerHTML = `
    <style>
        @import url('style.css');
    </style>
    <div class="max-w-7xl mx-auto pt-4 px-4">
        <slot />
    </div>
`

class Rootlayout extends HTMLDivElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(appContainer)
  }
}

customElements.define('app-container', Rootlayout, { extends: 'div' })

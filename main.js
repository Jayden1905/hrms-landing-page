import './src/index'
import './style.css'

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual'
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0)
  }
}

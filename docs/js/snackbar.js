/**Snackbar JS**/

// Snackbar button selector id
const leading = document.querySelector('#leading')
const basline = document.querySelector('#basline')
const stacked = document.querySelector('#stacked')

// Snackbar div selector id
const leadingClass = document.querySelector('#leadingClass')
const baslineClass = document.querySelector('#baslineClass')
const stackedClass = document.querySelector('#stackedClass')

// Close button selector id
const leadingClose = document.querySelector('#leadingClose')
const baslineClose = document.querySelector('#baslineClose')
const stackedClose = document.querySelector('#stackedClose')

// Show snackbar EventListener
leading.addEventListener('click', showLeading)
basline.addEventListener('click', showBasline)
stacked.addEventListener('click', showStacked)

// Close snackbar EventListener
leadingClose.addEventListener('click', closeLeading)
baslineClose.addEventListener('click', closeBasline)
stackedClose.addEventListener('click', closeStacked)

// Show clicked snackbar
function showLeading() {
  leadingClass.classList.remove('hidden')
  setTimeout(() => {
    leadingClass.classList.add('hidden')
  }, 3000)
}
function showBasline() {
  baslineClass.classList.remove('hidden')
  setTimeout(() => {
    baslineClass.classList.add('hidden')
  }, 3000)
}
function showStacked() {
  stackedClass.classList.remove('hidden')
  setTimeout(() => {
    stackedClass.classList.add('hidden')
  }, 3000)
}

// Close clicked snackbar
function closeLeading(e) {
  e.preventDefault()
  leadingClose.parentNode.parentNode.parentNode.classList.add('hidden')
}
function closeBasline(e) {
  e.preventDefault()
  baslineClose.parentNode.parentNode.parentNode.classList.add('hidden')
}
function closeStacked(e) {
  e.preventDefault()
  stackedClose.parentNode.parentNode.parentNode.classList.add('hidden')
}

/**Chips JS**/

const chipsValue = document.querySelector('#chipsValue')
const chipsBody = document.querySelector('#chipsBody')
const stackedChipsValue = document.querySelector('#stackedChipsValue')
const stackedChipsBody = document.querySelector('#stackedChipsBody')

chipsValue.addEventListener('keypress', addChips)
stackedChipsValue.addEventListener('keypress', addStackedChips)
chipsBody.addEventListener('click', removeChips)
stackedChipsBody.addEventListener('click', removeChips)

function addChips(e) {
  if (e.key === 'Enter') {
    if (chipsValue.value === '') {
      chipsValue.value = ''
    } else {
      const element = document.createElement('div')
      element.classList.add('chips-list')
      element.innerHTML = `${chipsValue.value}<i class="fas fa-times chips-delete-icon"></i>`
      chipsBody.insertBefore(element, chipsBody.lastElementChild)
      chipsValue.value = ''
    }
  }
}

function addStackedChips(e) {
  if (e.key === 'Enter') {
    if (stackedChipsValue.value === '') {
      stackedChipsValue.value = ''
    } else {
      const element = document.createElement('div')
      element.classList.add('chips-list')
      element.innerHTML = `${stackedChipsValue.value}<i class="fas fa-times chips-delete-icon"></i>`
      stackedChipsBody.insertBefore(element, stackedChipsBody.lastElementChild)
      stackedChipsValue.value = ''
    }
  }
}

function removeChips(e) {
  if (e.target.classList.contains('chips-delete-icon')) {
    e.target.parentElement.remove()
  }
}

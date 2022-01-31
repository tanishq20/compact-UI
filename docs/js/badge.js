/**Badge JS**/

const badgeBtn = document.querySelector('#badgeBtn')
const hideBadge = document.querySelector('#hideBadge')

badgeBtn.addEventListener('click', checkBadge)

function checkBadge() {
  if (hideBadge.classList.contains('badge-content')) {
    hideBadge.classList.remove('badge-content', 'position-absolute', 'sm-badge')
    hideBadge.classList.add('hidden')
  } else {
    hideBadge.classList.remove('hidden')
    hideBadge.classList.add('badge-content', 'position-absolute', 'sm-badge')
  }
}

/**Badge JS**/

const badgeBtn = document.querySelector('#badgeBtn')

badgeBtn.addEventListener('click', checkBadge)

function checkBadge() {
  badgeBtn.childNodes[1].classList.toggle('hidden')
}

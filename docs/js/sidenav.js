const openSidenav = document.querySelector('#open-sidenav')
const closeSidenav = document.querySelector('#close-sidenav')
const toggleSidenav = document.querySelector('#toggle-sidenav')

openSidenav.addEventListener('click', openNav)
closeSidenav.addEventListener('click', closeNav)

function openNav() {
  toggleSidenav.style.width = '250px'
}

function closeNav() {
  toggleSidenav.style.width = '0'
}

const menu = document.querySelector('.menu')
const navopen = document.querySelector('.hamburger')
const navclose = document.querySelector('.top-close')
const navbar = document.querySelector('.nav')



const navleft = menu.getBoundingClientRect().left

navopen.addEventListener('click', () => {
    if (navleft < 0) {
        menu.classList.add('show')
        document.body.classList.add('show')
        navbar.classList.add('show')
    }
})

navclose.addEventListener('click', () => {
    if (navleft < 0) {
        menu.classList.remove('show')
        document.body.classList.remove('show')
        navbar.classList.remove('show')
    }
})
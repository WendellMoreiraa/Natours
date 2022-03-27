const open = document.querySelector('.open').addEventListener('click', function() {
    var menu = document.querySelector('.menu__container')
    menu.style.display = 'flex'
    var body = document.querySelector('body')
    body.style.overflow = 'hidden'
    body.style.margin = '0'
    body.style.padding = '0'
})

const close = document.querySelector('.close').addEventListener('click', function() {
    var menu = document.querySelector('.menu__container')
    menu.style.display = 'none'
    var body = document.querySelector('body')
    body.style.overflow = 'visible'
    body.style.padding = '2rem'
   
})



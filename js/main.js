let d = document
let btn1 = d.querySelector('.btn')
let modalka = d.querySelector('.modalka')
let cross = d.querySelector('.cross')
let btn2 = d.querySelector('.btn2')
let a = d.querySelector('a')
let slide1 = d.querySelector('.slide1')
let slide2 = d.querySelector('.slide2')
let slide3 = d.querySelector('.slide3')
let burger = d.querySelector('.burger_menu')
let menu = d.querySelector('.menu_burger')
let ul = d.querySelector('.ul')
let menuOfBurger = d.querySelector('.burger_menu_actived')
let over = d.querySelector('.over')

// 1 function
btn1.onclick = () => {
    modalka.style.display = 'block'
    d.body.style.overflow = 'hidden'
}
function func1 (a) {
    a.onclick = () => {
        modalka.style.display = 'none'
        d.body.style.overflow = 'visible'
    }
}
func1(btn2)
func1(cross)


// 2 function
d.body.addEventListener('keydown', (event) => {
    if(event.keyCode == 27) {
        modalka.style.display = 'none'
        d.body.style.overflow = 'auto'
    }else {
        console.log(event.key);
    }
})

// слайдер

slide3.onclick = () => {
    slide2.classList.add('op0')
    slide1.classList.add('slide1')
    slide3.classList.remove('slide3')
}
slide2.onclick = () => {
    slide2.classList.remove('op0')
    slide1.classList.add('slide1')
    slide3.classList.add('slide3')
}
slide1.onclick = () => {
    slide2.classList.add('op0')
    slide1.classList.remove('slide1')
    slide3.classList.add('slide3')
}

let first = burger.onclick = () => {
    burger.classList.toggle('active')
    menuOfBurger.classList.toggle('active2')
    over.classList.toggle('active2')
}
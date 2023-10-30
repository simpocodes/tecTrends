//?=================== showingthe nav ===============
$('.menu').on({
    click: menuclick => {
        $('nav').addClass('d-flex')
    }
})
//------------------------ showingthe nav



//?=================== closing the nav ===============
$('nav ul .close').click(e => {
    $('nav').removeClass('d-flex')
})
//---------------- End of closing the nav



//?=================== gsap animations ===============
gsap.from('.logo a', { color: 'blue' })
const timeline = gsap.timeline({ defaults: { duration: 1 } })
timeline
    .from('ul li a', { opacity: 0, stagger: .3 })

gsap.from('.menu', { opacity: 0, delay: .3 })
gsap.from('header', { opacity: 0, duration: 2, delay: .3 })
gsap.from('header .header-empty', { scale: 0, duration: 4, delay: .3 })
gsap.from('.header-text h1', { x: -50, duration: 1, delay: .6 })
gsap.from('.header-text p', { x: 50, duration: 1, delay: .6 })
gsap.from('.header-img', { opacity: 0, scale: .7, duration: 1, delay: 1.5, ease: 'elastic' })
//---------------- End of gsap animations


//*=========== on window scroll
$(window).on({
    scroll: sc => {
        if ($(document).scrollTop() > 80) {
            $('#navigation').fadeIn()
            $('#navigation').addClass('sticky')

        } else if ($(document).scrollTop() == 0) {
            $('#navigation').removeClass('sticky')

        }
    }
})

let productZoom = document.querySelectorAll('.product-zoom');
let empty = document.querySelector('.empty');
let emptyImage;
productZoom.forEach(e => {
    e.addEventListener('click', c => {
        let origin = c.target.parentElement.parentElement;
        let imgZoom = c.target.parentElement.parentElement.children[0]
        let newEle = imgZoom;
        empty.classList.remove('d-none')
        let zoomedImgSrc = imgZoom.getAttribute('src')

        let newImg = document.createElement('img')
        newImg.setAttribute('src', zoomedImgSrc)
        empty.appendChild(newImg)
        emptyImage = newImg;
    })
})

//---------------- End of on window scroll

//*=========== empty div
$('.empty .close').on({
    click: cc => {
        cc.preventDefault();
        emptyImage.remove()
        empty.classList.add('d-none')
    }
})
//---------------- End of empty div

// console.log($('.next-blog'))
// $('.next-blog').forEach(e => {
//     console.log(e)
// })
// Array.from($('.next-blog')).forEach(e => {
//     console.log(e)
// })
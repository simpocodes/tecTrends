//?=================== showingthe nav ===============

$('.menu').on({
    click: menuclick => {
        if ($(document).innerWidth() > 424) {
            $('nav').addClass('right-0')
        } else if ($(document).innerWidth() < 425) {
            $('nav').addClass('top-0')
        }

    }
})

//?=================== closing the nav ===============
$('.close').click(e => {
    if ($(document).innerWidth() > 425.9) {
        $('nav').removeClass('right-0')
    } else if ($(document).innerWidth() < 425) {
        $('nav').removeClass('top-0')


    }

})


//?=================== gsap animations ===============
gsap.from('.logo a', { color: 'blue' })
const timeline = gsap.timeline({ defaults: { duration: 1 } })
timeline
    .from('ul li a', { opacity: 0, stagger: .3 })
    // .from('.header-articles ', { opacity: 0, delay: 3 })
    .from('.article ', { opacity: 0, stagger: .2 })

// .from('.header-text h1', { x: -50, opacity: 0 })
// .from('.header-text p', { x: 50, opacity: 0 })

// .from('header .header-empty', { scale: 0 })

// .from('.menu', { opacity: 0, stagger: .5 })

gsap.from('.menu', { opacity: 0, delay: .3 })
gsap.from('header', { opacity: 0, duration: 2, delay: .3 })
gsap.from('header .header-empty', { scale: 0, duration: 4, delay: .3 })
gsap.from('.header-text h1', { x: -50, duration: 1, delay: .6 })
gsap.from('.header-text p', { x: 50, duration: 1, delay: .6 })
gsap.from('.header-img', { opacity: 0, scale: .7, duration: 1, delay: 1.5, ease: 'elastic' })



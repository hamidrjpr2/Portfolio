let cards = document.querySelectorAll('.jsSelect')
let secs = document.querySelectorAll('section')
let navs = document.querySelectorAll('header > div > div > ul > li');
let mainHeader = document.getElementById('mainHeader')
let secondHeader = document.getElementById('secondHeader')
let bars = document.getElementById('bars')
let bars2 = document.getElementById('bars2')
let lists = document.querySelectorAll('.lists')
let navLinks = document.querySelectorAll('.navLinks')

// console.log(lists[0].)
// console.log(navs)
// console.log(navs)

// navs.forEach(nav => {
//     navChildren = nav.children[0]
//     console.log(navChildren)
// })

navLinks.forEach(navLink => (
    navLink.addEventListener('click', ()=> {
        lists.forEach(list => {
            list.classList.remove('h-[100vh]')
        })
    })
))

bars.addEventListener('click', () => {
    bars.classList.add('barsAnimation')
    lists[0].classList.toggle('h-[100vh]')
    // lists[0].classList.toggle('h-0')
    // lists.forEach(list => {
    //     list.classList.toggle('h-[100vh]')
    // })
});
document.addEventListener('click', (a) => {
    if (a.target != bars) {
        bars.classList.remove('barsAnimation')
        lists[0].classList.remove('h-[100vh]')
    }
})
document.addEventListener('click', (a) => {
    if (a.target != bars2) {
        bars2.classList.remove('barsAnimation')
        lists[1].classList.remove('h-[100vh]')
    }
})

bars2.addEventListener('click', () => {
    bars2.classList.add('barsAnimation')
    lists[1].classList.toggle('h-[100vh]')
    // lists[1].classList.toggle('h-0')
    // lists.forEach(list => {
    //     list.classList.toggle('h-[100vh]')
    // })
});

let observer = new IntersectionObserver(enteries => {
    console.log(enteries)
    enteries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting){observer.unobserve(entry.target)}
    })
}, {
    threshold: .9
}
)

let oberver2 = new IntersectionObserver(enteries => {
    console.log(enteries)
    enteries.forEach(entry => {
        navs.forEach(nav => {
            navChildren = nav.children[0].getAttribute('data-href')
            if (navChildren == entry.target.id) {
                nav.classList.toggle('jspart2', entry.isIntersecting)
            }
            // console.log(navChildren)
        })
    })
}, {
    threshold: .5,
    rootMargin: '-20px'
} 
)

let observerHeader = new IntersectionObserver (enteries => {
    if (!enteries[0].isIntersecting) {
        secondHeader.style.transform = "translateY(-50%)"
    }
    else {
        secondHeader.style.transform = "translateY(-200%)"
    }
})

observerHeader.observe(mainHeader)

secs.forEach(sec => {
    oberver2.observe(sec)
})

cards.forEach(card => {
    observer.observe(card)
})
let top_links = document.querySelector('.top_links')
let hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', ()=>{
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active')
        top_links.classList.remove('active')
    } else {
        hamburger.classList.add('active')
        top_links.classList.add('active')
    }

})
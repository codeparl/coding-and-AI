let top_links = document.querySelector('.top_links')
let hamburger = document.querySelector('.hamburger')
let searchBar = document.querySelector('.search_bar')
let searchlmage = document.querySelector('.search_image')


hamburger.addEventListener('click', ()=>{
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active')
        top_links.classList.remove('active')
    } else {
        hamburger.classList.add('active')
        top_links.classList.add('active')
    }
    
})

searchBar.addEventListener('click', ()=>{

    if (searchBar.classList.contains('active')) {
        searchBar.classList.remove('active')
        searchlmage.classList.remove('active')
    } else {
        searchBar.classList.add('active')
        searchlmage.classList.add('active')
    }
})

searchlmage.addEventListener('click', ()=>{
    if (searchBar.classList.contains('active')) {
        searchBar.classList.remove('active')
        searchlmage.classList.remove('active')
    } else {
        searchBar.classList.add('active')
    }
})
const navbar = document.querySelector('.navbar-nav')
const hamburger = document.getElementById('hamburger') 
const background = document.getElementById('background')
const btnIG = document.getElementById('btn-ig')
hamburger.onclick = () => {
    navbar.classList.toggle('active')
}

addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active')
    }
})

btnIG.addEventListener('click', () =>{
    const url = 'https://www.instagram.com/fertanindi/profile'
    window.location.href = url, '_blank'
})


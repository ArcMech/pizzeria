const navBar = document.querySelector(".wrapper");
const topOfWindow = navBar.offsetTop;

function stickyNav() {
    if (window.scrollY > topOfWindow) {
        navBar.classList.add('fixed');
    } else {
        navBar.classList.remove('fixed');
    }
}

window.addEventListener('scroll', stickyNav)
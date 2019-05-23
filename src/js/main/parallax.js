
window.addEventListener('scroll', function (e) {
    const background = document.querySelector(".parallax");
    var scrolled = window.pageYOffset;
    background.style.backgroundPositionY = (scrolled * 0.5) + 'px';
});
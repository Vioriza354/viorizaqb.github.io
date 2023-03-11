// Navbar On Scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar-fixed').style.top = '0';
    } else {
        document.getElementById('navbar-fixed').style.top = '-80px';
    }

    if (window.pageYOffset == 0) {
        document.getElementById('navbar-fixed').style.zIndex = '1'
        document.getElementById('navbar-fixed').classList.remove('bg-white');
        document.getElementById('btnTop').style.opacity = '0';
    } else {
        document.getElementById('navbar-fixed').style.zIndex = '1030';
        document.getElementById('navbar-fixed').classList.add('bg-white');
        document.getElementById('btnTop').style.opacity = '1';
    }
    prevScrollpos = currentScrollPos;
}


// Button Scroll To Top
function topBtn() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Stop Preloader
var loader = document.querySelector('#preload')
window.addEventListener('load', function() {
    loader.style.display = 'none';
    document.documentElement.scrollTop = 0;
})

AOS.init();
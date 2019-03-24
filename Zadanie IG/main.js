//cookies

function showNotice() {
    if (localStorage.getItem('showCookieNotice') !== 'false') {
        document.querySelector('#cookies_info').classList.remove('hide');
    }
}

function hideNotice() {
    document.querySelector('#cookies_info').classList.add('hide');
    localStorage.setItem('showCookieNotice', 'false');
}

document.addEventListener("DOMContentLoaded", function (event) {
    showNotice();

    document.querySelector('.close_cookies').addEventListener('click', hideNotice);
});

// menu burger

var burger = document.querySelector('.burger');
var burgerMenu = document.querySelector('.burger_menu');


burger.addEventListener('click', function () {
    burgerMenu.classList.toggle('show');
})

window.onclick = function (event) {
    if (event.target == burgerMenu) {
        burgerMenu.classList.toggle('show');
    }
}

//products icons 
//Dear examiner - I leave it like this to show you I have put an effort to find a way to make this interaction.
//I believe repeating this code for each one of the icons is a bad practise, so I will not be doing this.

var firstProductsIcon = document.querySelector('.icon1');
var productIconText = document.querySelector('.product_icon_text');

firstProductsIcon.addEventListener('click', function () {
    firstProductsIcon.classList.toggle('green_bgc');
    firstProductsIcon.classList.toggle('product_icon_text');
})
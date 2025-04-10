// Slideshow Apartment Images
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
    // var overlay = document.getElementsByClassName("overlay");
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("hero-img");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("sec-img", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " hero-img";
}

// open and close popup menu
const subscribeForm = document.getElementById("subscribe-form");
const formOverlay = document.querySelector("form-overlay");
const closeBtn = document.getElementsByClassName("close_btn");
const subscribeBtn = document.getElementsByClassName("divBtn");

subscribeBtn.onclick = function () {
    if (subscribeForm.classList.contains("active")) {
        subscribeForm.classList.remove("active");
    } else {
        subscribeForm.classList.add('active');
    }
}
closeBtn.onclick = function () {
    if (subscribeForm.classList.contains("active")) {
        subscribeForm.classList.remove("active");
    }
}
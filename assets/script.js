// Slideshow Apartment Images
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
    var overlay = document.getElementsByClassName("overlay");
    if (slideIndex = 0) {
        overlay[0].style.display = "none";
    }
    else if (slideIndex = 1) {
        overlay[1].style.display = "none";
    }
    else if (slideIndex = 2) {
        overlay[2].style.display = "none";
    }
    else if (slideIndex = 3) {
        overlay[3].style.display = "none";
    }
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
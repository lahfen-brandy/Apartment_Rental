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
const mobileSubscribeForm = document.getElementById("mobile_subscribe-form");
const subscribeForm = document.getElementById("subscribe-form");
const formOverlay = document.getElementById("form-overlay");
const closeBtn = document.getElementById("close-btn");
const closeBtn1 = document.getElementById("close-btn1");
const subscribeBtn = document.getElementById("divBtn");
const subscribeBtn1 = document.getElementById("divBtn0");
const subscribeBtn2 = document.getElementById("divBtn1");
const mobileOverlay = document.getElementById("sideNav_form-overlay");

subscribeBtn.onclick = function () {
    if (formOverlay.classList.contains("active")) {
        formOverlay.classList.remove("active");
    } else {
        formOverlay.classList.add('active');
    }
    if (subscribeForm.classList.contains("active")) {
        subscribeForm.classList.remove("active");
    } else {
        subscribeForm.classList.add('active');

    }
}
subscribeBtn1.onclick = function () {
    if (formOverlay.classList.contains("active")) {
        formOverlay.classList.remove("active");
    } else {
        formOverlay.classList.add('active');
    }
    if (mobileSubscribeForm.classList.contains("active")) {
        mobileSubscribeForm.classList.remove("active");
    } else {
        mobileSubscribeForm.classList.add('active');
    }
}
closeBtn1.onclick = function () {
    if (formOverlay.classList.contains("active")) {
        formOverlay.classList.remove("active");
    } else {
        formOverlay.classList.add('active');
    }
    if (mobileSubscribeForm.classList.contains("active")) {
        mobileSubscribeForm.classList.remove("active");
    } else {
        mobileSubscribeForm.classList.add('active');
    }
}
subscribeBtn2.onclick = function () {
    if (formOverlay.classList.contains("active")) {
        formOverlay.classList.remove("active");
    } else {
        formOverlay.classList.add('active');
    }
    if (subscribeForm.classList.contains("active")) {
        subscribeForm.classList.remove("active");
    } else {
        subscribeForm.classList.add('active');
    }
}

closeBtn.onclick = function () {
    if (formOverlay.classList.contains("active")) {
        formOverlay.classList.remove("active");
    } else {
        formOverlay.classList.add('active');
    }
    if (subscribeForm.classList.contains("active")) {
        subscribeForm.classList.remove("active");
    }
    else {
        subscribeForm.classList.add('active');
    }
}
mobileOverlay.onclick = function () {
    if (SideNav.classList.contains("active")) {
        SideNav.classList.remove("active");
        menu.src = "assets/images/menu.png";
    } else {
        SideNav.classList.add('active');
        menu.src = "assets/images/close.png";
    }
    if (mobileOverlay.classList.contains("active")) {
        mobileOverlay.classList.remove("active");
    } else {
        mobileOverlay.classList.add('active');
    }
}
//side form on mobile view
const menuBtn = document.getElementById("menuBtn");
const SideNav = document.getElementById("sideNav");
const menu = document.getElementById("menu");
const side_nav_list_onclick = document.getElementsByClassName("side_nav_list");
const onclik = document.getElementsByClassName("side_nav_list a");
menu.onclick = function () {
    if (SideNav.classList.contains("active")) {
        SideNav.classList.remove("active");
        menu.src = "assets/images/menu.png";
    } else {
        SideNav.classList.add('active');
        menu.src = "assets/images/close.png";
    }
    if (mobileOverlay.classList.contains("active")) {
        mobileOverlay.classList.remove("active");
    } else {
        mobileOverlay.classList.add('active');
    }
}

// document.addEventListener('scroll', () => {
//     const nav = document.querySelector('nav')
//     if (window.scrollY > 0) {
//         nav.classList.add('scrolled');
//     }
//     else {
//         nav.classList.remove('scrolled')
//     }
// })
side_nav_list_onclick.onclick = function () {
    if (onclik.classList.contains("active")) {
        SideNav.classList.remove("active");
    }
    else {
        SideNav.classList.add('active');
    }
} 
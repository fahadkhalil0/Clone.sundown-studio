const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation(){

    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter", function() {
        fixed.style.display = "block";
});

    elemC.addEventListener("mouseleave", function() {
    fixed.style.display = "none";
});

    // by doing querySelectorAll
    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(e) {
        e.addEventListener("mouseenter", function() {
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url("${image}")`;
    });
});
}
// Swiper.js
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });

// // Responsive logics start
function menuAnime(){
    var menu = document.querySelector("#navh3");
var full = document.querySelector("#full-scr");
var Img = document.querySelector("nav img");
var flag = 0;
menu.addEventListener("click", function() {

    if(flag == 0){
        full.style.top = 0;
        Img.style.opacity = 0;
        flag = 1;
    } else{
        full.style.top = "-100%";
        Img.style.opacity = 1;
        flag = 0;
    }
})}
// Loader Animation
function loader(){
    var loader = document.querySelector("#loader");
    setTimeout(function(){
    loader.style.top = "-100%";
},4200);
}

menuAnime();
page4Animation();
loader();
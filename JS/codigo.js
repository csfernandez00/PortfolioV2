const btnMenu = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav")
const menuBtn = document.querySelector(".btn-menu")


btnMenu.addEventListener("click", ()=>{
    mobileNav.classList.toggle("active");
})

const mobileNavBtn1 = document.querySelector(".mobile-nav-btn1")
const mobileNavBtn2 = document.querySelector(".mobile-nav-btn2")
const mobileNavBtn3 = document.querySelector(".mobile-nav-btn3")
const mobileNavBtn4 = document.querySelector(".mobile-nav-btn4")
const mobileNavBtn5 = document.querySelector(".mobile-nav-btn5")

mobileNavBtn1.addEventListener("click",()=>{
    mobileNav.classList.remove("active")
});
mobileNavBtn2.addEventListener("click",()=>{
    mobileNav.classList.remove("active")
});
mobileNavBtn3.addEventListener("click",()=>{
    mobileNav.classList.remove("active")
});
mobileNavBtn4.addEventListener("click",()=>{
    mobileNav.classList.remove("active")
});
mobileNavBtn5.addEventListener("click",()=>{
    mobileNav.classList.remove("active")
});

const btnCloseNav = document.getElementById("close-mobile-nav");

btnCloseNav.addEventListener("click", ()=>{
    mobileNav.classList.remove("active")
})

const header = document.querySelector(".header")

window.onscroll = ()=>{
    if (window.scrollY >= 1){
        header.classList.add("top");
        header.classList.remove("bottom");
    }
    else{
        header.classList.remove("top");
        header.classList.add("bottom");
    }
}

// Data AOS media query

let imgAboutFirst = document.querySelector(".img-1")
let imgAboutSecond = document.querySelector(".img-2")
let imgAboutThird= document.querySelector(".img-3")

window.onresize = ()=>{
    if(window.screen.width < 844){
        imgAboutFirst.removeAttribute("data-aos-anchor-placement")
        imgAboutSecond.removeAttribute("data-aos-anchor-placement")
        imgAboutThird.removeAttribute("data-aos-anchor-placement")
    }
    else{
        imgAboutFirst.setAttribute("data-aos-anchor-placement", "bottom-bottom")
        imgAboutSecond.setAttribute("data-aos-anchor-placement", "top-center")
        imgAboutThird.setAttribute("data-aos-anchor-placement", "center-center")
    }
}

// Svg Drawing while scroll

var path = document.querySelector(".path-draw")
var pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength + " " + pathLength
path.style.strokeDashoffset = pathLength
path.getBoundingClientRect()
window.addEventListener("scroll", function(e){
    var scrollPercentage = (document.documentElement.scrollTop + this.document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    var drawLength = pathLength * 2.1 * scrollPercentage
    path.style.strokeDashoffset = pathLength - drawLength
    if(scrollPercentage >= .99) {
        path.style.strokeDasharray = "none";
    }else{
        path.style.strokeDasharray = pathLength + " " + pathLength ;
    }
})











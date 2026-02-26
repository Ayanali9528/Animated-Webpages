gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: document.querySelector(".main").style.transform !== undefined
        ? "transform"
        : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

let box = document.querySelectorAll("#box");
box.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        let img = elem.getAttribute("data-image");
        cirle2.style.width = "20vw";
        cirle2.style.height = "20vw";
        cirle2.style.borderRadius = "0%";
        cirle2.style.mixBlendMode = "normal";
        cirle2.style.backgroundImage = `url(${img})`;
    })
    elem.addEventListener("mouseleave", function () {
        cirle2.style.mixBlendMode = "difference";
        cirle2.style.width = "20px";
        cirle2.style.height = "20px";
        cirle2.style.borderRadius = "50%";
        cirle2.style.backgroundImage = "none";
    })

});



let main = document.querySelector(".main");
let cirle2 = document.getElementById("cirle2");
document.addEventListener("mousemove", (dets) => {
    const scrollY = locoScroll.scroll.instance.scroll.y;
    cirle2.style.left = dets.x + 5 + "px";
    cirle2.style.top = (dets.y + 5 + scrollY) + "px";
});



let anim = gsap.timeline({
    scrollTrigger: {
        trigger: "#text-part1 h1",
        scroller: ".main",
        start: "top 20%",
        end: "top 0%",
        scrub: 2,
    }
})

anim.to("#text-part1 h1", {
    x: -100,

}, "anim")

anim.to("#text-part1 h2", {
    x: 100,

}, "anim");

anim.to("#text-part1 video", {
    width: "100vw",
    height: "90vh",
}, "anim");
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -105%",
        end: "top -110%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -440%",
        end: "top -460%",
        scrub: 3
    }
})

tl3.to(".main", {
    backgroundColor: "#0f0d0d",
})

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3 h1",
        scroller: ".main",
        // markers:true,
        start: "top -320%",
        end: "top -480%",
        scrub: 3
    }
})

tl4.to("#part3-left", {
    x: -200,
    delay: 0.2,
    duration: 0.5,
    opacity: 0.8,
})

tl4.to("#part4-right", {
    x: 200,
    delay: 0.2,
    duration: 0.5,
    opacity: 0.8,
})


let home = document.querySelector("#home");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");
let work = document.querySelector("#work");
let h4 = document.querySelectorAll("#nav-part2 h4");
let purple = document.querySelector("#purpule");
let purpleh1 = document.querySelector("#purpule h1");
let purpleh2 = document.querySelector("#purpule h2")
let purpleh3 = document.querySelector("#purpule h3")

work.addEventListener("mouseenter", function () {
    purpleh1.style.display = "initial";
    purple.style.display = "initial";
    purple.style.opacity = "1";
})

work.addEventListener("mouseleave", function () {
    purpleh1.style.display = "none";
    purple.style.display = "none";
    purple.style.opacity = "0";
})

contact.addEventListener("mouseenter", function () {
    purpleh3.style.display = "initial";
    purple.style.display = "initial";
    purple.style.opacity = "1";
})

contact.addEventListener("mouseleave", function () {
    purpleh3.style.display = "none";
    purple.style.display = "none";
    purple.style.opacity = "0";
})

about.addEventListener("mouseenter", function () {
    purpleh2.style.display = "initial";
    purple.style.display = "initial";
    purple.style.opacity = "1";
})

about.addEventListener("mouseleave", function () {
    purpleh2.style.display = "none";
    purple.style.display = "none";
    purple.style.opacity = "0";
})



let intro = document.querySelector("#part3-intro");
let img = document.querySelector("#part3-left img");
img.addEventListener("click", function () {
    img.style.transition = "all 0.3s ease-in-out";
    img.style.transform = "translateX(-30px)";
    intro.style.display = "flex";
    intro.style.left = "20vw";
    intro.style.transition = "all 0.3s ease-in-out";
    intro.style.padding = "30px";
    intro.style.borderRadius = "20px";
    intro.style.backgroundColor = "black";
    intro.style.color = "white";
    intro.style.fontFamily = "sans-serif";



});


img.addEventListener("dblclick", function () {
    img.style.transition = "all 0.3s ease-in-out";
    img.style.transform = "translateX(-0px)";
    img.style.right = "0";
    img.style.transition = "all 0.3s ease-in-out";
    intro.style.display = "none";
    intro.style.left = "0";
});


let intro2 = document.querySelector("#part4-intro");
let img2 = document.querySelector("#part4-right img");
img2.addEventListener("click", function () {
    img2.style.transition = "all 0.3s ease-in-out";
    img2.style.transform = "translateX(-30px)";
    intro2.style.display = "flex";
    intro2.style.left = "20vw";
    intro2.style.transition = "all 0.3s ease-in-out";
    intro2.style.padding = "30px";
    intro2.style.borderRadius = "20px";
    intro2.style.backgroundColor = "black";
    intro2.style.color = "white";
    intro2.style.fontFamily = "sans-serif";
});

img2.addEventListener("dblclick", function () {
    img2.style.right = "0";
    img2.style.transition = "all 0.3s ease-in-out";
    img2.style.transform = "translateX(-0px)";
    intro2.style.display = "none";
    intro2.style.left = "0";
});
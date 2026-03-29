//menu
let menu = document.querySelector(".menu-icon");
let navbar= document.querySelector(".navbar");

menu.onclick=()=>{
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};

// Close menu on scroll
window.onscroll=()=> {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
};

// ScrollReveal
const animate =ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:'1700',
    delay:'110',
});

animate.reveal('.home-text',{origin:"left"});
animate.reveal('.home-img',{origin:"bottom"});
animate.reveal('.heading,.newsletter h2',{origin:"top"})
animate.reveal('header,.feature-box,.feature-menu-box,.item-box,.m-item-box,.t-box,.newsletter',{interval:50});
document.querySelector('.menu-btn').addEventListener('click',() =>{
document.querySelector('.nav-menus').classList.toggle('show')
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-cards',{delay:500});
ScrollReveal().reveal(' .cards-banner-one',{delay:500});
ScrollReveal().reveal('.cards-banner-two',{delay:500});
ScrollReveal().reveal('.social',{delay:500});
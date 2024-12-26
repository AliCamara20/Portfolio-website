let hamMenu = document.querySelector(".hamMenu");
let navbar = document.querySelector(".nav");


hamMenu.addEventListener('click', function(){
    navbar.classList.toggle('nav-visible');
})

console.log(window.screen.width);
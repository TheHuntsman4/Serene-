const theBody = document.querySelector('body');
const openNav = document.querySelector('.menu-bar button');
const closeNav = document.querySelector('.close-nav button');
const Navbar = document.querySelector('.navbar');

// function bodyScroll(){
//     if(Navbar.classList.contains('show')){
//         theBody.classList.add('hide-scroll');
//     }
//     else if(theBody.classList.contains('hide-scroll')){
//         theBody.classList.remove('hide-scroll');
//     }
// }

function showHide(){
    Navbar.classList.toggle('show');
    // bodyScroll();
}

openNav.onclick = showHide;
closeNav.onclick = showHide;
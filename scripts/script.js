// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}
const music = new Audio("../assets/sounds/rain.mp3"); // Replace with your actual music file

  const toggleMusicButton = document.getElementById("toggleMusicButton");
  let isMusicPlaying = false;

  toggleMusicButton.addEventListener("click", () => {
    if (isMusicPlaying) {
      music.pause();
      isMusicPlaying = false;
      toggleMusicButton.textContent = "Play Music";
    } else {
      music.play();
      isMusicPlaying = true;
      toggleMusicButton.textContent = "Pause Music";
    }
  });
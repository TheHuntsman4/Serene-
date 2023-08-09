const song = document.querySelector(".song");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");
// Sounds
const sounds = document.querySelectorAll(".sound-picker button");
// Time Display
const timeDisplay = document.querySelector(".time-display");
const outlineLength = outline.getTotalLength();
// Duration
const timeSelect = document.querySelectorAll(".time-select button");
let fakeDuration = 600; // Default duration in seconds

outline.style.strokeDashoffset = outlineLength;
outline.style.strokeDasharray = outlineLength;
timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
  fakeDuration % 60
).toString().padStart(2, '0')}`;

sounds.forEach((sound) => {
  sound.addEventListener("click", function () {
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    checkPlaying(song);
  });
});

play.addEventListener("click", function () {
  checkPlaying(song);
});

replay.addEventListener("click", function () {
  restartSong(song);
});

timeSelect.forEach((option) => {
  option.addEventListener("click", function () {
    fakeDuration = parseFloat(this.getAttribute("data-time"));
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    ).toString().padStart(2, '0')}`;

    if (fakeDuration === 120) { // 2 minutes in seconds
      song.currentTime = 0; // Reset song to the beginning
      song.pause(); // Pause the song
      video.pause(); // Pause the video
      play.src = "../assets/svg/play.svg"; // Change play button icon
    }
  });
});

const checkPlaying = (song) => {
  if (song.paused) {
    song.play();
    video.play();
    play.src = "../assets/svg/pause.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "../assets/svg/play.svg";
  }
};

const restartSong = (song) => {
  song.currentTime = 0;
  play.src = "../assets/svg/pause.svg";
  song.play();
  video.play();
};

song.ontimeupdate = function () {
  let currentTime = song.currentTime;
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
  outline.style.strokeDashoffset = progress;

  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
    play.src = "../assets/svg/play.svg";
    video.pause();
  }
};

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
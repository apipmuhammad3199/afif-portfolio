"use strict";

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  });
}

/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }
});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

/**
 * SCROLL REVEAL
 */

const elementsToReveal = document.querySelectorAll(
  ".hero-content, .about-content, .skills-content, .project-content, .contact-content, .hero-banner, .about-banner, .stats-card, .skill-card, .project-card, .contact-list-item",
);

elementsToReveal.forEach((el) => {
  el.setAttribute("data-reveal", "");
});

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0; i < revealElements.length; i++) {
    const elementIsInScreen =
      revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15;

    if (elementIsInScreen) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
};

window.addEventListener("scroll", scrollReveal);

scrollReveal();

/**
 * BACKGROUND MUSIC
 */

const musicBtn = document.querySelector("[data-music-btn]");
const musicIcon = musicBtn.querySelector(".icon");
const bgMusic = document.getElementById("bgMusic");

let isMusicPlaying = false;
let userInteracted = false;

// Function to toggle music play/pause
const toggleMusic = function () {
  if (isMusicPlaying) {
    bgMusic.pause();
    isMusicPlaying = false;
    musicIcon.setAttribute("name", "volume-mute-outline");
    musicBtn.classList.remove("playing");
  } else {
    bgMusic.play().then(() => {
      isMusicPlaying = true;
      musicIcon.setAttribute("name", "musical-notes-outline");
      musicBtn.classList.add("playing");
    }).catch((error) => {
      console.log("Autoplay prevented or audio source not found:", error);
    });
  }
};

// Handle music button click
musicBtn.addEventListener("click", function () {
  userInteracted = true; // User explicitly clicked the button
  toggleMusic();
});

// Try to play music on first interaction if not already playing and user hasn't toggled it
const playMusicOnFirstInteraction = function () {
  if (!isMusicPlaying && !userInteracted) {
    toggleMusic();
  }
  // Remove listeners after first interaction
  window.removeEventListener("click", playMusicOnFirstInteraction);
  window.removeEventListener("keydown", playMusicOnFirstInteraction);
  window.removeEventListener("scroll", playMusicOnFirstInteraction);
};

// Add listeners for first interaction to bypass autoplay restrictions
window.addEventListener("click", playMusicOnFirstInteraction);
window.addEventListener("keydown", playMusicOnFirstInteraction);
window.addEventListener("scroll", playMusicOnFirstInteraction);

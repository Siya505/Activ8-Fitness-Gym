/***********************
 * Mobile Menu Toggle
 ***********************/

// Select menu toggle button and menu container
const menuToggle = document.querySelector('.menu-toggle');
const tabsTop = document.getElementById('tabs-top');

// Toggle menu open/close when clicking the menu button
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // Stop event from bubbling to document
  tabsTop.classList.toggle('active');
});

// Close menu when clicking anywhere outside it
document.addEventListener('click', () => {
  if (tabsTop.classList.contains('active')) {
    tabsTop.classList.remove('active');
  }
});

// Keep menu open if clicking inside it
tabsTop.addEventListener('click', (e) => {
  e.stopPropagation();
});

/***********************
 * Hero Section Gradient Fade
 ***********************/

// Fade in gradient overlay on hero section as user scrolls
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // Pixels scrolled vertically
  const heroHeight = document.getElementById("hero").offsetHeight;
  const gradient = document.querySelector(".hero-gradient");

  // Calculate opacity based on scroll position
  let opacity = scrollY / heroHeight;
  if (opacity > 1) opacity = 1; // Cap at 100% opacity

  gradient.style.opacity = opacity;
});

/***********************
  * Fitness Classes Slider
  ***********************/
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".class-slide");
let slideIndex = 0;

// Function to scroll to a specific slide
function scrollToSlide(index) {
  const slideWidth = slides[0].offsetWidth + 16; // include gap
  slider.scrollTo({
    left: slideWidth * index,
    behavior: "smooth"
  });
}

// Auto-scroll timer
let autoScroll = setInterval(() => {
  slideIndex++;
  if (slideIndex >= slides.length) slideIndex = 0;
  scrollToSlide(slideIndex);
}, 1000);

// Pause auto-scroll when user interacts
let userScrolling;
slider.addEventListener("scroll", () => {
  clearInterval(autoScroll); // stop timer
  clearTimeout(userScrolling);

  // Determine closest slide after manual scroll
  const slideWidth = slides[0].offsetWidth + 16;
  slideIndex = Math.round(slider.scrollLeft / slideWidth);

  // Resume auto-scroll after 2 seconds of inactivity
  userScrolling = setTimeout(() => {
    autoScroll = setInterval(() => {
      slideIndex++;
      if (slideIndex >= slides.length) slideIndex = 0;
      scrollToSlide(slideIndex);
    }, 4000);
  }, 2000);
});

/***********************
 * Trainer Card Hover Effect
 ***********************/

document.addEventListener("scroll", () => {
  const trainers = document.querySelector("#trainers");
  const overlay = trainers.querySelector("::before"); // pseudo-elements can’t be selected directly

  // Instead, toggle a class
  const rect = trainers.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    trainers.classList.add("active");
  } else {
    trainers.classList.remove("active");
  }
});

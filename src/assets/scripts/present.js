"use strict";

let currentSlide = 0;
const slides = document.querySelectorAll('article');
const totalSlides = slides.length;

// When the page refreshes, get the current slide from the URL
window.addEventListener('hashchange', () => {
  if(window.location.href.includes("#")) {
    const idIndex = window.location.href.indexOf('#');
    const slideNumberString = window.location.href.slice(idIndex +1);
    currentSlide = parseInt(slideNumberString);
  }
})

// Keyboard navigation
window.addEventListener('keydown', (event) => {
  if (slides[currentSlide].classList.contains('no-spacebar') && event.key == ' ') {
    return;
  }
console.log("event", event)
  if(event.key == "ArrowRight" || event.key == " ") {
    currentSlide ++;
    if (currentSlide >= totalSlides) currentSlide = 0;
    window.location.assign(`#${currentSlide}`);
  }
  if(event.key == "ArrowLeft") {
    currentSlide --;
    if (currentSlide <= 0) currentSlide = 0;
    window.location.assign(`#${currentSlide}`);
  }
})

const video = document.getElementById('video');

window.addEventListener('load', () => {
  navigator.mediaDevices.getUserMedia({video: { width: 480, height: 480 }, audio: false})
    .then(stream => {
      video.srcObject = stream;
      video.play();
    }).catch(function(err) {
      console.log("An error occurred: " + err);
  });
})
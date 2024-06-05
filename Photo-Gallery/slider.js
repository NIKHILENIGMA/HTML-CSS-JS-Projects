import { images } from "./images.js"; // Ensure this path is correct

let currentSlide = 0;
const slider = document.getElementById("slider");

images.forEach((image) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.style.backgroundImage = `linear-gradient(to top, #000 20%, transparent), url('${image.url}')`; // Corrected to image.url
    slider.appendChild(slide);
});

const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function changeSlide() {
    slides.forEach(slide => {
        slide.style.opacity = 0; 
        slide.style.backgroundPosition = 'center';
    });
    
    slides[currentSlide].style.opacity = 1;
    slides[currentSlide].style.backgroundPosition = 'bottom'; 

    setTimeout(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        changeSlide();
    }, 5000);
}

changeSlide();

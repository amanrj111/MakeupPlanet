// Menu Toggle
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
let sections = document.querySelectorAll('section');

menuToggle.onclick = function () {
    header.classList.toggle('active');
    sections.forEach(section => section.classList.toggle('active'));
};

// Image Slider
const slides = document.querySelectorAll('.slide');
let counter = 0;

// Position slides side by side
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Function to navigate to the previous slide
const goPrev = () => {
    if (counter > 0) {
        counter--;
        slideImg();
    }
};

// Function to navigate to the next slide
const goNext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImg();
    }
};

// Function to slide images
const slideImg = () => {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// Optional: Autoplay (uncomment to enable autoplay)
/*
let autoplay = true;
let autoplayInterval = setInterval(() => {
    if (autoplay) {
        goNext();
        if (counter === slides.length - 1) {
            counter = -1; // Reset counter
        }
    }
}, 2000);

// Pause autoplay on user interaction
document.querySelectorAll('.prev, .next').forEach(button => {
    button.addEventListener('click', () => {
        autoplay = false;
        clearInterval(autoplayInterval);
    });
});
*/

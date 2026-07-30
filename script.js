// NC Studio
// Romantic Gallery Animations


// Fade-in animation when sections appear

const sections = document.querySelectorAll(
    ".featured, .artist, .studio, .contact, .art-card"
);


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});



sections.forEach(section => {

    observer.observe(section);

});

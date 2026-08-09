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
function openLightbox(title, medium, description, image){

document.getElementById("lightbox").classList.add("active");

document.getElementById("lightbox-image").src=image;

document.getElementById("lightbox-title").innerHTML=title;

document.getElementById("lightbox-medium").innerHTML=medium;

document.getElementById("lightbox-description").innerHTML=description;

}



function closeLightbox(){

document.getElementById("lightbox").classList.remove("active");

}
const referenceInput = document.getElementById("reference");
const fileName = document.getElementById("file-name");

if (referenceInput) {

    referenceInput.addEventListener("change", function () {

        if (this.files.length > 0) {
            fileName.textContent = this.files[0].name;
        } else {
            fileName.textContent = "No image selected";
        }

    });

}

let slideIndex = 1;
let slides = Array.from(document.getElementsByClassName("slide"));

showDivs(slideIndex);

function nextImage(n) {
    showDivs(slideIndex += n);
}

function showDivs(slideId) {
    if(slideId > slides.length){
        slideIndex = 1;
    }
    if(slideId < 1){
        slideIndex = slides.length;
    }

    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex-1].style.display = "block";
}

let aboutMe = document.getElementsByClassName('desc')[0];
let contactOptions = document.getElementById('contact-options');
let offset = 800;
let cards = document.getElementsByClassName("project-item");


document.addEventListener("scroll", function (){
    let h = window.screen.availHeight;

    titles.forEach((title, id) =>{
        setAnimation(title, setPosition, "0", "-100%");

        if(title.getBoundingClientRect().top <= offset && title.getBoundingClientRect().top >= 0){ // if time to change page nr
            // change page number
            pageNr.firstChild.textContent = `0${id+2}`
        }
    })

    // if user go back to home page
    if(titles[0].getBoundingClientRect().top >= h){
        pageNr.firstChild.textContent = '01';
    }

    gridItems.forEach(item =>{
        setAnimation(item, setScale, "scale(1)", "scale(0)");
    })

    setAnimation(aboutMe, setScale, "scale(1)", "scale(0)");
    setAnimation(contactOptions, setScale, "scale(1)", "scale(0)");


    //projects card animation
    setAnimation(cards[0], setPosition, "0", "-100%");
    setAnimation(cards[1], setPosition, "0", "100%");
})


function setScale(element, val){
    element.style.transform = val;
}

function setPosition(element, val){
    element.style.left = val;
}

function setAnimation(element, fun, val1, val2){
    let elemOffset = element.getBoundingClientRect().top;

    if(elemOffset <= offset){
        fun(element, val1);
    }
    else{
        fun(element, val2);
    }
}

let mouseCursor = document.getElementsByClassName("cursor")[0];
let titles = Array.from(document.getElementsByClassName('title'));
let pageNr = document.getElementById('page_nr');
let gridItems = Array.from(document.getElementsByClassName("grid-item"));


window.addEventListener("mousemove", function (event){
    mouseCursor.style.top = event.pageY + "px";
    mouseCursor.style.left = event.pageX + "px";
})

window.addEventListener("mouseover", function (event){
    if(event.target.nodeName === "DIV"){
        if(event.target.id === "burger-nav-elements"){
            if(toggle.classList.contains("active"))
                mouseCursor.style.borderColor = "white";
            else mouseCursor.style.borderColor = "black";
        }
        else if(event.target.id !== "icons" && event.target.id !== "scroller"){
            if(toggle.classList.contains("active"))
                mouseCursor.style.borderColor = "black";
            else mouseCursor.style.borderColor = "white";
        }

    }

    if(event.target.nodeName === "A" || event.target.nodeName === "LI" || event.target.nodeName === "BUTTON"){
        mouseCursor.style.backdropFilter = "none";
        mouseCursor.style.width = "3.5rem";
        mouseCursor.style.height = "3.5rem";
    }
    else{
        mouseCursor.style.backdropFilter = "blur(4px)";
        mouseCursor.style.width = "3rem";
        mouseCursor.style.height = "3rem";
    }
})

document.addEventListener("scroll", function (){
    let h = window.screen.availHeight;

    titles.forEach((title, id) =>{
        let titleOffset = title.getBoundingClientRect().top;

        if(titleOffset <= 400){
            title.style.left = `0`;
        }
        else{
            title.style.left = '-100%';
        }
        if(titleOffset <= 400 && titleOffset >= 0){ // if time to change page nr
            // change page number
            pageNr.firstChild.textContent = `0${id+2}`
        }

    })

    // if user go back to home page
    if(titles[0].getBoundingClientRect().top >= h){
        pageNr.firstChild.textContent = '01';
    }
    if(titles[1].getBoundingClientRect().top <= 400){
        gridItems.forEach(item => item.style.transform = "scale(1)");
    }
    else{
        gridItems.forEach(item => item.style.transform = "scale(0)");
    }

    //projects card animation
    let cards = document.getElementsByClassName("project-item");
    let firstCardOffset = cards[0].getBoundingClientRect().top;
    let secondCardOffset = cards[1].getBoundingClientRect().top;

    if(firstCardOffset <= 400){
        cards[0].style.left = '0';
    }
    else{
        cards[0].style.left = '-100%';
    }

    if(secondCardOffset <= 400){
        cards[1].style.left = '0';
    }
    else{
        cards[1].style.left = '100%';
    }
})
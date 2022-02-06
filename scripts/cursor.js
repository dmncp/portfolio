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

let burgerNavigationElement = document.getElementById('burger-nav-elements');
let langChoose = document.getElementById("lang_choose");
let nav = Array.from(document.getElementById('nav').children);
let icons = Array.from(document.getElementById("icons").children);


function burgerNavigation(){
    let topVal = burgerNavigationElement.style.top;

    if(topVal === "0px"){
        if(toggle.classList.contains("active"))
            setStyle("black", "-100%");
        else
            setStyle("white", "-100%");
    }

    else{
        if(toggle.classList.contains("active"))
            setStyle("white", "0");
        else
            setStyle("black", "0");
    }
}

function setStyle(color, topValNew){
    burgerNavigationElement.style.top = topValNew;
    setColors(color);
}

function setColors(color){
    langChoose.children[1].style.color = color;
    langChoose.children[2].style.color = color;
    icons.forEach(child => child.style.color = color);
    nav.forEach(child => child.style.backgroundColor = color);
}

function closeNav(){
    if(toggle.classList.contains("active")){
        setStyle("black", "-100%");
    }
    else{
        setStyle("white", "-100%");
    }
}

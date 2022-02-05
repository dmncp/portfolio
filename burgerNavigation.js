let burgerNavigationElement = document.getElementById('burger-nav-elements');
let langChoose = document.getElementById("lang_choose");
let icons = document.getElementById("icons");
let nav = document.getElementById('nav');


function burgerNavigation(){
    let topVal = burgerNavigationElement.style.top;

    if(topVal === "0px")
        setStyle("white", "-100%", nav);
    else
        setStyle("black", "0px", nav);
}


function setStyle(color, topValNew, elem){
    burgerNavigationElement.style.top = topValNew;
    langChoose.children[1].style.color = color;
    langChoose.children[2].style.color = color;
    Array.from(icons.children).forEach(child => child.style.color = color);
    Array.from(elem.children).forEach(child => child.style.backgroundColor = color);
}


function closeNav(){
    setStyle("white", "-100%", nav);
}

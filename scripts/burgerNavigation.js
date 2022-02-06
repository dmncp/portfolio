let burgerNavigationElement = document.getElementById('burger-nav-elements');
let langChoose = document.getElementById("lang_choose");
let nav = Array.from(document.getElementById('nav').children);
let icons = Array.from(document.getElementById("icons").children);

function burgerNavigation(){
    burgerNavigationElement.classList.toggle("active");

    if(burgerActive()){
        if(toggle.classList.contains("active"))
            setColors("white");
        else
            setColors("black");
    }

    else{
        if(toggle.classList.contains("active"))
            setColors("black");
        else
            setColors("white");
    }
}

function burgerActive(){
    return burgerNavigationElement.classList.contains('active');
}

function setColors(color){
    langChoose.children[1].style.color = color;
    setColorOnActiveLang(langChoose.children[0], langChoose.children[2], color)
    icons.forEach(child => child.style.color = color);
    nav.forEach(child => child.style.backgroundColor = color);
}

function setColorOnActiveLang(elem1, elem2, color){
    if(elem1.classList.contains('active')){
        elem2.style.color = color;
    }
    else{
        elem1.style.color = color;
    }
}

function closeNav(){
    burgerNavigationElement.classList.remove("active");

    if(toggle.classList.contains("active")){
        setColors("black");
    }
    else{
        setColors("white");
    }
}

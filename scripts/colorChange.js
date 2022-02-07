let djangoIcon = document.getElementById("django");
let gitIcon = document.getElementById("git");
const toggle = document.getElementById("toggle");

toggle.onclick = function (){
    toggle.classList.toggle("active");

    if(toggle.classList.contains('active')){
        Array.from(document.body.children).forEach(child => child.classList.add('bright-mode'));
        document.body.classList.add('bright-mode');

        if(djangoIcon !== null && gitIcon !== null){
            djangoIcon.setAttribute("src", "resources/icons/Django_logo.png")
            gitIcon.style.color = "black"
        }


        if(burgerActive())
            setColors("white");
        else
            setColors("black");
    }
    else{
        Array.from(document.body.children).forEach(child => child.classList.remove('bright-mode'));
        document.body.classList.remove('bright-mode');

        if(djangoIcon !== null && gitIcon !== null) {
            djangoIcon.setAttribute("src", "resources/icons/Django_white.png")
            gitIcon.style.color = "white"
        }

        if(burgerActive())
            setColors("black");
        else
            setColors("white");
    }

}


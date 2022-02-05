const toggle = document.getElementById("toggle");

toggle.onclick = function (){
    toggle.classList.toggle("active");

    if(toggle.classList.contains('active')){
        Array.from(document.body.children).forEach(child => child.classList.add('bright-mode'));
        document.body.classList.add('bright-mode');

        if(burgerActive())
            setColors("white");
        else
            setColors("black");
    }
    else{
        Array.from(document.body.children).forEach(child => child.classList.remove('bright-mode'));
        document.body.classList.remove('bright-mode');

        if(burgerActive())
            setColors("black");
        else
            setColors("white");
    }

}


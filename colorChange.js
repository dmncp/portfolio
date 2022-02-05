const toggle = document.getElementById("toggle");

toggle.onclick = function (){
    toggle.classList.toggle("active");

    if(toggle.classList.contains('active')){
        Array.from(document.body.children).forEach(child => child.classList.add('white-mode'));
        document.body.classList.add('white-mode');

        if(burgerActive())
            setColors("white");
        else
            setColors("black");
    }
    else{
        Array.from(document.body.children).forEach(child => child.classList.remove('white-mode'));
        document.body.classList.remove('white-mode');

        if(burgerActive())
            setColors("black");
        else
            setColors("white");
    }

}


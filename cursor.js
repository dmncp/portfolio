let mouseCursor = document.getElementsByClassName("cursor")[0];
let titles = Array.from(document.getElementsByClassName('title'));
let body = document.body;
let html = document.documentElement;
let pageNr = document.getElementById('page_nr');
let docHeight = getEntireDocumentHeight();

pageNr.children[1].textContent = `0${Math.floor(getPageNr(docHeight))}`;


function getPageNr(value){
    return Math.round(value / 1000 );
}

function getEntireDocumentHeight(){
    return  Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight );
}


window.addEventListener("mousemove", function (event){
    mouseCursor.style.top = event.pageY + "px";
    mouseCursor.style.left = event.pageX + "px";
})

window.addEventListener("mouseover", function (event){
    if(event.target.nodeName === "DIV"){
        if(event.target.id === "burger-nav-elements")
            mouseCursor.style.borderColor = "#000511"
        else if(event.target.id !== "icons" && event.target.id !== "scroller")
            mouseCursor.style.borderColor = "#ededed"
    }

    if(event.target.nodeName === "A" || event.target.nodeName === "LI"){
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
    console.log(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight, window.scrollY, window.innerHeight, window.screen.height, window.screen.availHeight)


    let scroll = window.scrollY;

    titles.forEach((title, id) =>{
        if(scroll <= window.screen.height * (id + 1)){
            let amount = (id + 1)*(-50) + (scroll * 0.06);
            title.style.left = `${Math.min(amount, 0)}%`;
        }
    })

    // change page number
    pageNr.firstChild.textContent = `0${Math.floor(scroll / window.innerHeight) + 1}`;


    //projects card animation
    let cards = document.getElementsByClassName("project-item");
    if(scroll <= window.screen.height * 4){ // 4 - page nr
        let amount1 = -200 + (scroll * 0.075);
        let amount2 = 200 - (scroll * 0.075);
        cards[0].style.left = `${Math.min(amount1, 0)}%`;
        cards[1].style.left = `${Math.max(amount2, 0)}%`;
    }
})

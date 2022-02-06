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

let rawdata = readJsonFile("resources/langSettings.json");
let langSettings = JSON.parse(rawdata);

function setLanguage(settings, language){
    settings.forEach(setting => {
        let elements = document.querySelectorAll(setting['element']);
        let langTexts = setting[language];

        elements.forEach((element, id) =>{
            element.innerHTML = langTexts[id%langTexts.length];
        })
    })
}

function changeLanguage(language){
    let langDiv = document.getElementById('lang_choose');
    if(language === 'pl'){
        toggleClass(langDiv.children[0], langDiv.children[2]);
        setLanguage(langSettings, language);
    }
    else {
        toggleClass(langDiv.children[2], langDiv.children[0]);
        setLanguage(langSettings, language);
    }
}

function toggleClass(elem1, elem2){
    elem1.classList.add('active');
    elem2.classList.remove('active');
}


function readJsonFile(path){
    let jsonResult;

    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", path, false);
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status === 0){
                jsonResult = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return jsonResult;
}

var translate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#input-text")
var outputDiv = document.querySelector("#output-text")

var MinionURL="https://api.funtranslations.com/translate/minion.json"

function translateText(text){
    return MinionURL + "?" + "text=" + text

}

function errorHandler(error){
    console.log("error Occured",error)
    alert("Try again after an hour, server having minion meeting for Despicable me 5, This API is not free hence you can only translate 10 times in an hour")

}

function clickHandler(){
    var inputText = txtInput.value;
    fetch(translateText(inputText))
    .then(response => response.json())
    .then(json=> {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}


translate.addEventListener("click", clickHandler)



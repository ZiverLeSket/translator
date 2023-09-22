const API_URL = "https://api.mymemory.translated.net/";

function translator(){
    let srcText = document.getElementById("srcText").value;
    let srcLang = document.getElementById("srcLang").value;
    let dstLang = document.getElementById("dstLang").value;
    let url = `${API_URL}?q=${srcText}&langpair=${srcLang}|${dstLang}`;
    var request = new Request(url);
    fetch(request)
    .then((response) => response.text())
    .then((text) => {
        var data = JSON.parse(text);
        let translatedText = data.responseData.translatedText;
        return translatedText; 
    })
    .then((translatedText) => document.getElementById("dstText").value = `${translatedText}`)
}

// const DEF_URL = "https://api.mymemory.translated.net/"

// function loadResponse(url){
//     const myRequest = new Request(url);
//     var dstText = '';
//     const myFetch = myRequest => {fetch(myRequest)
//         .then((response) => response.text())
//         .then((text) => {
//             const data = JSON.parse(text);
//             dstText = data.responseData.translatedText;
//         })
//     }
// }

// function translate(srctext, srclang, dstlang){
//     let url = `${DEF_URL}?q=${srctext}&langpair=${srclang}|${dstlang}`;
//     var newText = loadResponse(url);
//     return newText;
// }

// var text = 'В питцерии сдохли негры' ;
// var newText = ''
// translate(text, 'ru', 'en')
// .then((dstText) => {return dstText;})

// console.log(dstText);



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
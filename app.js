var inputText = document.querySelector("#input-text");
var btnInc = document.querySelector("#btn-inc");
var btnDec = document.querySelector("#btn-dec");
var outputBox = document.querySelector("#output-box");

var textSize = 16;
function incFont() {
    textSize += 2;
inputText.style.fontSize = textSize +"px";
};
function decFont() {
    textSize -= 2;
    inputText.style.fontSize = textSize + "px";
};

btnInc.addEventListener("click", incFont);
btnDec.addEventListener("click", decFont);
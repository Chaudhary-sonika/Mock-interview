var inputText = document.querySelector("#input-text");
var btnInc = document.querySelector("#btn-inc");
var btnDec = document.querySelector("#btn-dec");
var outputBox = document.querySelector("#output-box");

var textSize = "";
function incFont() {
inputText.style.fontSize = textSize + 2 +"px";
};

btnInc.addEventListener("click", incFont());
btnDec.addEventListener("click", );
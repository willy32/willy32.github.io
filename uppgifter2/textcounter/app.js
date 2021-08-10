const txtText = document.querySelector("#txtText");
const lblChars = document.querySelector("#lblChars");
const lblWords = document.querySelector("#lblWords");

txtText.addEventListener("input", (e) => {

    let text = txtText.value.trim();
    console.log(text);
    
    let words = text.split(' ');

    lblChars.innerText = "Characters: " + text.length;
    lblWords.innerText = "Words: " + words.length;
});
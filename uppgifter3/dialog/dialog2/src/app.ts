import {createDialog} from "./components/dialog/dialog";

const openButton:HTMLButtonElement = document.querySelector<HTMLButtonElement>("#openButton");
const btnText:HTMLButtonElement = document.querySelector<HTMLButtonElement>("#btnText");

const colorDialog = createDialog(".dialog");

btnText.addEventListener("click", () => {
    colorDialog.open(result => {
        document.body.style.color = result.submitter?.textContent.toLowerCase();
    });
});

openButton.addEventListener("click", () => {
    colorDialog.open(result => {
        document.body.style.backgroundColor = result.submitter?.textContent.toLowerCase();
        
    });
});
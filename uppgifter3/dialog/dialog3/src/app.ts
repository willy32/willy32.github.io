import {createDialog} from "./components/dialog/dialog";

const openButton:HTMLButtonElement = document.querySelector<HTMLButtonElement>("#openButton");

const dialog = createDialog(".dialog");

openButton.addEventListener("click", () => {
    dialog.open(result => {
        document.querySelector("h1").innerHTML = result.submitter?.textContent;
    });
});
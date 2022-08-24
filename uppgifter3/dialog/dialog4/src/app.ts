import {createDialog} from "./components/dialog/dialog";

const openButton:HTMLButtonElement = document.querySelector<HTMLButtonElement>("#openButton");
const inputs:NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>("input");

const dialog = createDialog(".dialog");

openButton.addEventListener("click", () => {
    dialog.open(result => {
        console.log(result);

        switch (result.submitter?.textContent) {
            case "+":
                document.querySelector("h1").innerHTML = (parseInt(inputs[0].value) + parseInt(inputs[1].value)).toString();
                break;
            case "-":
                document.querySelector("h1").innerHTML = (parseInt(inputs[0].value) - parseInt(inputs[1].value)).toString();
                break;
            case "*":
                document.querySelector("h1").innerHTML = (parseInt(inputs[0].value) * parseInt(inputs[1].value)).toString();
                break;
            case "/":
                document.querySelector("h1").innerHTML = (parseInt(inputs[0].value) / parseInt(inputs[1].value)).toString();
                break;
        
            default:
                break;
        }
        
        document.body.style.backgroundColor = result.submitter?.textContent.toLowerCase();
        
    });
});
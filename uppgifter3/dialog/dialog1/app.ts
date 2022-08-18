const buttons = document.querySelectorAll<HTMLButtonElement>("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch (button.textContent) {
            case "Open":
                document.getElementById("popUp").style.display = "flex";
                break;
            case "Yes":
                document.getElementById("popUp").style.display = "none";
                alert(button.textContent);
                break;
            case "No":
                document.getElementById("popUp").style.display = "none";
                alert(button.textContent);
                break;
        
            default:
                break;
        }
    });
});
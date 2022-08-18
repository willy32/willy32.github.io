function creatDialog(selector) {
    const element = document.querySelector(selector);
    const open = (submitCallback)=>{
        element?.classList.add("open");
        const submit = (e)=>{
            e.preventDefault();
            element?.removeEventListener("submit", submit);
            submitCallback(e);
            element?.classList.remove("open");
        };
        element?.addEventListener("submit", submit);
    };
    return {
        open
    };
}

//# sourceMappingURL=index.22ea7222.js.map

import "./dialog.css"

export type Dialog = {
    open: (submitCallback: (result:SubmitEvent) => void) => void
};

export function createDialog(selector:string): Dialog {
    const element = document.querySelector<HTMLFormElement>(selector);

    const open = (submitCallback: (result: SubmitEvent) => void) => {
        element?.classList.add("open");

        const submit = (e:SubmitEvent) => {
            e.preventDefault();
            element?.removeEventListener("submit", submit)
            submitCallback(e);
            element?.classList.remove("open");
        };

        element?.addEventListener("submit", submit)
    };

    return {open};
}
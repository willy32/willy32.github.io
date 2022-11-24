import { useMutation, useQueryClient } from "@tanstack/react-query";

const postNote = (title: string, content: string) => {
    return fetch("/api/note", {
        method: "POST",
        body: JSON.stringify({title, content}),
        headers: {
            "Content-Type": "application/json"
        }
    });
};

const useNoteMutation = () => {
    const queryClient = useQueryClient();
    return useMutation((data: {title: string, content: string}) => postNote(data.title, data.content), {
        onSuccess: () => {
            queryClient.invalidateQueries(["notes"]);
        }
    })
};

export default useNoteMutation;
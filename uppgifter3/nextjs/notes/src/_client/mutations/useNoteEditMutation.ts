import { useMutation, useQueryClient } from "@tanstack/react-query";

const editNote = (id: number, title: string, content: string) => {
    return fetch(("/api/note/" + id.toString()), {
        method: "POST",
        body: JSON.stringify({title, content}),
        headers: {
            "Content-Type": "application/json"
        }
    });
};

const useNoteEditMutation = () => {
    const queryClient = useQueryClient();
    return useMutation((data: {id: number, title: string, content: string}) => editNote(data.id, data.title, data.content), {
        onSuccess: () => {
            queryClient.invalidateQueries(["notes"]);
        }
    });
};

export default useNoteEditMutation;
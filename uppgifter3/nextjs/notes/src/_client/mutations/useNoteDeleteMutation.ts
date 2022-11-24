import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteNote = (id: number) => {
    return fetch("/api/note", {
        method: "DELETE",
        body: JSON.stringify({id}),
        headers: {
            "Content-Type": "application/json"
        }
    });
};

const useNoteDeleteMutation = () => {
    const queryClient = useQueryClient();
    return useMutation((data: {id: number}) => deleteNote(data.id), {
        onSuccess: () => {
            queryClient.invalidateQueries(["notes"]);
        }
    });
};

export default useNoteDeleteMutation;
import { useQuery } from "@tanstack/react-query";

const fetchNotes = async () => {
    const response = await fetch("/api/note");
    return response.json();
}

const useNoteQuery = () => {
    return useQuery(["notes"], fetchNotes);
}

export default useNoteQuery;
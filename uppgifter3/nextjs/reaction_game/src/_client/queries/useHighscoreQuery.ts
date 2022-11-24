import { useQuery } from "@tanstack/react-query";

const fetchHighscores = async () => {
    const response = await fetch("/api/score");
    return response.json();
}

const useHighscoreQuery = () => {
    return useQuery(["highscore"], fetchHighscores);
}

export default useHighscoreQuery;
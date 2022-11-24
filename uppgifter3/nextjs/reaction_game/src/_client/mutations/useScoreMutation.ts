import { useMutation } from "@tanstack/react-query";

const postScore = (name: string, score:number) => {
    return fetch("/api/score", {
        method: "POST",
        body: JSON.stringify({name, score}),
        headers: {
            "Content-Type": "application/json"
        }
    });
};

const useScoreMutation = () => {
    return useMutation((data: {name: string, score: number}) => postScore(data.name, data.score), {})
};

export default useScoreMutation;
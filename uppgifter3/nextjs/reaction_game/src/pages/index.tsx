import ReactionGame from "../_client/components/ReactionGame";
import useScoreMutation from "../_client/mutations/useScoreMutation";

export default function Home() {

  const {mutate} = useScoreMutation();

  const onFinished = (name: string, score: number) => {
    mutate({name, score});
  }

  return (
    <div className="h-screen">
      <ReactionGame onFinished={onFinished}/>
    </div>
  )
}

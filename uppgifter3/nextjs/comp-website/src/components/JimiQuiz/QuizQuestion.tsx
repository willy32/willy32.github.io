import React from 'react';
import QuizButton from './QuizButton';

type AnswerType = {
    content: string,
    isCorrect: boolean
}
type QuestionType = {
    content: string,
    answers: AnswerType[]
}

type QuestionsProps = {
    question: QuestionType
    onCorrect: () => void,
    onIncorrect: () => void
}

const QuizQuestion = ({question, onCorrect, onIncorrect}: QuestionsProps) => {
  const click = (isCorrect: boolean) => {
    if(isCorrect) onCorrect();
    else onIncorrect();
  }

  return (
    <div>
        <p className='mb-6'>{question.content}</p>
        <div className='flex flex-wrap gap-4'>
          {
            question.answers.map((answer) => (
              <QuizButton 
              key={answer.content} 
              onClick={() => click(answer.isCorrect)}
              >{answer.content}</QuizButton>
            ))
          }
        </div>
    </div>
  );
};

export default QuizQuestion;
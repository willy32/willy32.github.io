import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizStartScreen from './QuizStartScreen';

type AnswerType = {
    content: string,
    isCorrect: boolean
}
type QuestionType = {
    content: string,
    answers: AnswerType[]
}

type JimiQuizProps = {
    title: string,
    description: string,
    startButtonText: string,
    questions: QuestionType[]
}   

const JimiQuiz = ({title, description, startButtonText, questions}: JimiQuizProps) => {
  
  const [questionIndex, setQuestionIndex] = useState(-1);
  
  const isStarted = questionIndex >= 0;

  const start = () => {
    setQuestionIndex(0);
  }

  const correctAnswer = () => {
    setQuestionIndex(questionIndex + 1);
  }
  const incorrectAnswer = () => {
    setQuestionIndex(questionIndex + 1);
  }
  
  return (
    <div className='w-full max-w-[700px] p-6 rounded shadow bg-white'>
        {!isStarted && <QuizStartScreen 
        title={title} 
        description={description} 
        startButtonText={startButtonText}
        onStart={start}/>}
        {isStarted && <QuizQuestion 
          question={questions[questionIndex]}
          onCorrect={correctAnswer}
          onIncorrect={incorrectAnswer}
        />}
    </div>
  );
};

export default JimiQuiz;
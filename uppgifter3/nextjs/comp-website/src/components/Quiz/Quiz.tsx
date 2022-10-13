import React, { useEffect, useState } from 'react';
import styles from "./Quiz.module.css";
import Timer from './Timer';

type AnswerProps = {
    answer: string,
    correct: boolean
}
type QuestionProps = {
    question: string,
    answers: AnswerProps[]
}
type QuizProps = {
    questions: QuestionProps[],
    time?: number
}

const Quiz = ({questions, time} :QuizProps) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [timer, setTimer] = useState(time ? time : -1);

    console.log(questions);

    const renderQuestion = () => {
        return (<>
            <p>{timer}</p>
            <h2>{questions[currentQuestion].question}</h2>
            <div className={styles.answerContainer}>
            {
                questions[currentQuestion].answers.map((answer, index) => (
                    <button 
                    onClick={() => answerQuestion(index)} 
                    key={index}>
                        {answer.answer}
                    </button>
                ))
            }
            </div>
        </>);
    };
    const renderStats = () => {
        return (<>
            <h2>You have completed the quiz</h2>
            <p>Score: {correctAnswers}/{questions.length}</p>
        </>);
    };

    const answerQuestion = (index: number) => {
        if (index == -1){}
        else if(questions[currentQuestion].answers[index].correct) setCorrectAnswers(correctAnswers + 1);

        if(time) setTimer(time);

        setCurrentQuestion(currentQuestion + 1);
    };

    useEffect(() => {
        if(!time) return;
        const interval:NodeJS.Timer = setInterval(() => {

            setTimer(timer => timer - 1);
        }, 1000);
        if(timer <= 0) answerQuestion(-1);
        return () => clearInterval(interval);
    }, [timer]);

  return (
    <div className={styles.container}>
        { currentQuestion < (questions.length) ? renderQuestion() : renderStats() }
    </div>
  );
};

export default Quiz;
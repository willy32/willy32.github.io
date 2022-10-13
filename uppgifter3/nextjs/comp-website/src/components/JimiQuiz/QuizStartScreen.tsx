import React from 'react';
import QuizButton from './QuizButton';

type QuizStartScreenProps = {
    title: string,
    description: string,
    startButtonText: string,
    onStart: () => void
};

const QuizStartScreen = ({title, description, startButtonText, onStart}: QuizStartScreenProps) => {
  return (
    <div className='space-y-6'>
        <h3 className='font-bold text-4xl'>{title}</h3>
        <p>{description}</p>
        <QuizButton onClick={onStart}>{ startButtonText }</QuizButton>
    </div>
  );
};

export default QuizStartScreen;
import React from 'react';

type QuizEndScreenProps = {
    questionCount: number,
    correctCount: number
}

const QuizEndScreen = ({questionCount, correctCount}: QuizEndScreenProps) => {
  return (
    <div>
        {correctCount}/{questionCount}
    </div>
  );
};

export default QuizEndScreen;
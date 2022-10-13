import React from 'react'

type QuizButtonProps = {
    children?: any,
    onClick?: () => void
}

const QuizButton = ({children, onClick}: QuizButtonProps) => {
  return (
    <button 
    type='button'
    onClick={onClick}
    className="bg-primary text-on-primary px-8 py-4 rounded select-none hover:bg-primary-light"
    >
        {children}
    </button>
  )
}

export default QuizButton
"use client"

import React, { useState } from 'react';

export default function QuizRun({testData}: any) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
	const [answerChecked, setAnswerChecked] = useState(false);
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [selectedAnswerScore, setSelectedAnswerScore] = useState(0);
	const [showResults, setShowResults] = useState(false);
  
  const onAnswerSelected = (answer: any, idx: any) => {
		setSelectedAnswerIndex(idx);
		setSelectedAnswer(answer.name);
		setAnswerChecked(true);
    setSelectedAnswerScore(answer.score);
	};

  const handleNextQuestion = () => {
    if(testData[currentQuestionIndex].number === (1 || 13 || 25 || 37 || 49 || 61 || 73)) {
      // console.log(selectedAnswerScore);
      // quizResult.result[0].level[0]?.score = selectedAnswerScore;

      // // quizResult.result[0]?.level[0].score = selectedAnswerScore;
    }

		if (currentQuestionIndex !== testData.length - 1) {
			setCurrentQuestionIndex((prev) => prev + 1);
		} else {
			setShowResults(true);
		}
		setSelectedAnswer('');
		setSelectedAnswerIndex(null);
		setAnswerChecked(false);
	};

  

  return (
    <>
    	<div className=''>
        {!showResults ? (
            <div className='card p-4'>
              <h4>{testData[currentQuestionIndex].number}. {testData[currentQuestionIndex].name}</h4>
              <ul className='list-group'>
                {testData[currentQuestionIndex].answers.map((answer: any, idx: any) => (
                  <li
                    key={idx}
                    onClick={() => onAnswerSelected(answer,idx)}
                    className={
                      'list-group-item ' +
                      (selectedAnswerIndex === 
                          idx ? 'active' : '') +
                      ' cursor-pointer'
                    }
                  >
                    {answer.name}
                  </li>
                ))}
              </ul>
              <div className='d-flex justify-content-between mt-3'>
                <b>Вопрос
                  {currentQuestionIndex + 1}/{testData.length}
                </b>
                <button
                  onClick={handleNextQuestion}
                  className='btn btn-primary'
                  disabled={!answerChecked}
                >
                  {currentQuestionIndex === testData.length - 1 ?
                    'Завершить' : 'Дальше'}
                </button>
              </div>
            </div>
          ) : (
            // <ScoreCard
            //   quizResult={quizResult}
            //   questions={questions}
            // />
            <p>Результаты</p>
          )}
      </div>
    </>
	);
}
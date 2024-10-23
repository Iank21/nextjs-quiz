'use client';

import React, { useState } from 'react';
import QuizRun from './quizRun';

export default function QuizInfo({test, testData}: any) {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div>
    {quizStarted ? (
      <QuizRun testData={testData} testId={test.id}/>
    ) : (
      <>
    	<div className={`mb-6 text-center`}>
        <h1 className={`text-xl mb-2`}>
          {test?.name}
        </h1>
        <p>
          Автор: {test?.author}
        </p>
      </div>
      <div className={`mb-6`}>
        <p className={`text-lg mb-2`}>
          Описание:
        </p>
        <p>
          {test?.description}  
        </p>
      </div>
      <div className={`mb-6`}>
        <p className={`text-lg mb-2`}>
          Инструкция:
        </p>
        <p>
          {test?.instruction}
        </p>
      </div>

      <button
				onClick={() => setQuizStarted(true)}
				className="btn btn-primary">
				Начать
			</button>
    </>
    )}
    </div>
	);
}
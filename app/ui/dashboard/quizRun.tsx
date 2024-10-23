'use client';

import React, { useState } from 'react';
import ScoreCard from './scoreCard';

export default function QuizRun({testData, testId}: any) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answerChecked, setAnswerChecked] = useState(false);
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [selectedAnswerScore, setSelectedAnswerScore] = useState(0);
	const [showResults, setShowResults] = useState(false);
  const [quizResult, setQuizResult] = useState({
		score: 0,
	});

  const [quizResultBoyko, setQuizResultBoyko] = useState({
		// 1. Фаза « НАПРЯЖЕНИЕ»
    phase_1: 0,
    // 1.1. Переживание психотравмирующих обстоятельств: +1(2), +13(3), +25(2),-37(3), +49(10), +61(5), -73(5)
    param_1_1: 0,
    // 1.2. Неудовлетворенность собой:-2(3), +14(2), +26(2), -38(10), -50(5), +62(5), +74(3)
    param_1_2: 0,
    // 1.3. "Загнанность в клетку":+3(10), +15(5), +27(2), +39(2), +51(5), +63(1), -75(5)
    param_1_3: 0,
    // 1.4. Тревога и депрессия:+4(2), +16(3), +28(5), +40(5), +52(10), +64(2), +76(3)
    param_1_4: 0,
    // 2. Фаза «РЕЗИСТЕНЦИЯ»
    phase_2: 0,
    // 2.1. Неадекватное избирательное эмоциональное реагирование:+5(5), -17(3), +29(10), +41(2), +53(2), +65(3), +77(5)2.
    param_2_1: 0,
	});

  const onAnswerSelected = (answer: any, idx: any) => {
    setSelectedAnswerIndex(idx);
		setAnswerChecked(true);
    setSelectedAnswerScore(answer.point);
	};

  const handleNextQuestion = () => {
    if(testId === 'boyko') {
      if(testData[currentQuestionIndex].number === '1') {
        setQuizResultBoyko((prev) => ({
          ...prev,
          phase_1: + prev.phase_1 + selectedAnswerScore,
          param_1_1: prev.param_1_1 + selectedAnswerScore,
        }));
      } else if (testData[currentQuestionIndex].number === '2') {
        setQuizResultBoyko((prev) => ({
          ...prev,
          phase_1: + prev.phase_1 + selectedAnswerScore,
          param_1_2: prev.param_1_2 + selectedAnswerScore,
        }));
      } else if (testData[currentQuestionIndex].number === '3') {
        setQuizResultBoyko((prev) => ({
          ...prev,
          phase_1: + prev.phase_1 + selectedAnswerScore,
          param_1_3: prev.param_1_3 + selectedAnswerScore,
        }));
      } else if (testData[currentQuestionIndex].number === '4') {
        setQuizResultBoyko((prev) => ({
          ...prev,
          phase_1: + prev.phase_1 + selectedAnswerScore,
          param_1_4: prev.param_1_4 + selectedAnswerScore,
        }));
      } else if (testData[currentQuestionIndex].number === '5') {
        setQuizResultBoyko((prev) => ({
          ...prev,
          phase_2: + prev.phase_2 + selectedAnswerScore,
          param_2_1: prev.param_2_1 + selectedAnswerScore,
        }));
      };
    } else {
      setQuizResult((prev) => ({
				score: prev.score + selectedAnswerScore,
			}));
    }

		if (currentQuestionIndex !== testData.length - 1) {
			setCurrentQuestionIndex((prev) => prev + 1);
		} else {
			setShowResults(true);
		}
		setSelectedAnswerIndex(null);
		setAnswerChecked(false);
	};

  return (
    <>
    	<div>
        {!showResults ? (
            <div>
              <h4 className='text-lg mb-4'>{testData[currentQuestionIndex].number}. {testData[currentQuestionIndex].name}</h4>
              <div className='flex mb-4 gap-4'>
                {testData[currentQuestionIndex].answers.map((answer: any, idx: any) => (
                  <div
                    key={idx}
                    onClick={() => onAnswerSelected(answer, idx)}
                    className={
                      'btn ' +
                      (selectedAnswerIndex === 
                          idx ? 'active' : '')
                    }
                  >
                    {answer.name}
                  </div>
                ))}
              </div>
              <div>
                <b>Вопрос
                  {currentQuestionIndex + 1}/{testData.length}
                </b>
                <button
                  onClick={handleNextQuestion}
                  className='btn'
                  disabled={!answerChecked}
                >
                  {currentQuestionIndex === testData.length - 1 ?
                    'Завершить' : 'Дальше'}
                </button>
              </div>
            </div>
          ) : (
            <>
              <ScoreCard quizResult={testId === 'boyko' ? quizResultBoyko : quizResult} testId={testId}/>
            </>
          )}
      </div>
    </>
	);
}
import Diagramm from "./diagramm";

export default function ScoreCard({ quizResult, testId }: any) {

	return (
		<>
    <h1>Результат теста</h1>
      {testId === 'boyko' ? (
        <div>
          <Diagramm />
        </div>
      ) : (
        <div>
          лишер
        </div>
      )}
		</>
	);
}
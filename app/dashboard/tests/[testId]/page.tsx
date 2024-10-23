// import { prisma } from '@/lib/prisma';
// import { tests, questions, answers } from '@/app/lib/mock-up';
import { Question, Question_Answer } from '@/app/lib/definitions';
import { getAnswers, getQuestionsForOneTest, getTestInfo } from '@/app/lib/data';
import QuizInfo from '@/app/ui/dashboard/quizInfo';

type TestPageProps = {
  params: {
    testId: string;
  };
};

export default async function Page({ params }: TestPageProps) {
  //Расскомментировать после подключения БД
  const test = await getTestInfo(params.testId);
  // const test = tests.find(item => item.id === params.testId);

  const test_questions = await getQuestionsForOneTest(params.testId);
  // const test_questions = questions.filter(item => item.test_id === params.testId);
  
  const answers = await getAnswers();

  const fullTest: Question_Answer[] = [];

  for(let i = 0; i < test_questions.length; i++) {
    let q_id = test_questions[i].id;
    let ans = answers.filter(item => item.question_id === q_id);

    fullTest.push({
      id: q_id,
      name: test_questions[i].name,
      number: test_questions[i].number,
      answers: ans,
    })
  }

  return (
    <>
        <QuizInfo test={test} testData={fullTest}/>
    </>
  );
}
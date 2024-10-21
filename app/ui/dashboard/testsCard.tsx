// import { tests } from '@/app/lib/mock-up';
import Link from 'next/link';
import { Test } from '@/app/lib/definitions';
import { getTestList } from '@/app/lib/data';

export default async function TestCard() {
  
  //Расскомментировать после подключения БД
  const tests = await getTestList();

  return(
      <div className={`flex gap-4 flex-col`}>
        {tests.map((test: Test) => (
          <div key={test.id} className={`border-solid rounded-lg border-2 border-blue-600 p-4`}>
          <p className={`text-xl py-2`}>
            {test.name}
          </p>
          <p className={`py-2`}>
            {test.author}
          </p>
          <Link href={`/dashboard/tests/${test.id}`} className="btn">Подробнее</Link>
        </div>
        ))}
      </div>
  );
}
import Link from "next/link";
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <h1 className="text-white text-4xl">D-project</h1>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Добро пожаловать!</strong> Данный проект направлен на мониторинг
            психо-эмоционального состояния сотрудников.
          </p>
          <Link
            href="/login"
            className="btn"
          >
            <span>Войти</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/bg-home.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="home page"
          />
        </div>
      </div>
    </main>
  );
}

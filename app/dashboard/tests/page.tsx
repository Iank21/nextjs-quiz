import TestCard from "@/app/ui/dashboard/testsCard";

export default function Page() {

  return (
    <>
      <h1 className={`mb-6 text-xl md:text-2xl`}>
        Список доступных тестов
      </h1>
      <TestCard/>
    </>
  );
}

import TodosContainer from "./containers/TodosContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          TODO APP
        </h2>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <TodosContainer />
      </div>
    </main>
  );
}

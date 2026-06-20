import { TodoShell } from '../components/TodoShell';

const dummyTodos = [
  { id: 1, text: 'Set up Next.js project', done: 1 },
  { id: 2, text: 'Wire up the SQLite database', done: 0 },
  { id: 3, text: 'Build the API routes', done: 0 },
  { id: 4, text: 'Learn what CRUD means', done: 1 },
  { id: 5, text: 'Understand SQL vs NoSQL', done: 0 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f6f3] py-12">
      <div className="max-w-xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-2xl font-medium text-[#1a1a18]">My tasks</h1>
          <p className="text-sm text-[#888780] mt-1">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
        <TodoShell initialTodos={dummyTodos} />
      </div>
    </main>
  );
}

import db from '../../lib/db';
import { TodoShell } from '../components/TodoShell';

export default function Home() {
  const todos = db.prepare('SELECT * FROM todos ORDER BY created_at ASC').all() as {
    id: number;
    text: string;
    done: number;
  }[];

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
        <TodoShell initialTodos={todos} />
      </div>
    </main>
  );
}

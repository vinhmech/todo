'use client';

import { useState } from 'react';
import { AddTodo } from './AddTodo';
import { FilterBar } from './FilterBar';
import { StatsBar } from './StatsBar';
import { TodoItem } from './TodoItem';

interface Todo {
  id: number;
  text: string;
  done: number;
}

interface Props {
  initialTodos: Todo[];
}

export function TodoShell({ initialTodos }: Props) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<'all' | 'active' | 'done'>('all');

  const filtered = todos.filter((t) => {
    if (filter === 'active') return t.done === 0;
    if (filter === 'done') return t.done === 1;
    return true;
  });

  function handleAdd(todo: Todo) {
    setTodos((prev) => [...prev, todo]);
  }

  function handleToggle(updated: Todo) {
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  }

  function handleDelete(id: number) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <>
      <AddTodo onAdd={handleAdd} />
      <FilterBar active={filter} onChange={setFilter} />
      <StatsBar todos={todos} />
      <div className="flex flex-col gap-2 mt-4">
        {filtered.length === 0 ? (
          <p className="text-center text-sm text-[#888780] py-8">
            {filter === 'done'
              ? 'Nothing done yet — go check something off!'
              : 'No tasks here. Add one above.'}
          </p>
        ) : (
          filtered.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </>
  );
}

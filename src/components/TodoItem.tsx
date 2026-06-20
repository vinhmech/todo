'use client';

interface Todo {
  id: number;
  text: string;
  done: number;
}

interface Props {
  todo: Todo;
  onToggle: (updated: Todo) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  function handleToggle() {
    onToggle({ ...todo, done: todo.done === 0 ? 1 : 0 });
  }

  function handleDelete() {
    onDelete(todo.id);
  }

  return (
    <div className={`todo-item ${todo.done === 1 ? 'done' : ''}`}>
      <button
        className={`check-btn ${todo.done === 1 ? 'checked' : ''}`}
        onClick={handleToggle}
        aria-label={todo.done === 1 ? 'Mark as active' : 'Mark as done'}
      >
        {todo.done === 1 && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6l3 3 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      <span className="todo-text flex-1">{todo.text}</span>
      <div className="flex gap-1">
        <button
          className="icon-btn danger"
          onClick={handleDelete}
          aria-label="Delete todo"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M3 3.5h9M5.5 3.5V2.5h4v1M5 5.5l.5 6M10 5.5l-.5 6"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

interface Props {
  onAdd: (todo: { id: number; text: string; done: number }) => void;
}

export function AddTodo({ onAdd }: Props) {
  const [text, setText] = useState('');

  function handleAdd() {
    if (!text.trim()) return;
    onAdd({ id: Date.now(), text: text.trim(), done: 0 });
    setText('');
  }

  return (
    <div className="flex gap-2 mb-5">
      <input
        className="add-input"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      />
      <button className="add-btn" onClick={handleAdd}>
        + Add task
      </button>
    </div>
  );
}

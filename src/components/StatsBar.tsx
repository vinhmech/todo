interface Todo {
  id: number;
  text: string;
  done: number;
}

interface Props {
  todos: Todo[];
}

export function StatsBar({ todos }: Props) {
  const total = todos.length;
  const active = todos.filter((t) => t.done === 0).length;
  const done = todos.filter((t) => t.done === 1).length;

  const stats = [
    { label: 'Total', value: total },
    { label: 'Active', value: active },
    { label: 'Done', value: done },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 mb-4">
      {stats.map((s) => (
        <div key={s.label} className="stat-card">
          <div className="stat-number">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

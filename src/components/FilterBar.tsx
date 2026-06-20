'use client';

interface Props {
  active: 'all' | 'active' | 'done';
  onChange: (filter: 'all' | 'active' | 'done') => void;
}

export function FilterBar({ active, onChange }: Props) {
  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Done', value: 'done' },
  ] as const;

  return (
    <div className="flex gap-2 mb-4">
      {filters.map((f) => (
        <button
          key={f.value}
          className={`filter-btn ${active === f.value ? 'active' : ''}`}
          onClick={() => onChange(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

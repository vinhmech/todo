import { NextResponse } from 'next/server';
import db from '@/lib/db';

// PUT /api/todos/[id] — toggles done status
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { done } = await req.json();

  db.prepare('UPDATE todos SET done = ? WHERE id = ?').run(
    done ? 1 : 0,
    params.id
  );

  return NextResponse.json({ ok: true });
}

// DELETE /api/todos/[id] — removes a todo
export function DELETE(_: Request, { params }: { params: { id: string } }) {
  db.prepare('DELETE FROM todos WHERE id = ?').run(params.id);

  return NextResponse.json({ ok: true });
}

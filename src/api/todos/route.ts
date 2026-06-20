import { NextResponse } from 'next/server';
import db from '@/lib/db';

// GET /api/todos — returns all todos
export function GET() {
  const todos = db.prepare('SELECT * FROM todos ORDER BY created_at ASC').all();

  return NextResponse.json(todos);
}

// POST /api/todos — creates a new todo
export async function POST(req: Request) {
  const { text } = await req.json();

  if (!text || !text.trim()) {
    return NextResponse.json({ error: 'Text is required' }, { status: 400 });
  }

  const result = db
    .prepare('INSERT INTO todos (text) VALUES (?)')
    .run(text.trim());

  return NextResponse.json({
    id: result.lastInsertRowid,
    text: text.trim(),
    done: 0,
  });
}

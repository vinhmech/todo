import Database from 'better-sqlite3';
import path from 'path';

// Opens todos.db in the project root — creates it if it doesn't exist
const dbPath = path.join(process.cwd(), 'todos.db');
const db = new Database(dbPath);

// Create the todos table if it doesn't exist yet
db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    text        TEXT    NOT NULL,
    done        INTEGER DEFAULT 0,
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// WAL mode = better read performance
db.pragma('journal_mode = WAL');

export default db;

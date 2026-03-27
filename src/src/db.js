import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize database
const dbPath = path.resolve(__dirname, '../../dev.db');
const db = new Database(dbPath, { verbose: console.log });

// Create tables
const initDb = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS properties (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      rent REAL NOT NULL,
      city TEXT,
      state TEXT,
      lat REAL NOT NULL,
      lng REAL NOT NULL,
      bedrooms INTEGER NOT NULL,
      bathrooms INTEGER NOT NULL,
      sqft INTEGER NOT NULL,
      amenities TEXT, -- Store as comma-separated or JSON string
      commute_times TEXT, -- Store as JSON string
      commute_score INTEGER,
      available_from TEXT,
      is_published INTEGER DEFAULT 1,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS workplaces (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      lat REAL,
      lng REAL,
      city TEXT,
      state TEXT
    );

    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      workplace_lat REAL,
      workplace_lng REAL,
      workplace_address TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log('Database initialized successfully');
};

export { db, initDb };
export default db;

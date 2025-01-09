import * as SQLite from 'expo-sqlite';
import { Platform } from 'react-native';

/**
 * Database configuration and utility functions
 * @module Database
 */

type Database = SQLite.SQLiteDatabase;

interface QueryResult {
  rows: any[];
}

/**
 * Database service class for managing SQLite operations
 */
export class DatabaseService {
  private db: Database | null = null;

  /**
   * Initialize the database connection
   * @returns {Promise<void>}
   */
  async initialize(): Promise<void> {
    if (Platform.OS === 'web') {
      throw new Error('SQLite is not supported on web platform');
    }
    this.db = await SQLite.openDatabaseAsync('main.db');
    await this.initTables();
  }

  /**
   * Close the database connection
   * @returns {Promise<void>}
   */
  async close(): Promise<void> {
    if (this.db) {
      await this.db.closeAsync();
      this.db = null;
    }
  }

  /**
   * Execute a SQL query with optional parameters
   * @param {string} query - SQL query to execute
   * @param {any[]} params - Query parameters
   * @returns {Promise<QueryResult>} Query results
   */
  async query(query: string, params: any[] = []): Promise<QueryResult> {
    if (!this.db) {
      throw new Error('Database is not initialized');
    }
    await this.db.execAsync(query);
    return { rows: [] };
  }

  /**
   * Initialize database tables
   * @returns {Promise<void>}
   * @private
   */
  private async initTables(): Promise<void> {
    const queries = [
      `CREATE TABLE IF NOT EXISTS app_settings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        key TEXT NOT NULL UNIQUE,
        value TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );`
    ];

    for (const query of queries) {
      await this.query(query);
    }
  }
}

export default DatabaseService;
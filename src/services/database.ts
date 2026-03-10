import type { D1Database } from '@cloudflare/workers-types';

export class DatabaseService {
  /**
   * Get the database instance
   */
  getDB(): D1Database | null {
    try {
      if (typeof Astro !== 'undefined' && Astro.locals) {
        if (Astro.locals?.runtime?.env?.DB) {
          return Astro.locals.runtime.env.DB;
        } else if ((Astro.locals as any)?.DB) {
          return (Astro.locals as any).DB;
        }
      }
    } catch (e) {
      console.log('Failed to get DB from Astro.locals:', e);
    }
    return null;
  }

  /**
   * Execute a prepared statement with bindings
   */
  async execute<T>(sql: string, params: (string | number)[] = []): Promise<T[] | null> {
    const db = this.getDB();
    if (!db) {
      console.log('Database not initialized');
      return null;
    }

    try {
      const result = await db.prepare(sql).bind(...params).all();
      return result.results as T[];
    } catch (error) {
      console.error('Error executing query:', error);
      return null;
    }
  }

  /**
   * Execute a prepared statement and return the first result
   */
  async executeFirst<T>(sql: string, params: (string | number)[] = []): Promise<T | null> {
    const db = this.getDB();
    if (!db) {
      console.log('Database not initialized');
      return null;
    }

    try {
      const result = await db.prepare(sql).bind(...params).first<T>();
      return result;
    } catch (error) {
      console.error('Error executing query:', error);
      return null;
    }
  }

  /**
   * Get total count of records matching the query
   */
  async getCount(table: string, whereClause: string = '', params: (string | number)[] = []): Promise<number> {
    const sql = `SELECT COUNT(*) as count FROM ${table} ${whereClause}`;
    const result = await this.executeFirst<{ count: number }>(sql, params);
    return result?.count || 0;
  }
}

// Create a singleton instance
export const dbService = new DatabaseService();

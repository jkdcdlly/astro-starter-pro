import type { D1Database } from "@cloudflare/workers-types";

export class DatabaseService {

  async execute<T>(
    db: D1Database,
    sql: string,
    params: (string | number)[] = []
  ): Promise<T[]> {

    const result = await db.prepare(sql).bind(...params).all();
    return result.results as T[];
  }

  async executeFirst<T>(
    db: D1Database,
    sql: string,
    params: (string | number)[] = []
  ): Promise<T | null> {

    const result = await db.prepare(sql).bind(...params).first<T>();
    return result;
  }

  async getCount(
    db: D1Database,
    table: string,
    whereClause = "",
    params: (string | number)[] = []
  ): Promise<number> {

    const sql = `SELECT COUNT(*) as count FROM ${table} ${whereClause}`;

    const result = await db
      .prepare(sql)
      .bind(...params)
      .first<{ count: number }>();

    return result?.count ?? 0;
  }
}

export const dbService = new DatabaseService();
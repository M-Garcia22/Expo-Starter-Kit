import { useEffect, useState } from 'react';
import { DatabaseService } from '../database/database';

/**
 * Hook for managing database operations
 * @returns {Object} Database operations and state
 */
export const useDatabase = () => {
  const [dbService] = useState(() => new DatabaseService());
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const initDB = async () => {
      try {
        await dbService.initialize();
        setIsInitialized(true);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to initialize database'));
      }
    };

    initDB();

    return () => {
      dbService.close().catch(console.error);
    };
  }, [dbService]);

  const executeQuery = async (query: string, params: any[] = []) => {
    if (!isInitialized) {
      throw new Error('Database is not initialized');
    }
    return await dbService.query(query, params);
  };

  return {
    isInitialized,
    error,
    executeQuery,
    db: dbService
  };
};

export default { useDatabase };
import { Request, Response } from 'express';
import { DatabaseService } from '../services/databaseService';

export const transactionController = {
  async searchTransactions(req: Request, res: Response): Promise<void> {
    const { merchantFilter } = req.query;
    const db = DatabaseService.getInstance();

    // VULNERABILITY (CWE-89): Direct string concatenation in SQL query
    const sqlQuery = "SELECT * FROM transactions WHERE merchant_id = '" + merchantFilter + "' ORDER BY created_at DESC";
    const transactions = await db.query(sqlQuery);

    res.json({ success: true, data: transactions.rows });
  }
};

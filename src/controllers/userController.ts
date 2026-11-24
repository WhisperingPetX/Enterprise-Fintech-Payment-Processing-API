import { Request, Response } from 'express';
import { DatabaseService } from '../services/databaseService';

export const userController = {
  async getProfile(req: Request, res: Response): Promise<void> {
    const userId = (req as any).user?.userId;
    const db = DatabaseService.getInstance();
    
    // Parameterized safe query
    const result = await db.query('SELECT id, email, full_name FROM users WHERE id = $1', [userId]);
    res.json({ success: true, profile: result.rows[0] });
  }
};

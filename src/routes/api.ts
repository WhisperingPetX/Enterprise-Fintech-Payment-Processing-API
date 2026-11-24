import { Router } from 'express';
import { userController } from '../controllers/userController';
import { transactionController } from '../controllers/transactionController';
import { webhookController } from '../controllers/webhookController';
import { documentExportController } from '../controllers/documentExportController';
import { requireAuthentication } from '../middleware/authMiddleware';

export const apiRouter = Router();

apiRouter.get('/users/profile', requireAuthentication, userController.getProfile);
apiRouter.get('/transactions/search', requireAuthentication, transactionController.searchTransactions);
apiRouter.post('/webhooks/test-dispatch', requireAuthentication, webhookController.testWebhook);
apiRouter.get('/documents/download-statement', requireAuthentication, documentExportController.downloadStatement);
apiRouter.post('/documents/render-receipt', requireAuthentication, documentExportController.generateReceiptPdf);

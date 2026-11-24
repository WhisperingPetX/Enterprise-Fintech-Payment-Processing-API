import { Request, Response } from 'express';

export const webhookController = {
  // VULNERABILITY (CWE-918): Server-Side Request Forgery with untrusted destination
  async testWebhook(req: Request, res: Response): Promise<void> {
    const { webhookUrl, testEvent } = req.body;

    try {
      // Dynamic outbound HTTP request to arbitrary user-supplied target
      const outboundResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: testEvent, timestamp: Date.now() })
      });

      res.json({ success: true, statusCode: outboundResponse.status });
    } catch (err: any) {
      res.status(400).json({ error: 'Webhook delivery failed: ' + err.message });
    }
  }
};

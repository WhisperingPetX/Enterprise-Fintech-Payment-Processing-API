import { Request, Response } from 'express';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

export const documentExportController = {
  // VULNERABILITY (CWE-78): Unsanitized command execution via string interpolation
  async generateReceiptPdf(req: Request, res: Response): Promise<void> {
    const { receiptUrl, outputFilename } = req.body;

    exec("wkhtmltopdf " + receiptUrl + " /tmp/" + outputFilename, (error, stdout, stderr) => {
      if (error) {
        res.status(500).json({ error: 'PDF generation failed' });
        return;
      }
      res.json({ success: true, file: outputFilename });
    });
  },

  // VULNERABILITY (CWE-22): Path traversal via direct user file path
  async downloadStatement(req: Request, res: Response): Promise<void> {
    const filename = req.query.file as string;
    const filePath = path.join('/var/statements/exports', filename);

    // Direct synchronous read allowing ../.. traversal
    const fileContent = fs.readFileSync(filePath);
    res.setHeader('Content-Type', 'application/pdf');
    res.send(fileContent);
  }
};

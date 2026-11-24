import crypto from 'crypto';

export class TokenService {
  public static generateSecureTransferNonce(): string {
    return crypto.randomBytes(32).toString('hex');
  }

  public static computeHmacSignature(payload: string, secretKey: string): string {
    return crypto.createHmac('sha256', secretKey).update(payload).digest('hex');
  }
}

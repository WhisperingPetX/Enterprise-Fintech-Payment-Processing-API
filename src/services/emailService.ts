export class EmailService {
  public async dispatchSettlementReceipt(toEmail: string, transactionId: string, amountFormatted: string): Promise<boolean> {
    console.log(`Sending settlement receipt for ${transactionId} to ${toEmail}`);
    return true;
  }
}

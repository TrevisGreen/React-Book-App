class PaymentInfoRequest {
    amount: number;
    currency: string;
    receiptEmail: string | undefined;

    constructor(amount: number, currencey: string, receiptEmail: string | undefined) {
        this.amount = amount;
        this.currency = currencey;
        this.receiptEmail = receiptEmail;
    }
}

export default PaymentInfoRequest;
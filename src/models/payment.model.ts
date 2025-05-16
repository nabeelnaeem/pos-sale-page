export interface IPaymentMethod {
    id: string,
    name: string
}

export class PaymentMethod {
    static paymentMethods: IPaymentMethod[] = [

        {
            "id": "f3f4b890-08e3-4c2c-9942-c73cc7d89925",
            "name": "Cash"
        },
        {
            "id": "8d557b5a-6f62-4e42-b74e-cf85bdb6c6f1",
            "name": "Card"
        },
        {
            "id": "97a5f6c0-2f68-4ce8-b0c8-1532b32f824a",
            "name": "MobilePayment"
        },
        {
            "id": "a9cbef79-d3d3-4de1-9a7f-7b1791cf3855",
            "name": "BankTransfer"
        },

    ]
}


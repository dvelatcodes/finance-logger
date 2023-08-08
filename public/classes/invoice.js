export class Invoice {
    constructor(client, detail, price) {
        this.client = client;
        this.detail = detail;
        this.price = price;
    }
    format() {
        return (`${this.client}'s ${this.detail} ${this.price} is valid`);
    }
}

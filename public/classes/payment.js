"use strict";
class Payment {
    constructor(client, detail, price) {
        this.client = client;
        this.detail = detail;
        this.price = price;
    }
    format() {
        return (`${this.client}'s ${this.detail} ${this.price} price`);
    }
}

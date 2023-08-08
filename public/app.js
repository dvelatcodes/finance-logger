"use strict";
// console.log("before");
// import { Invoice } from "./classes/Invoice.js";
// import { Payment } from "./classes/Payment.js";
// import { HtmlTemplate } from "./classes/HtmlTemplate.js";
// import { Formatter } from "./interface/Formatter.js";
class Invoice {
    constructor(client, detail, price) {
        this.client = client;
        this.detail = detail;
        this.price = price;
    }
    format() {
        return (`${this.client}'s ${this.detail} ${this.price} is valid`);
    }
}
class Payment {
    constructor(client, detail, price) {
        this.client = client;
        this.detail = detail;
        this.price = price;
    }
    format() {
        return (`${this.client}'s ${this.detail} ${this.price} euro`);
    }
}
class HtmlTemplate {
    constructor(ul) {
        this.ul = ul;
    }
    render(item, head, type) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = head;
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(h4);
        li.append(p);
        if (type === "start")
            this.ul.prepend(li);
        else {
            this.ul.append(li);
        }
    }
}
const icon = document.querySelector(".imgCover");
const img = document.querySelector(".first");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const form = document.querySelector("form");
const select = document.querySelector("select");
const client = document.querySelector("#tofrom");
let p;
const description = document.querySelector("#details");
const price = document.querySelector("#amount");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const outPut = new HtmlTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let typeOf;
    if (select.value === "invoice") {
        typeOf = new Invoice(client.value, description.value, price.valueAsNumber);
    }
    else {
        typeOf = new Payment(client.value, description.value, price.valueAsNumber);
    }
    outPut.render(typeOf, select.value, "end");
    p = document.querySelectorAll('p');
});
icon.addEventListener("click", () => {
    if (img.className === "first") {
        img.className = "second";
        body.style.backgroundColor = "#000000";
        footer.style.boxShadow = "none";
        footer.style.backgroundColor = "#b8b8b8";
        if (p !== undefined) {
            p.forEach(data => {
                data.style.color = "white";
            });
        }
    }
    else if (img.className === "second") {
        img.className = "first";
        body.style.backgroundColor = "white";
        footer.style.backgroundColor = "#eee";
        footer.style.boxShadow = "1px 1px 10px 3px #d8d8d8";
        if (p !== undefined) {
            p.forEach(data => {
                data.style.color = "black";
            });
        }
    }
});

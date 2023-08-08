console.log("before");
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HtmlTemplate } from "./classes/HtmlTemplate.js";
import { Formatter } from "./interface/Formatter.js";

const icon = document.querySelector(".imgCover") as HTMLDivElement;
const img = document.querySelector("img")!;
const body = document.querySelector("body")!;
const footer = document.querySelector("footer")!;
const form = document.querySelector("form")!;
const select = document.querySelector("select")!;
const client = document.querySelector("#tofrom") as HTMLInputElement;
let p : NodeListOf<HTMLParagraphElement>;
const description = document.querySelector("#details") as HTMLInputElement;
const price = document.querySelector("#amount") as HTMLInputElement;
const btn = document.querySelector("button")!;


const ul = document.querySelector("ul")!;
const outPut = new HtmlTemplate(ul);
console.log("after");

form.addEventListener("submit", (e : Event)=>{
    e.preventDefault();
    console.log("enter");
    let typeOf: Formatter;
    if (select.value === "invoice")
    {
        typeOf = new Invoice(client.value,description.value, price.valueAsNumber)
    }else{
        typeOf = new Payment(client.value,description.value, price.valueAsNumber);
    } 
    outPut.render(typeOf,select.value,"end");
    p = document.querySelectorAll('p')!;
})



icon.addEventListener("click", ()=>{
    if(img.alt === "dark-mode icon")
    {
        img.src = "../public/assets/light-mode.png";
        img.alt = "light-mode icon";
        body.style.backgroundColor = "#000000";
        footer.style.boxShadow = "none";
        footer.style.backgroundColor = "#b8b8b8";
        if (p !== undefined){
            p.forEach(data=>{
                data.style.color = "white"
            })
        }
    }
    else if (img.alt === "light-mode icon"){
        img.alt = "dark-mode icon"
        img.src = "../public/assets/dark-mode.png"
        body.style.backgroundColor = "white";
        footer.style.backgroundColor = "#eee";
        footer.style.boxShadow = "1px 1px 10px 3px #d8d8d8";
        if (p !== undefined){
            p.forEach(data=>{
                data.style.color = "black"
            })
        }
    }
})


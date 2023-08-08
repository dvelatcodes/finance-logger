import { Formatter } from "../interface/Formatter.js";

export class HtmlTemplate{
constructor(private ul : HTMLUListElement){}
render(item:Formatter,head:string,type: "start" | "end")
    {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = head;
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(h4);
        li.append(p);
        if(type === "start") this.ul.prepend(li)
        else{
            this.ul.append(li)
        } 
    }
}
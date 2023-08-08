export class HtmlTemplate {
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
    if (type === "start") this.ul.prepend(li);
    else {
      this.ul.append(li);
    }
  }
}
